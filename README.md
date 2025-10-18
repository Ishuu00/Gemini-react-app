# 🤖 Gemini Clone — Local AI Chat Assistant (React + Vite)

A lightweight, modern **React + Vite** frontend application designed to interface with the Google Gemini API (using the `@google/genai` library).

This project provides a simple, fast chat interface featuring:

* **Keyboard Control:** Textarea with **Enter** to send (use Shift+Enter for a new line).
* **Smooth UX:** Loader shimmer effect and smooth response fade-in transition.
* **Rich Content:** **Markdown** rendering of AI responses for better readability.

---

## 🌟 Key Features

* **Google Gen AI Integration:** Utilizes the official `@google/genai` client for all model interaction.
* **Rich Markdown Support:** Renders AI responses beautifully using `react-markdown` and `remark-gfm`.
* **Contextual State:** Global state management (`input`, `lastPrompt`, `resultData`, `loader`) is handled via **React Context**.
* **Fluid Interface:** Smart toggling of the Send button (only appears when there is input).

---

## 🚀 Quick Start (Setup & Run)

Follow these simple steps to get your local Gemini Assistant up and running:

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd "Gemini Clone"