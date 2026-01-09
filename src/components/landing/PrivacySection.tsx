import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const privacySections = [
  {
    title: "Data we collect",
    content:
      "We collect information you provide directly, such as your name, email, and company when you sign up or request a demo. When you connect your tools (Slack, Gmail, etc.), we access metadata and content necessary to provide context services. We also collect usage data to improve the product.",
  },
  {
    title: "How we use data",
    content:
      "We use your data to provide and improve Sift's context engine services. This includes analyzing connected tool data to surface relevant context, personalizing your experience, and developing new features. We do not use your data to train general AI models shared with other customers.",
  },
  {
    title: "How we share data",
    content:
      "We do not sell your data. We may share data with service providers who help us operate Sift (e.g., cloud infrastructure, analytics). We may also disclose data if required by law or to protect our rights. Connected tool data is never shared with third parties for advertising.",
  },
  {
    title: "Security",
    content:
      "We implement industry-standard security measures including encryption in transit and at rest, access controls, regular security audits, and SOC 2 compliance efforts. Our Nucleus layer enforces strict permission verification before surfacing any data.",
  },
  {
    title: "Retention",
    content:
      "We retain your data for as long as your account is active or as needed to provide services. Connected tool data is processed in real-time and cached temporarily for performance. You can request deletion of your data at any time.",
  },
  {
    title: "Your rights",
    content:
      "You have the right to access, correct, or delete your personal data. You can disconnect tools at any time, which stops further data processing from those sources. You may also request a copy of your data or object to certain processing activities.",
  },
  {
    title: "Contact",
    content:
      "For privacy-related questions or requests, contact us at privacy@getsift.co. We aim to respond to all requests within 30 days.",
  },
];

export const PrivacySection = () => {
  return (
    <section id="privacy" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight font-mono text-center">
          Privacy
        </h2>

        {/* Summary */}
        <p className="mt-6 text-center text-gray-600 max-w-xl mx-auto">
          We respect your data. Sift collects only what's needed to provide context services, and we never sell your information.
        </p>

        <p className="mt-4 text-center text-sm text-gray-400">
          Last updated: January 2025
        </p>

        {/* Full Privacy Accordion */}
        <div className="mt-10">
          <Accordion type="single" collapsible>
            <AccordionItem value="full-privacy" className="border-none">
              <AccordionTrigger className="bg-gray-50 rounded-xl px-6 py-4 hover:no-underline hover:bg-gray-100 transition-colors">
                <span className="text-sm font-medium text-gray-700">
                  Read full privacy policy
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-6">
                <div className="space-y-6">
                  {privacySections.map((section) => (
                    <div key={section.title}>
                      <h3 className="text-base font-medium text-gray-900 mb-2">
                        {section.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
