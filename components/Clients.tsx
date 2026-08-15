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

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6">
            {clients.map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full bg-grad-orange flex items-center justify-center overflow-hidden shadow-[0_8px_18px_rgba(226,112,31,0.25)] relative">
                  <Image src={c.logo} alt={c.name} fill sizes="80px" className="object-cover" />
                </div>
                <p className="font-display font-semibold text-xs text-dark-soft leading-tight">
                  {c.name}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
