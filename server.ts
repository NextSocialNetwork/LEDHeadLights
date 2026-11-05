import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use('/api', express.json());

// Initialize Gemini API client only if a valid API key is present
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey && apiKey !== 'MY_GEMINI_API_KEY' && !apiKey.includes('placeholder')) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Built-in intelligent automotive bulb knowledge base fallback
const KNOWLEDGE_SUMMARY = `
You are the official AI Support Specialist for LEDHeadlights.Org (LED Headlights).
STORE & OWNER DETAILS:
- Name: LED Headlights (LEDHeadlights.Org)
- Contact Email: MantasChicago36@Gmail.Com
- Phone Number: +1 (312) 385 - 9229 (Call or Text, Chicago IL)
- Products: High-performance Headlights Mini 6000K Diamond White LED Headlight Bulbs
- Pricing: Exactly $35.00 each pair
- Shipping: $10 Flat-Rate Shipping nationwide (7-14 Business Days).
- Payment for shipping: Must be paid via Cash App to https://cash.app/$muahz26 ($muahz26).
- Local Pickup: Available in Chicago, IL (Contact Mantas at 312-385-9229 or MantasChicago36@Gmail.Com).
- Available Sockets in Stock ($35/pair):
  1. H1 - Single beam (Commonly used in projectors & fog lights)
  2. H3 - Single beam (Compact fog lights & aux lights)
  3. H4 / 9003 / HB2 - Dual Beam (Combined High Beam + Low Beam in one bulb)
  4. H7 - Single beam (Very popular in European cars like BMW, VW, Mercedes, Hyundai/Kia low beam)
  5. 9005 / HB5 / HB3 - High beam / single beam (Very common in Honda, Toyota, Ford, GM)
  6. H8 - Fog lights and select low beams
  7. H11 - Ultra popular low beam & fog lights (Subaru, Toyota, Honda, Ford, Chevy, Nissan, Mazda)
  8. H12 / 9055 - High-output fog lights & low beams (Chevy Silverado, Tahoe, Suburban, GMC Sierra, Ford Explorer)

CUSTOMER SATISFACTION & REVIEWS:
- 258 Verified 5-Star Reviews (5.0 / 5.0 Rating) from drivers who switched from factory halogen to 6000K LED.
- Average install time: ~8 minutes per side, true 1:1 mini size fits under factory dust caps.
- 0% glare to oncoming drivers with sharp laser cutoff.

SPECS:
- 6000K Diamond Crisp Pure White (Crystal clear night vision, 0% yellowish halogen tint, high contrast)
- 1:1 Mini Size (Same dimensions as factory halogen bulbs - true plug & play, zero wire cutting, fits inside factory dust covers)
- Aviation Aluminum Body with high-speed 12,000 RPM silent hydraulic cooling fan
- 300%+ brighter than standard halogen bulbs
- Canbus ready / 99% vehicle compatibility without flickering or dashboard errors
- IP68 Waterproof and dustproof

RULES FOR AI:
- Answer user questions promptly, politely, and accurately.
- Help users figure out which bulb socket (H1, H3, H4, H7, 9005, H8, H11) fits their vehicle make/model/year.
- Clearly explain how to order: $35/pair + $10 shipping (7-14 Business Days) via Cash App ($muahz26) or local Chicago pickup.
- Provide direct, friendly automotive advice. Respond in the language the user speaks (English, Spanish, Polish, Lithuanian, Ukrainian, Russian, etc.).
`;

app.post('/api/chat', async (req, res) => {
  try {
    const { messages, userLanguage } = req.body;
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const lastMessage = messages[messages.length - 1];
    const userPrompt = lastMessage.content || '';

    // If Gemini client is available, use gemini-3.8-flash with graceful fallback
    if (ai) {
      try {
        const systemInstruction = `${KNOWLEDGE_SUMMARY}\nCurrent user UI language preference: ${userLanguage || 'en'}. Always answer naturally, concisely, and helpfully. If they ask about their car bulb size, provide accurate automotive bulb recommendations.`;

        // Build conversation context for chat
        const promptText = messages
          .map((m: { role: string; content: string }) => `${m.role === 'user' ? 'Customer' : 'LED Headlights Support'}: ${m.content}`)
          .join('\n');

        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: `${promptText}\n\nCustomer: ${userPrompt}\nLED Headlights Support:`,
          config: {
            systemInstruction,
          },
        });

        if (response.text) {
          return res.json({ reply: response.text });
        }
      } catch (geminiErr) {
        console.warn('Gemini generateContent error, falling through to knowledge base:', geminiErr);
      }
    }

    // High quality automotive heuristic fallback if GEMINI_API_KEY is not yet injected
    const lower = userPrompt.toLowerCase();
    let fallbackReply = '';

    if (lower.includes('cash app') || lower.includes('shipping') || lower.includes('order') || lower.includes('pay') || lower.includes('buy') || lower.includes('price') || lower.includes('cost')) {
      fallbackReply = `Our 6000K Mini LED Headlight Bulbs are **$35.00 each pair**. \n\n• **Nationwide Shipping**: $10 flat rate (7-14 Business Days). You can pay via **Cash App** at **https://cash.app/$muahz26** (CashTag: **$muahz26**). \n• **Chicago Local Pickup**: Available for $35.00/pair with cash or Cash App! Contact Mantas directly at **+1 (312) 385 - 9229** or email **MantasChicago36@Gmail.Com** to arrange pickup.`;
    } else if (lower.includes('review') || lower.includes('feedback') || lower.includes('rating') || lower.includes('star') || lower.includes('switch') || lower.includes('halogen')) {
      fallbackReply = `We have **258 verified 5-star reviews (100% 5.0 rating)** from drivers who upgraded their dim yellow factory halogens to our **6000K Diamond White Mini LEDs**! Drivers praise the immediate 300% night visibility improvement, sharp zero-glare beam cutoff line, and quick 8-minute driveway install. Check out the Reviews section on our site to read their feedback!`;
    } else if (lower.includes('h11') || lower.includes('h12') || lower.includes('9055') || lower.includes('h7') || lower.includes('h4') || lower.includes('9005') || lower.includes('h1') || lower.includes('h3') || lower.includes('h8')) {
      fallbackReply = `Yes! We have **H1, H3, H4/9003/HB2, H7, 9005/HB5, H8, H11, and H12** in stock for **$35.00 per pair**. They are 1:1 Mini plug-and-play bulbs with high-speed cooling fans and crisp 6000K Diamond White light. Click "Add to Cart" or "Buy Now" to checkout with Cash App ($muahz26) or local Chicago pickup!`;
    } else if (lower.includes('chicago') || lower.includes('phone') || lower.includes('email') || lower.includes('contact') || lower.includes('mantas')) {
      fallbackReply = `You can reach Mantas directly: \n• Phone / Text: **+1 (312) 385 - 9229** \n• Email: **MantasChicago36@Gmail.Com** \n• Location: Chicago, IL (Local pickup available!) \n• Cash App: **https://cash.app/$muahz26** ($muahz26)`;
    } else if (lower.includes('6000k') || lower.includes('color') || lower.includes('white') || lower.includes('blue')) {
      fallbackReply = `Our **6000K Diamond White** is the optimal automotive color temperature. Unlike yellow 3200K stock halogens or overly blue 8000K bulbs that cause eye fatigue, 6000K delivers crystal-clear daylight white visibility with 300% more lumen output and sharp road contrast in rain, snow, and night driving.`;
    } else if (lower.includes('fit') || lower.includes('car') || lower.includes('honda') || lower.includes('toyota') || lower.includes('ford') || lower.includes('chevy') || lower.includes('bmw')) {
      fallbackReply = `Our bulbs are 1:1 Mini size and fit 99% of vehicle housings! Most modern vehicles use: \n• **H11**: Most Toyota, Honda, Nissan, Subaru, Chevy low beams & fog lights \n• **H12 / 9055**: Chevy Silverado, Tahoe, Suburban, GMC Sierra, Ford Explorer fog & auxiliary lights \n• **9005**: High beam companion to H11 \n• **H7**: Popular in BMW, Mercedes, VW, Hyundai, Kia \n• **H4 (9003/HB2)**: Dual high/low beam in older Civics, Tacomas, Wranglers, subcompacts \n• **H1 & H3**: Fog lights & projector lenses \n\nTell me your exact Year, Make, and Model and I'll confirm your exact bulb socket!`;
    } else {
      fallbackReply = `Hello! Welcome to **LED Headlights (LEDHeadlights.Org)**. \n\nWe offer **Mini 6000K Diamond White LED Bulbs** for **$35.00 per pair** in **H1, H3, H4/9003, H7, 9005/HB5, H8, H11, and H12** (backed by 258 5-star reviews!). \n\nShipping is $10 (7-14 Business Days) via Cash App (**https://cash.app/$muahz26**), or free local pickup in Chicago. Need help finding the right bulb for your car? Just let me know your vehicle's Year, Make, and Model, or call/text Mantas at **+1 (312) 385 - 9229**!`;
    }

    return res.json({ reply: fallbackReply });
  } catch (error: any) {
    console.error('Error handling /api/chat:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

// Always serve static assets from public and src/assets for rock-solid image loading
app.use('/src/assets', express.static(path.resolve(__dirname, 'src/assets')));
app.use('/images', express.static(path.resolve(__dirname, 'public/images')));
app.use(express.static(path.resolve(__dirname, 'public')));

// Configure Vite middleware or production static files
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`LED Headlights server running at http://localhost:${port}`);
  });
}

startServer();
