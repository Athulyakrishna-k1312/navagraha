const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

function buildPrompt({ name, mulank, bhagyank, ascSign, placements }) {
  return `You are a warm, insightful Vedic astrologer and numerologist.

Given this person's computed birth data, write a personalized reading.

Be specific and avoid generic filler. Ground each section in the actual numbers and planetary placements provided.

Do not make medical or financial guarantees.

Name: ${name}
Mulank (root number): ${mulank}
Bhagyank (life path number): ${bhagyank}
Ascendant sign: ${ascSign}
Planetary placements: ${placements}

Return ONLY valid JSON with exactly these keys:

{
  "overview": "short synthesis of personality",
  "houses": "notable planet-in-house reading",
  "love": "love life and relationship patterns",
  "career": "career strengths, direction and challenges",
  "success": "what success looks like and how they reach it"
}`;
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({
      error: "GEMINI_API_KEY is not set on the server. Add it in your Vercel project's Environment Variables.",
    });
  }

  try {
    const { name, mulank, bhagyank, ascSign, placements } = req.body || {};

    if (!name || !mulank || !bhagyank || !ascSign || !placements) {
      return res.status(400).json({
        error: "Missing required fields: name, mulank, bhagyank, ascSign, placements.",
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: buildPrompt({ name, mulank, bhagyank, ascSign, placements }),
      config: {
        responseMimeType: "application/json",
        maxOutputTokens: 1600,
      },
    });

    const clean = response.text.trim();

    let parsed;
    try {
      parsed = JSON.parse(clean);
    } catch (parseErr) {
      console.error("Failed to parse Gemini output:", clean);
      return res.status(502).json({ error: "Gemini returned malformed JSON. Please try again." });
    }

    res.status(200).json(parsed);
  } catch (err) {
    console.error(err);
    const status = err.status || 500;
    res.status(status).json({ error: err.message || "Unexpected server error." });
  }
};
