import { NextResponse } from "next/server";

const BLOCKED_KEYWORDS = [
  "porn", "sex", "drugs", "hack", "violence", "terrorism", "politics", "gambling"
];

const ALLOWED_TOPICS = [
  "education", "school", "study", "learning", "teacher", "student",
  "math", "science", "history", "exam", "class", "subject", "child", "university"
];

export async function POST(req: Request) {
  const { message } = await req.json();
  const lowerMsg = message.toLowerCase();

  //Cek blacklist
  if (BLOCKED_KEYWORDS.some((kw) => lowerMsg.includes(kw))) {
    return NextResponse.json({
      reply: "⚠️ Sorry, I can only help with safe education-related questions."
    });
  }

  //Cek whitelist (hanya boleh edukasi)
  if (!ALLOWED_TOPICS.some((kw) => lowerMsg.includes(kw))) {
    return NextResponse.json({
      reply: "⚠️ Sorry, I can only answer education-related questions (e.g., school, study tips, subjects, child education)."
    });
  }

  //Panggil LLM kalau lolos
  try {
    const res = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content: `
You are an educational assistant. 
You must only answer questions about education (school, study tips, child learning, math, science, subjects, exam prep, saving for children's education).
If a user asks outside of education, politely decline and remind them you can only help with educational topics. 
Keep your tone friendly and simple.
            `
          },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content || 
      "⚠️ Sorry, I can only answer education-related questions.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("❌ AI API error:", err);
    return NextResponse.json({
      reply: "⚠️ Sorry, there was an error. Please try again."
    });
  }
}
