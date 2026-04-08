import Link from "next/link";

export default function Policy() {
  const year = new Date().getFullYear();

  return (
    <main className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 mt-24">
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: April 8, {year}
        </p>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            1. Introduction
          </h2>
          <p className="leading-relaxed">
            Nkqubela Technologies (Pty) Ltd (&quot;we&quot;, &quot;our&quot;, or
            &quot;us&quot;) is committed to protecting your personal information
            and your right to privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit our website or engage with our services. By using our website,
            you agree to the practices described in this policy.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            2. Information We Collect
          </h2>
          <p className="leading-relaxed mb-4">
            We may collect the following categories of information:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              <span className="font-semibold">Personal Identification:</span>{" "}
              Name, email address, phone number, and company name when you
              contact us or submit a form.
            </li>
            <li>
              <span className="font-semibold">Usage Data:</span> Information
              about how you interact with our website, including pages visited,
              time spent, and referring URLs.
            </li>
            <li>
              <span className="font-semibold">
                Device &amp; Technical Data:
              </span>{" "}
              IP address, browser type, operating system, and device identifiers
              collected automatically.
            </li>
            <li>
              <span className="font-semibold">Communication Data:</span> Records
              of correspondence when you contact us by email, phone, or through
              our website.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            3. How We Use Your Information
          </h2>
          <p className="leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Respond to your enquiries and provide customer support.</li>
            <li>
              Send you information about our services, updates, or promotions
              (only with your consent).
            </li>
            <li>Improve our website, content, and service offerings.</li>
            <li>Comply with legal obligations and regulatory requirements.</li>
            <li>Detect, prevent, and address technical or security issues.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            4. Sharing Your Information
          </h2>
          <p className="leading-relaxed">
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information only in the following
            circumstances:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
            <li>
              <span className="font-semibold">Service Providers:</span> Trusted
              third-party vendors who assist us in operating our website or
              conducting our business, subject to confidentiality agreements.
            </li>
            <li>
              <span className="font-semibold">Legal Requirements:</span> When
              required by law, regulation, or to protect the rights, property,
              or safety of Nkqubela Technologies, our clients, or others.
            </li>
            <li>
              <span className="font-semibold">Business Transfers:</span> In the
              event of a merger, acquisition, or sale of assets, your
              information may be transferred as part of that transaction.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            5. Cookies
          </h2>
          <p className="leading-relaxed">
            Our website may use cookies and similar tracking technologies to
            enhance your browsing experience. Cookies are small data files
            stored on your device. You can instruct your browser to refuse all
            cookies or to indicate when a cookie is being sent. However, some
            parts of the website may not function properly without cookies.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            6. Data Security
          </h2>
          <p className="leading-relaxed">
            We implement appropriate technical and organisational measures to
            protect your personal information against unauthorised access,
            alteration, disclosure, or destruction. However, no method of
            transmission over the internet or electronic storage is 100% secure,
            and we cannot guarantee absolute security.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            7. Retention of Data
          </h2>
          <p className="leading-relaxed">
            We retain your personal information only for as long as necessary to
            fulfil the purposes outlined in this policy, unless a longer
            retention period is required or permitted by law.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            8. Your Rights
          </h2>
          <p className="leading-relaxed mb-4">
            Depending on your location and applicable law (including the
            Protection of Personal Information Act, POPIA, in South Africa), you
            may have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of inaccurate or incomplete data.</li>
            <li>
              Request deletion of your personal information (subject to legal
              obligations).
            </li>
            <li>Object to or restrict the processing of your data.</li>
            <li>
              Withdraw consent at any time where processing is based on consent.
            </li>
          </ul>
          <p className="leading-relaxed mt-4">
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:Info@nkqubela.co.za"
              className="text-primary hover:underline font-medium"
            >
              Info@nkqubela.co.za
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            9. Third-Party Links
          </h2>
          <p className="leading-relaxed">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of those sites and encourage
            you to review their privacy policies before providing any personal
            information.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            10. Changes to This Policy
          </h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with a revised &quot;Last updated&quot;
            date. We encourage you to review this policy periodically to stay
            informed about how we protect your information.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            11. Contact Us
          </h2>
          <p className="leading-relaxed">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us:
          </p>
          <ul className="mt-4 space-y-1">
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:Info@nkqubela.co.za"
                className="text-primary hover:underline"
              >
                Info@nkqubela.co.za
              </a>
            </li>
            <li>
              <span className="font-semibold">Phone:</span>{" "}
              <a
                href="tel:+27430500821"
                className="text-primary hover:underline"
              >
                +27 43 050 0821
              </a>
            </li>
            <li>
              <span className="font-semibold">Address:</span> Chestnut House,
              Palm Square Business Park, Beacon Bay, East London, 5201
            </li>
          </ul>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/"
            className="text-primary hover:underline font-medium text-sm"
          >
            {"<- Back to Home"}
          </Link>
        </div>
      </section>
    </main>
  );
}
