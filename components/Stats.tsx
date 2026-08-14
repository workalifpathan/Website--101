import Reveal from "./Reveal";
import { stats } from "@/data/content";

export default function Stats() {
  return (
    <>
      <div className="divider" />
      <section className="py-16 bg-cream">
        <Reveal className="wrap">
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {stats.items.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-lg2 border border-orange-pale px-6 py-8 text-center shadow-[0_10px_30px_rgba(226,112,31,0.08)]"
              >
                <div className="font-display font-black text-[clamp(2rem,4vw,2.8rem)] text-orange-deep leading-none">
                  {item.number}
                </div>
                <div className="font-bold text-lg mt-2">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center max-w-xl mx-auto">
            <p className="font-display font-bold text-[1.2rem]">{stats.tagHeadline}</p>
            <p className="mt-2 text-dark-soft text-[0.98rem]">{stats.tagBody}</p>
          </div>
        </Reveal>
      </section>
      <div className="divider" />
    </>
  );
}
