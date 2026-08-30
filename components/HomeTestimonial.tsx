const HomeTestimonial = () => {
  const testimonials = [
    {
      image: "/patient (2).jfif",
      name: "Andrew Spencer",
      review: "Very professional and caring staff. I had a great experience.",
    },
    {
      image: "/patient (1).jfif",
      name: "Margaret Lawson",
      review: "The doctors were attentive, friendly, and very professional.",
    },
    {
      image: "/patient (3).jfif",
      name: "Alisha Peters",
      review: "Quick service, caring nurses, and excellent medical care.",
    },
  ];

  return (
    <section className="mt-15 bg-cyan-100 p-7">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-bold text-black">
          WHAT OUR PATIENTS SAY
        </p>

        <h2 className="text-center text-2xl font-semibold text-black">
          Trusted by Thousands of Lives
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="mt-4 rounded-xl border border-white bg-white/30 p-6 backdrop-blur-md"
            >
              <div className="flex items-center gap-5">
                <img
                  className="h-20 w-20 rounded-full border-2 border-cyan-400 object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />

                <div>
                  <h3 className="font-serif text-lg text-black">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-black">
                    {testimonial.review}
                  </p>
                  <div>
                    <div className="flex gap-1 mt-4 text-yellow-400">
  {[...Array(5)].map((_, index) => (
    <svg
      key={index}
      className="h-5 w-5 fill-current"
      viewBox="0 0 24 24"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ))}
</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonial;