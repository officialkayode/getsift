import { SiftNavbar, CompactFooter } from "@/components/landing";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiftNavbar />

      <main className="flex-1 pt-20">
        <div className="container px-6 py-12 max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-8">Effective Date: July 7, 2025</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">1. Our Commitment to Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                GetSift, Inc. and its subsidiaries (collectively, "Sift," "we," "us," or "our") are committed to protecting your personal information and providing you with a positive experience when using our products and services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy describes how we handle personal information and the choices available to you regarding its collection, use, access, and disclosure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We may collect data, including personal information, about you as you use our Solutions and interact with us:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li><strong>Service Data:</strong> Information from integrated platforms (e.g., Jira, Slack, Notion) as authorized by your organization.</li>
                <li><strong>Account Information:</strong> Name, email address, and organizational role.</li>
                <li><strong>Usage Data:</strong> Metadata about how you interact with our Service.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, and clickstream behavior.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li><strong>To Provide the Service:</strong> Build your organization's private context graph and deliver proactive intelligence.</li>
                <li><strong>For Your Organization Only:</strong> Your data is never used to train global models accessible by other customers.</li>
                <li><strong>To Improve the Service:</strong> Analyze usage patterns to develop new features.</li>
                <li><strong>For Security:</strong> Secure our Service and prevent fraud.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">4. How We Share Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We do not sell your personal information. We may share data with:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li><strong>Within Your Organization:</strong> Authorized users as set by your administrator.</li>
                <li><strong>Service Providers:</strong> Cloud hosting, LLM API providers, under contractual obligations.</li>
                <li><strong>Legal Requirements:</strong> When required by law or valid legal request.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">5. Security</h2>
              <p className="text-gray-700 leading-relaxed">
                Sift implements physical, administrative, and technical safeguards including encryption of data in transit and at rest, strict access controls, and logical data isolation for each customer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">6. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain personal information only as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">7. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                You may access, update, or request deletion of your personal account information by contacting us at privacy@getsift.co.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Access, correct, and delete your personal information</li>
                <li>Manage communication preferences</li>
                <li>Control Desktop Context Assistant data capture</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">8. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                Questions about this Privacy Policy? Contact us at{" "}
                <a href="mailto:privacy@getsift.co" className="text-gray-900 underline hover:text-gray-600">
                  privacy@getsift.co
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <CompactFooter />
    </div>
  );
};

export default Privacy;
