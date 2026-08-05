Navagraha – AI-Powered Vedic Astrology & Numerology

Participant Details

- Name: Athulyakrishna K
- MUID: athulyakrishnak@mulearn

---

Project Overview

Navagraha is an AI-powered web application that combines Vedic astrology, numerology, and Generative AI to provide users with personalized birth chart interpretations.

The application computes a user's Vedic birth chart and core numerology numbers from their birth details, then uses Google's Gemini model to generate personalized insights about personality, planetary influences, career, relationships, and success.

The project aims to make personalized astrological guidance more accessible through a free, browser-based application.

---

Chosen Use Case

Provide users with an instant AI-generated Vedic astrology and numerology report based on their birth details without requiring a paid consultation.

---

AI Platform / Model Used

- Platform: Google Gemini API
- Model: Gemini Flash (via Google GenAI SDK)

---

Key Features

- Birth details form (Name, Date, Time, Place)
- Automatic city lookup with manual override
- South Indian style Vedic birth chart generation
- Sidereal planetary position calculation
- Ascendant and house calculation
- Mulank and Bhagyank numerology
- AI-generated personalized interpretations
- Career, Love, Success and Personality insights
- Secure server-side Gemini API integration

---

Tech Stack

- HTML
- JavaScript
- Node.js
- Vercel Serverless Functions
- Google Gemini API

---

Project Structure

navagraha/
│
├── api/
│   └── reading.js
├── index.html
├── package.json
└── vercel.json

---

Installation

1. Clone the repository.

2. Install dependencies.

npm install

3. Configure the Gemini API key as an environment variable.

4. Run the project locally.

vercel dev

---

Live Demo

https://navagraha-kohl.vercel.app/

---

GitHub Repository

https://github.com/Athulyakrishna-k1312/navagraha

---

Key Observations

- Combining deterministic astrology calculations with an LLM produces more personalized and meaningful responses.
- Server-side API integration keeps the Gemini API key secure.
- Prompt engineering significantly improves the quality and consistency of AI-generated interpretations.
- Separating calculations from language generation results in faster response times and more reliable outputs.

---

Challenges Faced

- Implementing Vedic chart calculations in JavaScript.
- Handling birth location lookup and timezone differences.
- Designing prompts that produce consistent and well-structured interpretations.
- Integrating AI responses smoothly with deterministic calculations.
- Ensuring secure deployment without exposing API credentials.

---

Future Improvements

- Support for additional regional chart styles.
- More accurate astronomical calculations using professional ephemeris data.
- Multi-language support.
- PDF report generation.
- User accounts and report history.
- Expanded compatibility and relationship analysis.

---

License

This project was developed for Epochs '26 – Assignment 10 as an educational demonstration of Generative AI integrated with Vedic astrology and numerology.