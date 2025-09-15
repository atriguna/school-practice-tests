export default {
    async fetch(req: Request, env: { DEEPSEEK_KEY: string }) {
      const url = new URL(req.url);
  
      // 🔹 Helper: tambahin CORS header
      function withCORS(res: Response) {
        const headers = new Headers(res.headers);
        headers.set("Access-Control-Allow-Origin", "*");
        headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
        return new Response(res.body, { ...res, headers });
      }
  
      // 🔹 Handle preflight CORS
      if (req.method === "OPTIONS") {
        return new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        });
      }
  
      // ========================
      //  📌 /api/chat
      // ========================
      if (url.pathname.startsWith("/api/chat") && req.method === "POST") {
        const { message } = await req.json();
  
        const res = await fetch("https://api.deepseek.com/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${env.DEEPSEEK_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "deepseek-chat",
            messages: [
              {
                role: "system",
                content: `You are an educational assistant. 
  You must only answer questions about education (school, study tips, child learning, math, science, subjects, exam prep, saving for children's education).
  If a user asks outside of education, politely decline and remind them you can only help with educational topics. 
  Keep your tone friendly and simple.`,
              },
              { role: "user", content: message },
            ],
          }),
        });
  
        const data = await res.json();
        return withCORS(
          Response.json({
            reply: data.choices?.[0]?.message?.content ?? "⚠️ No reply",
          })
        );
      }
  
      // ========================
      //  📌 /api/question
      // ========================
      if (url.pathname.startsWith("/api/question") && req.method === "POST") {
        const { grade } = await req.json();
        const subtopic = "general math"; // bisa di-random
  
        const prompt = `
  Generate 5 multiple-choice questions for grade ${grade} students
  based on the Cambridge curriculum subtopic: "${subtopic}".
  
  Rules:
  - Strictly align with Cambridge curriculum.
  - Provide 4 options (A–D).
  - Ensure one correctAnswer is included in the options.
  - Add a short explanation (1–2 sentences).
  - Return valid JSON only.
  
  Format:
  {
    "questions": [
      {
        "question": "Question text",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correctAnswer": "Correct option text",
        "explanation": "1–2 sentences explanation",
        "topic": "${subtopic}"
      }
    ]
  }
  `;
  
        const res = await fetch("https://api.deepseek.com/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${env.DEEPSEEK_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "deepseek-chat",
            messages: [
              { role: "system", content: "You are a helpful math teacher." },
              { role: "user", content: prompt },
            ],
          }),
        });
  
        const data = await res.json();
        const content = data.choices?.[0]?.message?.content ?? "{}";
  
        let parsed = { questions: [] };
        try {
          parsed = JSON.parse(content.replace(/```json|```/g, "").trim());
        } catch {
          console.error("⚠️ Failed to parse AI JSON, using fallback.");
        }
  
        // 🟢 Strip jawaban & penjelasan biar ga bisa diintip
        const safeQuestions = parsed.questions?.map((q: any, i: number) => ({
          id: `q${i + 1}`,
          question: q.question,
          options: q.options,
          topic: q.topic,
        }));
  
        return withCORS(
          Response.json(
            safeQuestions?.length
              ? { questions: safeQuestions }
              : {
                  questions: [
                    {
                      id: "q1",
                      question: "2 + 3 = ?",
                      options: ["4", "5", "6", "7"],
                      topic: subtopic,
                    },
                  ],
                }
          )
        );
      }
  
      // ========================
      //  📌 /api/explain
      // ========================
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
            Authorization: `Bearer ${env.DEEPSEEK_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "deepseek-chat",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.6,
          }),
        });
  
        const data = await res.json();
        return withCORS(
          Response.json({
            explanation: data.choices?.[0]?.message?.content ?? "⚠️ No explanation",
          })
        );
      }
  
      // ========================
      //  📌 Default Not Found
      // ========================
      return withCORS(new Response("Not Found", { status: 404 }));
    },
  };
  