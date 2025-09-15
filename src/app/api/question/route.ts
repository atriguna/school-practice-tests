// src/app/api/question/route.ts
import { NextResponse } from "next/server";
import { mathCurriculum, getRandomSubtopic } from "../../../data/mathCurriculum";

// 🔹 helper JSON parse dengan sanitizer
function safeJsonParse(content: string) {
  try {
    const clean = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(clean);
  } catch (err) {
    console.error("❌ Failed to parse AI JSON:", err, content);
    return { questions: [] };
  }
}

export async function POST(req: Request) {
  const { grade } = await req.json();

  const gradeId = `grade-${grade}`;
  const gradeData = mathCurriculum[gradeId];
  if (!gradeData) {
    console.error("❌ Invalid grade:", gradeId);
    return NextResponse.json({ questions: [] });
  }

  const subtopic = getRandomSubtopic(gradeId) || "general math";

  console.log("🎯 Selected grade:", gradeData.name);
  console.log("📘 Selected subtopic:", subtopic);

  const prompt = `
  Generate 5 multiple-choice questions for ${gradeData.name} students
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

  try {
    const aiRes = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: "You are a helpful math teacher." },
          { role: "user", content: prompt },
        ],
      }),
    });

    const aiJson = await aiRes.json();
    const content = aiJson.choices?.[0]?.message?.content || "{}";
    const parsed = safeJsonParse(content);

    // 🔹 Fallback jika kosong
    if (!parsed || !parsed.questions || parsed.questions.length === 0) {
      console.warn("⚠️ AI returned no questions, using fallback.");
      return NextResponse.json({
        questions: [
          {
            question: "2 + 3 = ?",
            options: ["4", "5", "6", "7"],
            correctAnswer: "5",
            explanation: "Adding 2 and 3 gives 5.",
            topic: subtopic,
          },
        ],
      });
    }

    return NextResponse.json(parsed);
  } catch (err) {
    console.error("❌ Error fetching AI:", err);
    return NextResponse.json({
      questions: [
        {
          question: "5 + 5 = ?",
          options: ["8", "9", "10", "11"],
          correctAnswer: "10",
          explanation: "Adding 5 and 5 gives 10.",
          topic: subtopic,
        },
      ],
    });
  }
}
