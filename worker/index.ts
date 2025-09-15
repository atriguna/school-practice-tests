export default {
    async fetch(req: Request, env: { DEEPSEEK_KEY: string }) {
      const url = new URL(req.url);
  
      // Handle /api/chat
      if (url.pathname.startsWith("/api/chat") && req.method === "POST") {
        const { message } = await req.json();
  
        const res = await fetch("https://api.deepseek.com/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${env.DEEPSEEK_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "deepseek-chat",
            messages: [
              { role: "system", content: "You are an educational assistant." },
              { role: "user", content: message },
            ],
          }),
        });
  
        const data = await res.json();
        return Response.json({ reply: data.choices?.[0]?.message?.content ?? "⚠️ No reply" });
      }
  
      // Handle /api/question
      if (url.pathname.startsWith("/api/question") && req.method === "POST") {
        const { grade } = await req.json();
  
        const prompt = `
        Generate 5 multiple-choice questions for grade ${grade} Cambridge Math.
        Format JSON only: { "questions": [ { "question": "...", "options": ["A","B","C","D"], "correctAnswer": "...", "explanation": "...", "topic": "..." } ] }
        `;
  
        const res = await fetch("https://api.deepseek.com/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${env.DEEPSEEK_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "deepseek-chat",
            messages: [{ role: "user", content: prompt }],
          }),
        });
  
        const data = await res.json();
        const content = data.choices?.[0]?.message?.content ?? "{}";
        let parsed = { questions: [] };
        try {
          parsed = JSON.parse(content.replace(/```json|```/g, "").trim());
        } catch {}
  
        return Response.json(parsed.questions?.length ? parsed : {
          questions: [
            {
              question: "2 + 3 = ?",
              options: ["4","5","6","7"],
              correctAnswer: "5",
              explanation: "Adding 2 and 3 gives 5.",
              topic: "basic math"
            }
          ]
        });
      }
  
      // Handle /api/explain
      if (url.pathname.startsWith("/api/explain") && req.method === "POST") {
        const { question, wrongAnswer, grade } = await req.json();
  
        const prompt = `
        A grade ${grade} student answered this incorrectly.
        Question: ${question}
        Wrong Answer: ${wrongAnswer}
        Explain why it's wrong and give the correct step-by-step solution.
        `;
  
        const res = await fetch("https://api.deepseek.com/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${env.DEEPSEEK_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "deepseek-chat",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.6,
          }),
        });
  
        const data = await res.json();
        return Response.json({
          explanation: data.choices?.[0]?.message?.content ?? "⚠️ No explanation"
        });
      }
  
      return new Response("Not Found", { status: 404 });
    }
  };
  