import Reveal from "./Reveal";
import { contact } from "@/data/content";

export default function Contact() {
  return (
    <section className="py-16" id="contact-band">
      <Reveal className="wrap flex flex-col md:flex-row items-center justify-between gap-8 border-t border-orange-pale pt-14">
        <h2 className="font-display font-extrabold text-2xl md:text-3xl text-center md:text-left max-w-md">
          {contact.heading}
          <span className="text-orange-deep">{contact.headingAccent}</span>
          {contact.headingEnd}
        </h2>
        <div className="hidden md:block w-px h-16 bg-orange-pale" />
        <div className="flex flex-col items-center md:items-start gap-4">
          <p className="text-dark-soft text-center md:text-left">{contact.subtext}</p>
          <a
            href={contact.buttonHref}
            className="font-display font-semibold text-sm bg-dark text-white px-7 py-3.5 rounded-md inline-block hover:-translate-y-0.5 hover:shadow-xl transition-transform"
          >
            {contact.buttonLabel} &rarr;
          </a>
        </div>
      </Reveal>
    </section>
  );
}
