import { SYSTEM_PROMPT } from './prompt';

export const maxDuration = 30;

function errorHandler(error: unknown) {
  if (error == null) {
    return 'Unknown error';
  }
  if (typeof error === 'string') {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return JSON.stringify(error);
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log('[CHAT-API] Incoming messages:', messages);

    // Clean messages to be compatible with Groq API
    const cleanMessages = messages.map((msg: any) => {
      // Remove any 'parts' property and ensure proper format
      const { parts, ...cleanMsg } = msg;
      return cleanMsg;
    });

    // Add system prompt at the beginning
    cleanMessages.unshift(SYSTEM_PROMPT);

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: cleanMessages,
        stream: false,
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Groq API error details:', errorText);
      throw new Error(`Groq API error: ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    // Create a simple streaming response that the Vercel AI SDK can handle
    const stream = new ReadableStream({
      start(controller) {
        // Send the complete response as a single chunk in the correct format
        const responseData = {
          type: 'text-delta',
          textDelta: content
        };
        
        controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify(responseData)}\n\n`));
        controller.enqueue(new TextEncoder().encode('data: [DONE]\n\n'));
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (err) {
    console.error('Global error:', err);
    const errorMessage = errorHandler(err);
    return new Response(errorMessage, { status: 500 });
  }
}