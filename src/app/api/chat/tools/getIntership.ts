import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of internship I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my internship search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here's what I'm looking for 👇

- 📅 **Duration**: 6-month internship starting **September 2025**
- 🌍 **Location**: Preferably **Pune, Mumbai, Bangalore** 🇮🇳
- 🧑‍💻 **Focus**: AI development, full-stack web apps, SaaS, agentic workflows
- 🛠️ **Stack**: Python, React/Next.js, Tailwind CSS, TypeScript, GPT, RAG, etc.
- ✅ **What I bring**: 2x hackathon semifinalist (NEST, Createch). Worked for 2 startups (Ziel Lab and StepsAI) providing AI and backend solutions. At Ziel Lab, I automated outreach, CRM, and SEO workflows. Besides, I have researched under Dr. Parajyothi Borah as an intern, developing modular RAG from scratch.
- 🔥 I move fast, learn faster, and I'm HUNGRYYYYY for big challenges

📬 **Contact me** via:
- Email: amansinghwork@gmail.com
- LinkedIn: [linkedin.com/in/aman-singh](https://www.linkedin.com/in/aman-singh-3a6551259/)
- GitHub: [github.com/DataLunatic69](https://github.com/DataLunatic69)

Let's build cool shit together ✌️
    `;
  },
});
