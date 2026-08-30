

const HomeServices = () => {
  const services = [
    {
      label: "Emergency Care",
      paragraph:
        "Fast medical attention for urgent and life-threatening conditions.",
    },
    {
      label: "Expert Doctors",
      paragraph:
        "Skilled healthcare professionals dedicated to your wellbeing.",
    },
    {
      label: "Ambulance Services",
      paragraph:
        "Reliable emergency transport when every second matters.",
    },
    {
      label: "Maternity Care",
      paragraph:
        "Safe, compassionate care for mothers and babies at every stage.",
    },
    {
      label: "Pharmacy",
      paragraph:
        "Convenient access to prescribed medicines and professional guidance.",
    },
    {
      label: "Laboratory Test",
      paragraph:
        "Accurate tests and timely results to support proper diagnosis.",
    },
  ];

  return (
    <section className="bg-white px-5 py-16 mt-30">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <img
            src="/homeservice.jfif"
            alt="Hospital services"
          
            className="w-full rounded-2xl border-2 border-cyan-400 object-cover transition hover:border-cyan-600"
          />
        </div>

        <div className="w-full sm:w-1/2">
          <p className=" text-cyan-400 font-bold text-xs">OUR SERVICES</p>
          <h3 className="text-black font-bold text-2xl mt-2 sm:text-4xl ">Trust Your Health with Us</h3>

          <div className="mt-8 grid gap-4">
            {services.map((service) => (
              <div
                key={service.label}
                className="rounded-xl bg-cyan-100 px-4 py-4 text-slate-800 border-2 border-cyan-400"
              >
                <h3 className="font-bold">{service.label}</h3>
                <p className="mt-1 text-sm">{service.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;