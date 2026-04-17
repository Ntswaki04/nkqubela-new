// sections/About/CoreValues.tsx
"use client";

const values = [
  {
    title: "Innovation",
    desc: "We foster a culture of continuous innovation, constantly exploring new technologies and ideas to deliver the best solutions for our clients.",
    image: "/images/about us hands 2.jpg",
  },
  {
    title: "Collaboration",
    desc: "We believe in the power of collaboration, working closely with our clients to understand their unique needs and create tailored solutions.",
    image: "/images/about us1.jpg",
  },
  {
    title: "Solutions",
    desc: "We deliver innovative, end-to-end solutions that empower businesses to overcome complex challenges and drive sustainable growth through cutting-edge technology.",
    image: "/images/about us 3.png",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-white dark:bg-darkmode py-32 overflow-hidden">
      <div className="container px-4">
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-SlateBlueText dark:text-gray-300 text-xl">
            The principles that guide everything we do.
          </p>
        </div>

        <div className="value-card-container">
          {values.map((val, i) => (
            <div
              key={val.title}
              className="value-card-pill"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className="value-card-image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={val.image} alt={val.title} />
              </div>
              <div className="value-card-content">
                <h3 className="value-card-title">{val.title}</h3>
                <p className="value-card-description">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
