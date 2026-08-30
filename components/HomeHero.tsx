
import { Aladin } from "next/font/google";

const aladin = Aladin({
  subsets: ["latin"],
  weight: "400",
});

const HomeHero = () => {
  return (
    <section className="w-full">
      <div className="relative h-[550px] h-[630px]">
        <img
          src="/hero.jfif"
          alt="Aura Hospital building"
          fill
          loading="eager"
          className="object-cover object-right w-full h-185"
        />

        <div className="absolute inset-0 bg-slate-950/40" />

        <div className="absolute top-1/2 left-5 max-w-md -translate-y-1/2 text-white sm:left-10">
          <p className="font-black text-cyan-400">AURA HOSPITAL</p>

          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            A Healthier You Starts{" "}
            <span
              className={`${aladin.className} mt-2 inline-block text-5xl text-cyan-400 sm:text-7xl`}
            >
              Today
            </span>
          </h2>

          <p className="mt-6 max-w-sm font-serif text-sm leading-6 sm:mt-8 sm:max-w-md sm:text-base">
            At Aura Hospital, we provide compassionate, quality healthcare with
            modern facilities and trusted medical professionals—helping you and
            your family live healthier every day.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="rounded-2xl border-2 border-white bg-cyan-400 px-5 py-2 text-lg font-normal text-white ransition hover:bg-cyan-200"
            >
              Explore More
            </button>

            <button
              type="button"
              className="rounded-2xl border-2 border-white bg-transparent px-5 py-2 text-lg font-normal text-white transition hover:bg-cyan-400 hover:text-slate-900"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default HomeHero;