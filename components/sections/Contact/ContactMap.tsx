// sections/Contact/ContactMap.tsx
"use client";

export default function ContactMap() {
    return (
        <div className="pt-24" data-aos="fade-up">
            <div className="flex items-center gap-3 mb-10">
                <div className="w-1.5 h-8 bg-[#072B61] rounded-full"></div>
                <h2 className="text-3xl font-bold dark:text-white">Find Us Here</h2>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-10">
                <div className="rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.756909511243!2d27.93128847652019!3d-32.95742687243458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e66c37d9940cd11%3A0x3e7ad94867478ba7!2sNkqubela%20Technologies!5e0!3m2!1sen!2sza!4v1772002466477!5m2!1sen!2sza"
                        width="100%"
                        height="500"
                        style={{ border: 0, display: 'block' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Nkqubela Technologies Office Location"
                    />
                </div>
            </div>
        </div>
    );
}