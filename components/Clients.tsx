import Image from "next/image";
import Reveal from "./Reveal";
import { clients } from "@/data/content";

export default function Clients() {
  // Duplicate the list so the CSS animation can loop seamlessly.
  const track = [...clients, ...clients];

  return (
    <>
      <div className="divider" />
      <section className="py-16 text-center overflow-hidden" id="clients">
        <Reveal className="wrap">
          <h2 className="font-display italic font-bold text-orange-deep text-[clamp(1.8rem,3.6vw,2.6rem)] mb-9">
            Clients &amp; Collaborations
          </h2>
        </Reveal>

        <div className="marquee-wrap w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track flex w-max gap-5 py-1">
            {track.map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                title={c.name}
                className="w-24 h-24 shrink-0 rounded-full bg-grad-orange flex items-center justify-center overflow-hidden shadow-[0_8px_18px_rgba(226,112,31,0.25)] relative"
              >
                <Image src={c.logo} alt={c.name} fill sizes="96px" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
