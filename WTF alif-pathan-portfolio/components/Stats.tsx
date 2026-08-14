import Image from "next/image";
import Reveal from "./Reveal";
import { stats } from "@/data/content";

export default function Stats() {
  return (
    <>
      <div className="divider" />
      <section className="py-14 bg-cream">
        <Reveal className="wrap grid md:grid-cols-[.85fr_1.15fr] gap-10 md:gap-12 items-center">
          <div className="rounded-lg2 overflow-hidden aspect-[3/4] shadow-[0_20px_40px_rgba(0,0,0,0.12)] max-w-xs mx-auto md:max-w-none relative">
            <Image
              src={stats.photo}
              alt={stats.photoAlt}
              fill
              sizes="(max-width: 768px) 60vw, 30vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-5">
            {stats.items.map((item) => (
              <div key={item.label} className="border-b-2 border-orange-pale pb-4">
                <div className="font-display font-black text-[clamp(2rem,4vw,2.8rem)] text-orange-deep leading-none">
                  {item.number}
                </div>
                <div className="font-bold text-lg mt-0.5">{item.label}</div>
              </div>
            ))}
            <div className="mt-2">
              <p className="font-bold text-[1.05rem]">{stats.tagHeadline}</p>
              <p className="mt-1.5 text-dark-soft text-[0.95rem]">{stats.tagBody}</p>
            </div>
          </div>
        </Reveal>
      </section>
      <div className="divider" />
    </>
  );
}
