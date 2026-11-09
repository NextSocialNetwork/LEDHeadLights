import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use('/api', express.json());

// SEO sitemap.xml and robots.txt routes
app.get('/sitemap.xml', (_req, res) => {
  const sitemapPath = path.resolve(__dirname, 'public', 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    res.setHeader('Content-Type', 'application/xml');
    return res.sendFile(sitemapPath);
  }
  res.status(404).send('Sitemap not found');
});

app.get('/robots.txt', (_req, res) => {
  const robotsPath = path.resolve(__dirname, 'public', 'robots.txt');
  if (fs.existsSync(robotsPath)) {
    res.setHeader('Content-Type', 'text/plain');
    return res.sendFile(robotsPath);
  }
  res.status(404).send('robots.txt not found');
});

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

// Built-in intelligent automotive bulb knowledge base
const KNOWLEDGE_SUMMARY = `
You are the official AI Support Specialist for LED Bulbs (LEDHeadLights.Ai.Studio).
STORE & OWNER DETAILS:
- Name: LED Bulbs (LEDHeadLights.Ai.Studio)
- Owner / Specialist: Matt (Chicago, IL)
- Contact & Order Email: LEDHeadLightsChicago@Gmail.Com
- Phone Number: +1 (312) 385 - 9229 (Call or Text, Chicago IL)
- WhatsApp: https://wa.me/13123859229
- TikTok: https://www.tiktok.com/@mattchicago36
- Instagram: https://instagram.com/ledheadlights.ai.studio
- Products: High-performance 6000K Diamond White Mini LED Headlight Bulbs ($40 flat/pair)
- Pricing: Exactly $40 flat each pair ($40.00)
- Shipping: 100% FREE Tracked Nationwide Shipping (7-14 Business Days nationwide). $0 shipping cost!
- Guarantees: Customer Satisfaction Guarantee! Free Replacement!
- Repeat Buyer VIP Loyalty Program: Returning drivers who have ordered before receive an automatic $5 OFF discount per pair ($35 flat per pair) plus a FREE pair of 6000K LED T10 interior/license plate bulbs included in their shipment!
- Payment: Paid via Cash App to https://cash.app/$muahz26 ($muahz26).
- ORDER PROCESSING REQUIREMENT: After customers finish paying via Cash App, they send their details via Email to LEDHeadLightsChicago@Gmail.Com, WhatsApp (https://wa.me/13123859229), or Text (+1-312-385-9229) with:
  1. Full Name
  2. Shipping Address
  3. Cash App Username (from where payment was made)
  4. Phone Number
  5. Screenshot and Confirmation Number (e.g. LED-XXXXXX) that was given on the website for order shipping processing.
- Local Pickup: Available in Chicago, IL for $40 flat/pair. Contact Matt at 312-385-9229, WhatsApp, or LEDHeadLightsChicago@Gmail.Com.
- Reviews: 289 verified 5-star customer reviews from drivers who switched from standard yellow halogen headlights to LED.
- Blog & Guides: 785 in-depth automotive guides, installation tutorials, and vehicle fitment articles.
- Vehicle Fitment: Wide compatibility across Pontiac, VW, Audi, Nissan, BMW, Mercedes, Buick, Dodge, Ford, Chrysler, Mitsubishi, Toyota, Infiniti, Lexus, Honda, GMC, Chevrolet, Jeep, Subaru, Acura, Cadillac, Lincoln, Volvo, Ram, Porsche, Genesis, Scion, Saturn, Mazda, Hyundai, Kia, etc.
- Available Sockets in Stock ($40 flat/pair • FREE Shipping • Satisfaction Guarantee & Free Replacement):
  1. H1 - Single beam (Commonly used in projectors & fog lights)
  2. H3 Mini LED - Single beam (Compact fog lights & aux driving lights)
  3. Aftermarket COB LED H3 Replacement Kit - High-density COB array with dual spade lead wires for universal fog lamps
  4. H4 / 9003 / HB2 - Dual Beam (Combined High Beam + Low Beam in one bulb)
  5. H7 Direct Plug - Wireless 1:1 OEM blade design (Plugs directly into factory socket without extra wires)
  6. H7 with Wire Extension - Flexible pigtail wire harness (Perfect for deep projector bowls, spring clips, and tight dust caps)
  7. 9005 / HB3 / HB5 - High beam / single beam (Very common in Honda, Toyota, Ford, GM, Chrysler, Dodge)
  8. 9006 / HB4 - Low beam powerhouse (Legendary low beam in Chevy Silverado, Toyota Camry/Corolla, Honda Civic/Accord, Pontiac, Dodge)
  9. H8 - Fog lights and angel eyes (BMW, Audi, VW)
  10. H11 - Ultra popular low beam & fog lights (#1 best seller: Subaru, Toyota, Honda, Ford, Chevy, Nissan, Mazda, Lexus, GMC)

SPECS:
- 6000K Diamond Crisp Pure White (Crystal clear night vision, 0% yellowish halogen tint, high contrast)
- 1:1 Mini Size (Same dimensions as factory halogen bulbs - true plug & play, zero wire cutting, fits inside factory dust covers)
- Aviation Aluminum Body with high-speed 12,000 RPM silent hydraulic cooling fan
- 300%+ brighter than standard halogen bulbs (16,000 LM per pair)
- Canbus ready / 99% vehicle compatibility without flickering or dashboard errors
- IP68 Waterproof and dustproof
- Customer Satisfaction Guarantee & Free Replacement Included!

RULES FOR AI:
- Answer user questions promptly, politely, and accurately.
- Help users figure out which bulb socket (H1, H3, H4, H7 Direct Plug, H7 with Wire Extension, 9005, 9006, H8, H11) fits their vehicle make/model/year.
- Clearly explain how to order: $40 flat per pair with 100% FREE Tracked Shipping (7-14 Business Days), Customer Satisfaction Guarantee, and Free Replacement via Cash App ($muahz26) or local Chicago pickup.
- Ordering is fast & smooth: After paying on Cash App, customers send confirmation screenshot to LEDHeadLightsChicago@Gmail.Com or WhatsApp (https://wa.me/13123859229).
- Provide direct, friendly automotive advice. Respond in the language the user speaks (English, Spanish, Polish, Lithuanian, Ukrainian, Russian, German, French, Italian, Portuguese, Arabic, etc.).
`;

app.post('/api/chat', async (req, res) => {
  try {
    const { messages, userLanguage } = req.body;
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const lastMessage = messages[messages.length - 1];
    const userPrompt = lastMessage.content || '';

    // If Gemini client is available, use gemini-3.8-flash with timeout protection
    if (ai) {
      try {
        const systemInstruction = `${KNOWLEDGE_SUMMARY}\nCurrent user UI language preference: ${userLanguage || 'en'}. Always answer naturally, concisely, and helpfully. If they ask about their car bulb size, provide accurate automotive bulb recommendations.`;

        const promptText = messages
          .map((m: { role: string; content: string }) => `${m.role === 'user' ? 'Customer' : 'LED Bulbs Support'}: ${m.content}`)
          .join('\n');

        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('Gemini request timeout')), 4000)
        );

        const response = await Promise.race([
          ai.models.generateContent({
            model: 'gemini-3.8-flash',
            contents: `${promptText}\n\nCustomer: ${userPrompt}\nLED Bulbs Support:`,
            config: {
              systemInstruction,
            },
          }),
          timeoutPromise,
        ]);

        if (response && response.text) {
          return res.json({ reply: response.text });
        }
      } catch (geminiErr) {
        console.warn('Gemini generateContent error, falling through to knowledge base:', geminiErr);
      }
    }

    // High quality automotive heuristic fallback
    const lower = userPrompt.toLowerCase();
    let fallbackReply = '';

    if (lower.includes('cash app') || lower.includes('shipping') || lower.includes('order') || lower.includes('pay') || lower.includes('buy') || lower.includes('price') || lower.includes('cost')) {
      fallbackReply = `Our 6000K Mini LED Bulbs are **$40 flat per pair** with **100% FREE Tracked Shipping**! \n\n• **Customer Satisfaction Guarantee & Free Replacement**: Included with every order! \n• **Tracked Nationwide Shipping**: $0.00 FREE (7-14 Business Days nationwide). Pay via **Cash App** at **https://cash.app/$muahz26** (CashTag: **$muahz26**). \n• **Fast & Smooth Order Processing**: After completing payment, email **LEDHeadLightsChicago@Gmail.Com**, message on WhatsApp (**https://wa.me/13123859229**), or text **+1 (312) 385 - 9229** with your Full Name, Shipping Address, Cash App Username, Phone Number, and Screenshot of your website Confirmation Number! \n• **Chicago Local Pickup**: Also available for $40 flat per pair. Contact Matt directly to arrange pickup.`;
    } else if (lower.includes('h7')) {
      fallbackReply = `We offer two specialized H7 options for **$40 flat / pair** (FREE Shipping + Free Replacement): \n1. **H7 Direct Plug (Wireless 1:1 OEM)**: Built-in 2-prong spade base that plugs directly into factory sockets without external wires. \n2. **H7 with Wire Extension (Flexible Pigtail)**: High-temperature silicone lead wires terminating in standard H7 spade prongs, ideal for deep projector bowls, spring clips, and tight dust caps. \n\nBoth deliver 16,000 LM 6000K Diamond White clarity with Customer Satisfaction Guarantee & Free Replacement. Which vehicle are you installing them on?`;
    } else if (lower.includes('h11') || lower.includes('h4') || lower.includes('9005') || lower.includes('9006') || lower.includes('h1') || lower.includes('h3') || lower.includes('h8')) {
      fallbackReply = `Yes! We have **H1, H3, H4/9003/HB2, H7 Direct Plug, H7 with Wire Extension, 9005/HB3, 9006/HB4, H8, and H11** in stock for **$40 flat per pair** with **FREE Shipping**, **Customer Satisfaction Guarantee**, and **Free Replacement**! They are 1:1 Mini plug-and-play bulbs with high-speed cooling fans, crisp 6000K Diamond White light, and 289 5-star reviews. Click "Add to Cart" or "Buy Now" to checkout with Cash App ($muahz26) or local Chicago pickup!`;
    } else if (lower.includes('chicago') || lower.includes('phone') || lower.includes('email') || lower.includes('contact') || lower.includes('matt') || lower.includes('mantas') || lower.includes('whatsapp') || lower.includes('tiktok') || lower.includes('instagram')) {
      fallbackReply = `You can reach Matt directly: \n• Phone / Text: **+1 (312) 385 - 9229** \n• WhatsApp: **https://wa.me/13123859229** \n• Email: **LEDHeadLightsChicago@Gmail.Com** \n• TikTok: **https://www.tiktok.com/@mattchicago36** \n• Instagram: **https://instagram.com/ledheadlights.ai.studio** \n• Location: Chicago, IL (Local pickup available for $40 flat / pair with FREE delivery!) \n• Cash App: **https://cash.app/$muahz26** ($muahz26)`;
    } else if (lower.includes('review') || lower.includes('star') || lower.includes('feedback') || lower.includes('rating') || lower.includes('switch')) {
      fallbackReply = `We have **289 verified 5-star customer reviews** from drivers who switched from dull yellow halogen bulbs to our 6000K Diamond White LEDs across Pontiac, VW, Audi, Nissan, BMW, Mercedes, Buick, Dodge, Ford, Chrysler, Mitsubishi, Toyota, Infiniti, Lexus, Honda, GMC, Acura, Cadillac, Lincoln, Volvo, Ram, and more! Drivers report 300%+ brighter illumination, zero oncoming glare, and love our Free Replacement policy.`;
    } else if (lower.includes('blog') || lower.includes('article') || lower.includes('guide') || lower.includes('tutorial')) {
      fallbackReply = `We feature **785 comprehensive automotive lighting guides** on our website! You can explore vehicle-specific tutorials, CANbus troubleshooting, beam cutoff alignment tips, and step-by-step 10-minute installation walkthroughs. Scroll down to the Blog section to browse or search by vehicle make and model!`;
    } else if (lower.includes('6000k') || lower.includes('color') || lower.includes('white') || lower.includes('blue')) {
      fallbackReply = `Our **6000K Diamond White** is the optimal automotive color temperature. Unlike yellow 3200K stock halogens or overly blue 8000K bulbs that cause eye fatigue, 6000K delivers crystal-clear daylight white visibility with 300% more lumen output and sharp road contrast in rain, snow, and night driving. Backed by our 100% Customer Satisfaction Guarantee and Free Replacement!`;
    } else if (lower.includes('fit') || lower.includes('car') || lower.includes('honda') || lower.includes('toyota') || lower.includes('ford') || lower.includes('chevy') || lower.includes('bmw') || lower.includes('pontiac') || lower.includes('audi') || lower.includes('vw') || lower.includes('nissan') || lower.includes('mercedes') || lower.includes('buick') || lower.includes('dodge') || lower.includes('chrysler') || lower.includes('mitsubishi') || lower.includes('infiniti') || lower.includes('lexus') || lower.includes('gmc') || lower.includes('acura') || lower.includes('cadillac') || lower.includes('lincoln') || lower.includes('volvo') || lower.includes('ram')) {
      fallbackReply = `Our bulbs are 1:1 Mini size and fit 99% of vehicle housings across Pontiac, VW, Audi, Nissan, BMW, Mercedes, Buick, Dodge, Ford, Chrysler, Mitsubishi, Toyota, Infiniti, Lexus, Honda, GMC, Chevy, Subaru, Jeep, Acura, Cadillac, Lincoln, Volvo, Ram, etc.! \n• **H11**: Most Toyota, Honda, Nissan, Subaru, Chevy, GMC, Lexus low beams & fog lights \n• **9005**: High beam companion to H11 and 9006 \n• **9006 / HB4**: Classic low beam for Chevy Silverado, older Camry, Accord, Pontiac, Dodge \n• **H7**: European cars (VW, BMW, Audi, Mercedes, Volvo) - available in both Direct Plug and Wire Extension! \n• **H4 (9003/HB2)**: Dual high/low beam in older Civics, Tacomas, Wranglers, subcompacts \n• **H1 & H3**: Projectors & fog lights \n\nTell me your exact Year, Make, and Model and I'll confirm your exact bulb socket! Every order is $40 flat with Free Shipping & Free Replacement.`;
    } else {
      fallbackReply = `Hello! Welcome to **LED Bulbs (LEDHeadLights.Ai.Studio)**. \n\nWe offer **Mini 6000K Diamond White LED Bulbs** for **$40 flat per pair** with **100% FREE Shipping**, **Customer Satisfaction Guarantee**, and **Free Replacement**! Available in **H1, H3, H4/9003, H7 Direct Plug, H7 with Wire Extension, 9005/HB3, 9006/HB4, H8, and H11** with 289 5-star customer reviews and 785 automotive guides. \n\nPay via Cash App (**https://cash.app/$muahz26**), or local pickup in Chicago. Connect with Matt on WhatsApp (**https://wa.me/13123859229**) or call/text **+1 (312) 385 - 9229**!`;
    }

    return res.json({ reply: fallbackReply });
  } catch (error: any) {
    console.error('Error handling /api/chat:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

// Serve static assets from public and src/assets for rock-solid image loading
app.use('/src/assets', express.static(path.resolve(__dirname, 'src/assets')));
app.use('/images', express.static(path.resolve(__dirname, 'public/images')));
app.use('/assets', express.static(path.resolve(__dirname, 'public/assets')));
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
    console.log(`LED Bulbs server running at http://localhost:${port}`);
  });
}

startServer();
