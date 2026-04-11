import Link from "next/link";

const HeroNew = () => {
  return (
    <header className="hero-new-header bg-white dark:bg-darkmode w-full mt-24 pb-10 sm:pb-12 lg:pb-14 transition-colors duration-300 px-0 mx-0">
      <div className="hero-new-shell w-full flex flex-col justify-start items-center pt-0 px-0 mx-0">
        <div
          className="hero-new-background relative w-full h-[520px] sm:h-[520px] lg:h-[520px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero/Hero1.png')",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none dark:hidden"
            style={{
              background:
                "linear-gradient(rgba(1, 17, 32, 0.7), rgba(1, 17, 32, 0.5))",
            }}
          />
          <div className="absolute inset-0 pointer-events-none hidden dark:block bg-sky-200/15" />

          <div className="absolute top-16 sm:top-24 lg:top-28 left-1/2 -translate-x-1/2 z-30 w-[92%] sm:w-[85%] lg:w-auto text-center px-3 sm:px-0 pointer-events-none">
            <h1
              className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-[0_8px_20px_rgba(0,0,0,0.55)]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Empowering Digital Transformation
            </h1>
            <p
              className="mt-3 sm:mt-4 text-xl md:text-2xl text-white/90 leading-loose font-medium max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Innovative ICT solutions designed to accelerate growth and
              modernize operations.
            </p>
          </div>

          <div
            className="absolute bottom-10 sm:bottom-12 lg:bottom-14 inset-x-0 z-30 w-full flex justify-center px-4 sm:px-6 lg:px-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link
              href="/about"
              className="floating-btn inline-flex items-center justify-center text-center no-underline appearance-none w-full max-w-[370px] min-w-[160px] py-3 sm:py-5 lg:py-7 px-5 sm:px-[0px] text-base sm:text-lg bg-primary text-white font-semibold border border-primary dark:bg-[#002d5e] dark:text-white dark:border-[#002d5e] rounded-[28px] sm:rounded-[40px] cursor-pointer shadow-lg transition-all duration-600 hover:shadow-xl hover:bg-white hover:text-[#002d5e]"
              style={{
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                transition: "all 0.6s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 25px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 20px rgba(0, 0, 0, 0.3)";
              }}
            >
              Nkqubela Technologies PTY Ltd
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroNew;
