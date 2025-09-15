import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { question, wrongAnswer, grade } = await req.json();

    const prompt = `
You are a friendly teacher helping a grade ${grade} student.
The student answered the question incorrectly.

Question: "${question}"
Wrong answer: ${wrongAnswer}

Please explain in simple English, as if you are talking to a child.
- Use a friendly and encouraging tone.
- Keep the explanation short and easy to understand.
- Use simple step-by-step reasoning.
- Add small emojis (⚽🥫🌟) to make it fun.
- End with a short motivational message.

Return the explanation in Markdown format.
`;

    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.6,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    const explanation =
      data.choices?.[0]?.message?.content || "Sorry, I couldn’t generate an explanation.";

    return NextResponse.json({ explanation });
  } catch (err) {
    console.error("❌ Error in explanation API:", err);
    return NextResponse.json(
      { explanation: "Sorry, something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
