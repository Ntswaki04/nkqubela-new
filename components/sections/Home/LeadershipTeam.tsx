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
  const leftLeader = leaders[0];
  const rightLeader = leaders[1];

  return (
    <section className="bg-white dark:bg-darkmode py-12 lg:py-20 relative">
      {/* Blending gradient from services section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-IcyBreeze dark:from-darklight to-transparent dark:to-transparent pointer-events-none"></div>
      <div className="container overflow-visible relative z-10 pt-8 lg:pt-10">
        <div className="relative mx-auto max-w-6xl">
          <div
            className="mx-auto mb-10 max-w-2xl px-4 text-center xl:hidden"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Guided by visionaries with a passion for innovation and digital
              transformation.
            </p>
          </div>

          <div className="hidden xl:grid xl:grid-cols-[280px_minmax(0,1fr)_280px] items-center gap-8 2xl:gap-12 min-h-[560px]">
            <div
              className="relative z-10 w-[250px] xl:w-[280px] float-axis-left justify-self-start"
              data-aos="fade-right"
              data-aos-delay={leftLeader.delay}
            >
              <div className="group relative overflow-hidden rounded-22 shadow-2xl ring-1 ring-black/10 dark:ring-white/10 bg-white/20 backdrop-blur-sm">
                <Image
                  src={leftLeader.image}
                  alt={leftLeader.name}
                  width={300}
                  height={400}
                  className="w-full h-[350px] lg:h-[390px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-4">
                  <p className="text-white text-lg font-semibold leading-tight">
                    {leftLeader.name}
                  </p>
                  <p className="text-white/90 text-sm font-medium">
                    {leftLeader.title}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="relative z-30 max-w-lg mx-auto text-center px-4"
              data-aos="fade-up"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-5">
                Our Leadership Team
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto leading-relaxed break-words">
                Guided by visionaries with a passion for innovation and digital
                transformation.
              </p>
              <div
                className="relative z-40 text-center mt-7 lg:mt-9"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Button
                  href="/team"
                  variant="outline"
                  className="!rounded-full !cursor-pointer"
                >
                  View Entire Team
                </Button>
              </div>
            </div>

            <div
              className="relative z-10 w-[250px] xl:w-[280px] float-axis-right justify-self-end"
              data-aos="fade-left"
              data-aos-delay={rightLeader.delay}
            >
              <div className="group relative overflow-hidden rounded-22 shadow-2xl ring-1 ring-black/10 dark:ring-white/10 bg-white/20 backdrop-blur-sm">
                <Image
                  src={rightLeader.image}
                  alt={rightLeader.name}
                  width={300}
                  height={400}
                  className="w-full h-[350px] lg:h-[390px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-4">
                  <p className="text-white text-lg font-semibold leading-tight">
                    {rightLeader.name}
                  </p>
                  <p className="text-white/90 text-sm font-medium">
                    {rightLeader.title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 xl:hidden">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="group max-w-[360px] w-full mx-auto"
                data-aos="fade-up"
                data-aos-delay={leader.delay}
              >
                <div className="relative overflow-hidden rounded-22 shadow-lg h-[390px] mb-5">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={360}
                    height={390}
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

            <div
              className="relative z-40 text-center mt-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Button
                href="/team"
                variant="outline"
                className="!rounded-full !cursor-pointer"
              >
                View Entire Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
