const HomeWhy = () => {
  const whys = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      ),
      title: "24/7 Advanced Care",
      paragraph:
        "Equipped with state-of-the-art diagnostic technology and board-certified trauma specialists ready to deliver rapid, lifesaving treatment around the clock.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 21s8-4 8-11V5l-8-3-8 3v5c0 7 8 11 8 11Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: "World-Class Specialist",
      paragraph:
        "Home to nationally recognized doctors, surgeons, and healthcare professionals dedicated to pioneering personalized treatment plans for complex conditions.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5M12 16h.01" />
        </svg>
      ),
      title: "Short Wait Time",
      paragraph:
        "We respect your time by getting you from the waiting room to see a doctor as quickly and smoothly as possible.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 19V9h18v10" />
          <path d="M3 15h18M7 9V6h10v3" />
        </svg>
      ),
      title: "Clean And Comfortable Rooms",
      paragraph:
        "Enjoy a peaceful, spotless environment designed to help you relax, heal, and recover faster.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M15 9.5c-.3-1-1.3-1.5-2.8-1.5-1.7 0-2.7.8-2.7 2 0 3 5.5 1.2 5.5 4.3 0 1.2-1.1 2-3 2-1.6 0-2.7-.6-3.1-1.7M12 6.5v11" />
        </svg>
      ),
      title: "Clear And Honest Pricing",
      paragraph:
        "We help you understand your options and insurance coverage upfront, so there are no hidden surprises.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 21V5l8-3 8 3v16" />
          <path d="M8 21v-4h8v4M8 8h.01M12 8h.01M16 8h.01M8 12h.01M12 12h.01M16 12h.01" />
        </svg>
      ),
      title: "Everything in One Place",
      paragraph:
        "From blood tests and X-rays to specialist visits and recovery, you get all the care you need under one roof.",
    },
  ];

  return (
    <section>
      <div className="mt-12 text-center">
        <p className="text-cyan-400 text-xs font-bold sm:text-xs">WHY US?</p>
        <h3 className="mt-2 text-xl font-bold text-black md:text-4xl">
          Your partner in health, every step of the way.
          
        </h3>
        <div className="object-center justify-center flex mt-4">
            <div className="bg-cyan-400 py-0.5 px-2 rounded-full w-50"/>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
          {whys.map((why) => (
            <div
              key={why.title}
              className="flex gap-4 rounded-xl border-2  border-cyan-500 bg-cyan-100 p-4 text-left"
            >
              <div className="h-fit shrink-0 rounded-lg bg-cyan-400  p-3 text-white">
                <div className="h-7 w-7">{why.icon}</div>
              </div>

              <div>
                <h3 className="font-bold text-black">{why.title}</h3>
                <p className="mt-1 text-sm text-black">{why.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeWhy;