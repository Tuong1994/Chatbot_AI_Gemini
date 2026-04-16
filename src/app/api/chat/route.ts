import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction:
        "You are a helpful assistant. Always use rich markdown formatting (tables, headings, bold, lists) where appropriate.",
    });

    // 1. Sử dụng generateContentStream thay vì generateContent
    const result = await model.generateContentStream(prompt);

    // 2. Tạo một ReadableStream để gửi về Client
    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            // Gửi từng phần nhỏ văn bản về
            controller.enqueue(encoder.encode(chunkText));
          }
        } catch (err) {
          controller.error(err);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return new Response(JSON.stringify({ error: "Failed" }), { status: 500 });
  }
}
