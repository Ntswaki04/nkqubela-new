const HeroNew = () => {
  return (
    <header className="bg-whitesmoke dark:bg-darkmode w-full min-h-[100px] h-[520px] sm:h-[620px] lg:h-[700px] mt-24 px-4 sm:px-6 lg:px-8 flex justify-center items-center transition-colors duration-300">
      <div className="hero w-full flex justify-center items-center">
        <div className="hero-background relative w-full max-w-[1230px] h-[440px] sm:h-[540px] lg:h-[650px]">
          <div className="hero-overlay w-full h-full flex flex-row gap-0 relative">
            {/* Hero 1 with white space and button */}
            <div
              className="hero1 flex-1 relative bg-transparent border-0 h-[240px] sm:h-[300px] lg:h-[350px] self-start bg-cover bg-no-repeat rounded-bl-[20px] sm:rounded-bl-[30px] rounded-tl-[20px] sm:rounded-tl-[30px] overflow-visible"
              style={{
                backgroundImage: "url('/images/hero/Hero1.png')",
                backgroundSize: "1250px 600px",
                backgroundPosition: "0 0",
              }}
            >
              {/* White Space Container */}
              <div className="white-space absolute top-full left-0 w-full h-[90px] sm:h-[100px] bg-transparent flex justify-center items-center z-10">
                <button
                  className="floating-btn absolute w-[88%] sm:w-full max-w-[370px] min-w-[160px] py-3 sm:py-5 lg:py-7 px-5 sm:px-[30px] text-sm sm:text-base bg-white dark:bg-darkmode-light text-black dark:text-black font-semibold border-none rounded-[28px] sm:rounded-[40px] cursor-pointer z-20 shadow-lg transition-all duration-600 hover:shadow-xl hover:bg-[#002d5e] dark:hover:bg-primary-dark hover:text-white dark:hover:text-white"
                  style={{
                    top: "55%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.6s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateX(-50%) translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 25px rgba(0, 0, 0, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translate(-50%, -50%)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 20px rgba(0, 0, 0, 0.3)";
                  }}
                >
                  Technologies Read More
                </button>
              </div>
            </div>

            {/* Hero 2 */}
            <div
              className="hero2 flex-1 relative bg-transparent border-0 h-[300px] sm:h-[380px] lg:h-[450px] self-start bg-cover bg-no-repeat rounded-bl-[20px] sm:rounded-bl-[30px]"
              style={{
                backgroundImage: "url('/images/hero/Hero1.png')",
                backgroundSize: "1250px 600px",
                backgroundPosition: "-410.80px 0",
              }}
            ></div>

            {/* Hero 3 */}
            <div
              className="hero3 flex-1 relative bg-transparent border-0 h-[300px] sm:h-[380px] lg:h-[450px] self-start bg-cover bg-no-repeat rounded-br-[20px] sm:rounded-br-[30px] rounded-tr-[20px] sm:rounded-tr-[30px]"
              style={{
                backgroundImage: "url('/images/hero/Hero1.png')",
                backgroundSize: "1250px 600px",
                backgroundPosition: "-820.00px 0",
              }}
            ></div>
          </div>

          {/* Hero Content (empty div for additional content) */}
          <div className="hero-content"></div>
        </div>
      </div>
    </header>
  );
};

export default HeroNew;
