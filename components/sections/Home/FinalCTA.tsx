import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-white dark:bg-darkmode py-14 lg:py-16 relative">
      {/* Blending gradient from highlights section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-IcyBreeze dark:from-darklight to-transparent dark:to-transparent pointer-events-none"></div>
      <div className="container relative z-10 pt-8 lg:pt-10">
        <div
          className="rounded-22 p-8 sm:p-10 md:p-16 lg:p-24 text-center text-slate-900 dark:text-slate-900 relative overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero/globe7.png')",
          }}
          data-aos="zoom-in"
        >
          <div className="absolute inset-0 bg-slate-950/82 dark:bg-slate-950/92"></div>
          <div className="absolute inset-0 bg-IcyBreeze/15 dark:bg-IcyBreeze/8"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-ElectricAqua/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 space-y-8">
            <h2
              className="text-slate-900 dark:text-slate-900 font-bold max-w-2xl mx-auto leading-tight drop-shadow-lg"
              style={{ textShadow: "0 2px 8px rgba(255,255,255,0.5)" }}
            >
              Ready to Transform Your Business with Technology?
            </h2>
            <p
              className="text-slate-800 dark:text-slate-900 text-xl max-w-xl mx-auto drop-shadow-md"
              style={{ textShadow: "0 1px 6px rgba(255,255,255,0.4)" }}
            >
              Partner with Nkqubela Technologies for cutting-edge ICT solutions
              tailored to your unique needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-primary dark:bg-gray-900 dark:text-white px-10 py-4 font-bold rounded-lg hover:bg-IcyBreeze dark:hover:bg-gray-800 transition-colors shadow-xl"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="border-2 border-slate-900/50 text-slate-900 dark:border-white/50 dark:text-slate-900 px-10 py-4 font-bold rounded-lg hover:bg-slate-900/10 dark:hover:bg-white/10 transition-colors"
              >
                Our Offerings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
