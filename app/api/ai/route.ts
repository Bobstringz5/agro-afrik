import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { question, species, symptoms } = await request.json();

  if (!question) {
    return NextResponse.json({ error: "Question is required." }, { status: 400 });
  }

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({
      answer:
        "Check the animal's temperature, isolate sick animals, review feed and water changes, and contact a verified veterinarian for severe or persistent symptoms.",
      escalation: "Set OPENAI_API_KEY to enable production AI responses.",
    });
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL ?? "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content:
            "You are AGRO-AFRIK's livestock assistant. Give practical, cautious farm guidance, recommend contacting a veterinarian for high-risk symptoms, and never claim to replace professional diagnosis.",
        },
        {
          role: "user",
          content: `Species: ${species ?? "unknown"}\nSymptoms: ${symptoms ?? "not provided"}\nQuestion: ${question}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "AI service unavailable." }, { status: 502 });
  }

  const data = await response.json();
  return NextResponse.json({
    answer: data.output_text ?? "Review animal records and contact a verified veterinarian.",
  });
}
