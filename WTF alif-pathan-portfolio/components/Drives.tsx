import Image from "next/image";
import Reveal from "./Reveal";
import { drives } from "@/data/content";
import { Fragment } from "react";

function renderParagraph(text: string) {
  // Supports **bold** and line breaks written as \n, so the content
  // file can stay plain text while still allowing simple emphasis.
  const lines = text.split("\n");
  return lines.map((line, li) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <Fragment key={li}>
        {parts.map((part, i) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={i} className="font-bold">
              {part.slice(2, -2)}
            </strong>
          ) : (
            <Fragment key={i}>{part}</Fragment>
          )
        )}
        {li < lines.length - 1 && <br />}
      </Fragment>
    );
  });
}

export default function Drives() {
  return (
    <section className="py-16 bg-grad-orange text-white" id="about">
      <Reveal className="wrap grid md:grid-cols-[.85fr_1.15fr] gap-10 md:gap-14 items-start">
        <div className="text-center">
          <div className="bg-white rounded-lg2 p-3.5 max-w-xs mx-auto md:max-w-none">
            <div className="relative w-full aspect-[5/6] rounded-[10px] overflow-hidden">
              <Image
                src={drives.photo}
                alt={drives.photoAlt}
                fill
                sizes="(max-width: 768px) 60vw, 30vw"
                className="object-cover grayscale"
              />
            </div>
          </div>
          <p className="mt-4 font-hand text-2xl font-bold text-white">&ldquo;{drives.caption}&rdquo;</p>
        </div>

        <div>
          <h2 className="font-display font-extrabold text-[clamp(2rem,4.4vw,3rem)] mb-[18px]">
            {drives.heading}
          </h2>
          <div className="flex gap-3 flex-wrap mb-5">
            {drives.tags.map((tag) => (
              <span
                key={tag}
                className="font-hand text-lg font-bold bg-white/20 px-4 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          {drives.paragraphs.map((p, i) => (
            <p key={i} className="mb-4 text-[1.02rem] leading-[1.7]">
              {renderParagraph(p)}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
