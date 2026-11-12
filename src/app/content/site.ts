// Every brand / app fact lives here so names, IDs and emails are never duplicated.
// Wording is taken from the app's own screens in Figma (Cheaterbuster V1:
// onboarding, paywall, scan flow, ASO). Empty strings are unknown values —
// the UI hides them instead of printing a placeholder.

export const site = {
  brand: "AI Chat Scanner",
  poweredBy: "CheaterBuster",
  email: "stijnceo@martens.click",
  year: new Date().getFullYear(),
  // PLACEHOLDER — operator comes with the Privacy Policy / Terms of Use
  operator: "",
};

export const app = {
  id: "6820438400",
  url: "https://apps.apple.com/app/id6820438400",
  // App isn't live yet (iTunes lookup returns 0 results, 2026-11-12).
  // Refresh from https://itunes.apple.com/lookup?id=6820438400 after release.
  minIOS: "",
  // from the paywall: "after a 3-day trial for 5.99 usd per week"
  trialDays: 3,
  weekly: "$5.99",
};

// "Analyze chat" card — onboarding copy
export const analyze = [
  { icon: "spark", title: "Smart analysis in seconds", text: "Advanced AI compares your chats against millions of real conversation patterns." },
  { icon: "advice", title: "AI advice", text: "Get insights and advice from your chats to help you choose your next step." },
];

// four-up grid — Quick Guide, scan flow and result screen
export const features = [
  { icon: "upload", title: "Upload or take a picture", text: "Attach a chat screenshot from your Photos or take a picture of the chat with the camera." },
  { icon: "focus", title: "A clear shot", text: "The photo must be of good quality, not blurry, and taken straight." },
  { icon: "history", title: "Scanning history", text: "Every scanned chat stays in your history with its result and date." },
  { icon: "share", title: "Share with a friend", text: "Send a result to someone you trust right from the result screen." },
];

// the three result labels the app shows in history
export const results = [
  { tone: "green", title: "Healthy Relationships" },
  { tone: "yellow", title: "There is room for improvement" },
  { tone: "red", title: "Abusive Relationships" },
] as const;

// tabs that swap the phone screen
export const flow = [
  { label: "Scan your chat", text: "Upload a screenshot and the scanner reads the whole conversation.", img: "/images/phone-scan-chat.webp", alt: "AI Chat Scanner reading a chat screenshot" },
  { label: "AI analysis", text: "Image captured, 2.4M chat examples analyzed, best matches compared, advice prepared.", img: "/images/phone-scanning.webp", alt: "Scanning your chat — analysis checklist" },
  { label: "Result & advice", text: "A clear label for the chat, what it means, and an AI Advice on what to do next.", img: "/images/phone-advice.webp", alt: "Result screen with AI Advice" },
];

export const steps = [
  { title: "Get the app", text: "Download AI Chat Scanner from the App Store." },
  { title: "Add a chat screenshot", text: "Tap the scan button and upload or take a picture of your chat." },
  { title: "Read the result", text: "Wait until AI analyzes your chat, then read the result and the advice." },
];

// what you get with the subscription — features of the app, no limits claimed
export const plan = [
  "AI scans of your chat screenshots",
  "A clear result for every chat",
  "AI Advice on your next step",
  "Scanning history",
  "Share results with a friend",
];

export const faq = [
  { q: "How do I scan a chat?", a: "Open the app, tap the red scan button and upload a screenshot of the chat from Photos or take a picture of it. The photo must be of good quality, not blurry, and taken straight." },
  { q: "What does the result mean?", a: "Each chat gets one of three labels (Healthy Relationships, There is room for improvement or Abusive Relationships) with an explanation and an AI Advice. It’s an AI-generated insight for general information and personal reflection, not a definitive evaluation of anyone." },
  { q: "Where is my chat sent?", a: "The images you select are sent to third-party AI services (such as fal.ai, OpenRouter or Google AI services) to generate the assessment. Results and your scanning history are stored locally on your iPhone, not on a developer backend. Details are in the Privacy Policy." },
  { q: "Does the app see my whole photo library?", a: "No. Screenshots are picked with Apple’s photo picker, so the app gets only the images you select. The camera is used only when you take a picture of a chat. You can manage permissions in your iPhone’s Settings." },
  { q: "Who can use the app?", a: "AI Chat Scanner is intended for people aged 18 and older." },
  { q: "How much does it cost?", a: `The subscription starts with a ${app.trialDays}‑day free trial, then ${app.weekly} per week. The price is shown in the app before you subscribe and may vary by country.` },
  { q: "How do I cancel my subscription?", a: "Subscriptions are billed through your Apple Account. Cancel them in your iPhone’s Settings → your name → Subscriptions at least 24 hours before the renewal date. Deleting the app doesn’t cancel an active subscription." },
  { q: "How do I restore a purchase?", a: "Tap Restore at the top of the subscription screen and use the same Apple ID the purchase was made with. Refunds are handled by Apple." },
  { q: "Can I delete a scan?", a: "Yes. Swipe a chat in the scanning history or open its result and choose Delete; its image and result are removed from the app. You can’t undo this action. Deleting locally doesn’t remove data already processed by the AI providers." },
];
