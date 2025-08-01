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

    console.log('[CHAT-API] Cleaned messages:', JSON.stringify(cleanMessages, null, 2));

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
    console.log('[CHAT-API] Groq response:', JSON.stringify(data, null, 2));
    
    const content = data.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
    console.log('[CHAT-API] Extracted content:', content);

    // Return the response in a format that the frontend can handle
    return new Response(JSON.stringify({ 
      id: Date.now().toString(),
      role: 'assistant',
      content: content
    }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('Global error:', err);
    const errorMessage = errorHandler(err);
    return new Response(errorMessage, { status: 500 });
  }
}
