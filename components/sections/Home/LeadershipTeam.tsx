import Image from "next/image";
import Button from "@/components/ui/Button";

const leaders = [
  {
    name: "Mawethu Sidzamba",
    title: "Chief Executive Officer",
    image: "/images/team/mawethu-home.jpg",
    delay: 0,
  },
  {
    name: "Andile Kenqu",
    title: "Chief Operating Officer",
    image: "/images/team/andile-home.jpg",
    delay: 150,
  },
];

export default function LeadershipTeam() {
  return (
    <section className="bg-white dark:bg-darkmode py-12 lg:py-20 relative">
      {/* Blending gradient from services section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-IcyBreeze dark:from-darklight to-transparent dark:to-transparent pointer-events-none"></div>
      <div className="container overflow-hidden relative z-10 pt-8 lg:pt-10">
        <div className="text-center mb-10 lg:mb-20" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Leadership Team
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Guided by visionaries with a passion for innovation and digital
            transformation.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 items-start px-4">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="group max-w-[320px] w-full"
              data-aos="fade-up"
              data-aos-delay={leader.delay}
            >
              <div className="relative overflow-hidden rounded-22 shadow-lg h-[410px] mb-6">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={320}
                  height={410}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="space-y-1 text-center">
                <h4 className="text-2xl font-bold dark:text-white">
                  {leader.name}
                </h4>
                <p className="text-primary font-bold">{leader.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 lg:mt-16" data-aos="fade-up">
          <Button href="/team" variant="outline" className="!rounded-full">
            View Entire Team
          </Button>
        </div>
      </div>
    </section>
  );
}
