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
  { platform: "instagram", url: "https://instagram.com/" },
  { platform: "youtube", url: "https://youtube.com/" },
  { platform: "linkedin", url: "https://linkedin.com/" },
  { platform: "email", url: "mailto:hello@example.com" },
];

export const stats = {
  // Replace this file to change the formal/side photo.
  photo: "/images/profile/formal.jpg",
  photoAlt: "Alif Pathan formal photo",
  items: [
    { number: "1000+", label: "video edited" },
    { number: "10,000,000+", label: "Views" },
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
    title: "Happiness Money Can Buy",
    description: "Exploring the relationship between happiness and wealth.",
    youtubeUrl: "",
    thumbnail: "/images/projects/project-01.jpg",
    size: "normal" as const,
  },
  {
    title: "Interview with Nivex CEO",
    description: "A deep dive into the journey, vision and future of Nivex.",
    youtubeUrl: "",
    thumbnail: "/images/projects/project-02.jpg",
    size: "normal" as const,
  },
  {
    title: "Before / After Transformation",
    description: "Real stories. Real people. Real transformations.",
    youtubeUrl: "",
    thumbnail: "/images/projects/project-03.jpg",
    size: "normal" as const,
  },
  {
    title: "Start Earning with LOCMX",
    description: "How LOCMX helps creators turn skills into income.",
    youtubeUrl: "",
    thumbnail: "/images/projects/project-04.jpg",
    size: "normal" as const,
  },
  {
    title: "The Man & The Mission Behind Corsair",
    description: "An inspiring conversation behind the brand — full interview.",
    youtubeUrl: "",
    thumbnail: "/images/projects/project-05.jpg",
    size: "wide" as const,
  },
  {
    title: "Ethical Den Website Showreel",
    description: "Showcasing the new digital experience for Ethical Den.",
    youtubeUrl: "",
    thumbnail: "/images/projects/project-06.jpg",
    size: "wide" as const,
  },
  {
    title: "Interview with Pop Max",
    description: "Behind the scenes with the Pop Max team.",
    youtubeUrl: "",
    thumbnail: "/images/projects/project-07.jpg",
    size: "normal" as const,
  },
  {
    title: "Documenting Life Through Content",
    description: "Capturing stories that leave a lasting impact.",
    youtubeUrl: "",
    thumbnail: "/images/projects/project-08.jpg",
    size: "normal" as const,
  },
  {
    title: "LoomX Passive Income Breakdown",
    description: "Breaking down the passive income model with LoomX.",
    youtubeUrl: "",
    thumbnail: "/images/projects/project-09.jpg",
    size: "normal" as const,
  },
];

export const viewAllLongFormsHref = "#";

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
    caption: "Focus on your own path.",
    views: "2.1M",
    shortsUrl: "",
    thumbnail: "/images/shorts/short-01.jpg",
  },
  {
    caption: "Discipline today, freedom tomorrow.",
    views: "1.7M",
    shortsUrl: "",
    thumbnail: "/images/shorts/short-02.jpg",
  },
  {
    caption: "Growth is uncomfortable.",
    views: "3.4M",
    shortsUrl: "",
    thumbnail: "/images/shorts/short-03.jpg",
  },
  {
    caption: "Build in public. Inspire in private.",
    views: "2.6M",
    shortsUrl: "",
    thumbnail: "/images/shorts/short-04.jpg",
  },
];

export const viewAllShortsHref = "#";

export const clients = [
  { name: "Ethical Den", logo: "/images/clients/client-01.png" },
  { name: "Gifting Tribe", logo: "/images/clients/client-02.png" },
  { name: "LOCMX", logo: "/images/clients/client-03.png" },
  { name: "Nivex", logo: "/images/clients/client-04.png" },
  { name: "Pop Max", logo: "/images/clients/client-05.png" },
  { name: "Corsair", logo: "/images/clients/client-06.png" },
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
  photo: "/images/profile/about.jpg",
  photoAlt: "Alif Pathan holding a camera",
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
  subtext: "Let's build meaningful content that connects and converts.",
  buttonLabel: "Start a Project",
  buttonHref: "mailto:hello@example.com",
  email: "hello@example.com",
};

export const footer = {
  text: "Alif Pathan — Content Strategist & Video Editor.",
  linkLabel: "Start a Project",
  linkHref: "#contact",
  tagline: "Built with passion. Focused on impact.",
};
