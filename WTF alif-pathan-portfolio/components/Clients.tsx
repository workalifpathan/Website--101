import Image from "next/image";
import Reveal from "./Reveal";
import { clients } from "@/data/content";

export default function Clients() {
  return (
    <>
      <div className="divider" />
      <section className="py-16 text-center" id="clients">
        <Reveal className="wrap">
          <h2 className="font-display italic font-bold text-orange-deep text-[clamp(1.8rem,3.6vw,2.6rem)] mb-9">
            Clients &amp; Collaborations
          </h2>
          <div className="flex justify-center flex-wrap gap-5">
            {clients.map((c) => (
              <div
                key={c.name}
                title={c.name}
                className="w-24 h-24 rounded-full bg-grad-orange flex items-center justify-center overflow-hidden shadow-[0_8px_18px_rgba(226,112,31,0.25)] transition-transform hover:-translate-y-1.5 hover:scale-105 relative"
              >
                <Image src={c.logo} alt={c.name} fill sizes="96px" className="object-cover" />
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
