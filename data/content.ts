/**
 * ============================================================
 *  SITE CONTENT — edit everything here.
 * ============================================================
 * This is the ONE file you need to touch to change the text,
 * images, and video links on the website. You do not need to
 * open any other file, and you do not need to know how to code.
 *
 * Rules to keep in mind while editing:
 *   1. Keep the quotation marks "" around every piece of text.
 *   2. Keep the commas at the end of each line.
 *   3. Don't delete the curly braces { } or square brackets [ ].
 *   4. If you're unsure, just change the text BETWEEN the quotes
 *      and leave everything else exactly as it is.
 *
 * See HOW-TO-EDIT.md in the project root for step-by-step,
 * beginner-friendly instructions with pictures of what to do.
 * ============================================================
 */

export const site = {
  name: "Alif Pathan",
  title: "Alif Pathan — Content Strategist, Marketing Genius & Video Editor",
  description:
    "Crafting content and campaigns that grow brands, engage audiences, and make an impact on social media.",
};

export const nav = {
  links: [
    { label: "Work", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" },
  ],
  ctaLabel: "Start a Project",
  ctaHref: "#contact",
};

export const hero = {
  badge: "Available for projects",
  headline: ["Content Strategist", "Marketing Genius &", "Video Editor"],
  // Which line above should be shown in the orange accent color (0-indexed).
  accentLine: 2,
  lead: "Crafting content and campaigns that grow brands, engage audiences, and make an impact on social media.",
  primaryButton: { label: "Start a Project", href: "#contact" },
  secondaryButton: { label: "Contact Me", href: "#contact" },
  // This is your main photo. Replace the file at
  // /public/images/profile/profile.jpg to change it.
  photo: "/images/profile/profile.jpg",
  photoAlt: "Alif Pathan portrait",
};

export const socialLinks = [
  { platform: "instagram", url: "https://www.instagram.com/alifpathan12/" },
  { platform: "facebook", url: "https://www.facebook.com/alifpathan0" },
  { platform: "tiktok", url: "https://www.tiktok.com/@alifpathan123" },
  { platform: "youtube", url: "https://www.youtube.com/@AlifPathan123." },
];

export const stats = {
  items: [
    { number: "1000+", label: "video edited" },
    { number: "100,000,000+", label: "Views" },
    { number: "30+", label: "Clients" },
  ],
  tagHeadline: "Connection > Views",
  tagBody:
    "It's not about how many people watch your video. It's about how many people feel connected to it.",
};

/**
 * ------------------------------------------------------------
 * LONG-FORM PROJECTS
 * ------------------------------------------------------------
 * To add a new project, copy one block (from the opening { to
 * the closing },) and paste it into the list, then edit the
 * text and youtubeUrl.
 *
 * youtubeUrl accepts a normal YouTube link, e.g.:
 *   https://www.youtube.com/watch?v=dQw4w9WgXcQ
 *   https://youtu.be/dQw4w9WgXcQ
 *
 * thumbnail is optional — if you leave it blank (""), the
 * website automatically uses the video's own YouTube thumbnail.
 * ------------------------------------------------------------
 */
export const longFormProjects = [
  {
    title: "The Man & The Mission Behind Corsair",
    description: "Full interview with Jussi Veikko Saloranta.",
    youtubeUrl: "https://youtu.be/19SJihALE5c",
    thumbnail: "",
    size: "normal" as const,
  },
  {
    title: "Long-Form Project",
    description: "",
    youtubeUrl: "https://youtu.be/U0nuJmDXp60",
    thumbnail: "",
    size: "normal" as const,
  },
  {
    title: "Long-Form Project",
    description: "",
    youtubeUrl: "https://www.youtube.com/watch?v=hkiz6NA-jOM&t=100s",
    thumbnail: "",
    size: "normal" as const,
  },
  {
    title: "Long-Form Project",
    description: "",
    youtubeUrl: "https://youtu.be/i8jcP2A0oSg",
    thumbnail: "",
    size: "normal" as const,
  },
];

export const viewAllLongFormsHref = "";

/**
 * ------------------------------------------------------------
 * SHORTS
 * ------------------------------------------------------------
 * shortsUrl accepts:
 *   https://www.youtube.com/shorts/XXXXXXXX
 *   https://www.youtube.com/watch?v=XXXXXXXX
 * ------------------------------------------------------------
 */
export const shorts = [
  {
    caption: "Watch on YouTube",
    views: "",
    shortsUrl: "https://youtube.com/shorts/u0QWxJHoeck?feature=share",
    thumbnail: "",
    platform: "youtube" as const,
  },
  {
    caption: "Watch on YouTube",
    views: "",
    shortsUrl: "https://www.youtube.com/shorts/5lU-gQkBbDQ",
    thumbnail: "",
    platform: "youtube" as const,
  },
  {
    caption: "Watch on Instagram",
    views: "",
    shortsUrl: "https://www.instagram.com/remydavenport/reel/DZ3nMyJEmEQ/",
    thumbnail: "",
    platform: "instagram" as const,
  },
  {
    caption: "Watch on TikTok",
    views: "",
    shortsUrl: "https://www.tiktok.com/@theremydavenport/video/7658455727077461262",
    thumbnail: "",
    platform: "tiktok" as const,
  },
  {
    caption: "Watch on TikTok",
    views: "",
    shortsUrl: "https://www.tiktok.com/@theremydavenport/video/7659290970701303054",
    thumbnail: "",
    platform: "tiktok" as const,
  },
];

export const viewAllShortsHref = "";

export const clients = [
  { name: "Ethical Den", logo: "/images/clients/client-01.png" },
  { name: "The Grateful Tribe", logo: "/images/clients/client-02.png" },
  { name: "LOOMX", logo: "/images/clients/client-03.png" },
  { name: "Nivex", logo: "/images/clients/client-04.png" },
  { name: "Kings Media Co.", logo: "/images/clients/client-05.png" },
  { name: "Corsair Connect", logo: "/images/clients/client-06.png" },
  { name: "Comparison Soft", logo: "/images/clients/client-07.png" },
  { name: "Pop Social", logo: "/images/clients/client-08.png" },
];

export const testimonials = [
  {
    quote:
      "Working with Alif was a game-changer for our content. He didn't just edit videos — he understood our brand, built a clear content strategy, and delivered results. The quality, consistency, and clarity he brought to our social media made a visible impact on our growth.",
    name: "Fardeen Ahmed",
    role: "Chief Executive Officer, Ethical Den",
    photo: "/images/testimonials/testimonial-01.jpg",
  },
  {
    quote:
      "Alif has been with me through successes and challenges, bringing relentless work ethic and creative brilliance that genuinely helped me grow. A truly rare individual.",
    name: "Sal Khan",
    role: "CEO & Founder, The Grateful Tribe",
    photo: "/images/testimonials/testimonial-02.jpg",
  },
];

export const drives = {
  caption: "Content doesn't grow brands — connection does",
  heading: "What Drives Me",
  tags: ["Vision", "Mindset", "Storytelling", "Results"],
  paragraphs: [
    "**One of the earliest lessons I understood in life is that the biggest risk is not taking one.** That belief pushed me to do things differently — to question the safe path and choose growth over comfort. I try to live by that mindset every day.",
    'What sets me apart isn\'t just what I do, but how I think. I genuinely believe that anything is possible. For me, the only real question has never been "Is it possible?" — it\'s always been "How can it be done?"',
    "That belief has shaped my entire journey. Every step so far — every project, every challenge, every win — has come from that mindset. And I'm not done. I want to go further, build more, create better, and keep pushing beyond what feels normal or expected.",
    "This is what has brought me here.\nAnd this is only the beginning.",
    "**That's my two cents.**",
  ],
};

export const contact = {
  heading: "Content doesn't grow brands—",
  headingAccent: "connection",
  headingEnd: " does.",
  subtext: "Tell me a bit about your project and I'll get back to you.",
  // Google Apps Script "Web app" URL — see HOW-TO-EDIT.md for setup steps.
  // Leave blank ("") and the form will just show a friendly error until you add it.
  formEndpoint: "",
};

export const footer = {
  text: "Alif Pathan — Content Strategist & Video Editor.",
  linkLabel: "Start a Project",
  linkHref: "#contact",
  tagline: "Built with passion. Focused on impact.",
};
