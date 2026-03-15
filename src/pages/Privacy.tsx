import { Helmet } from "react-helmet-async";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Privacy Policy | Sift</title>
        <meta name="description" content="Privacy policy for Sift — how we handle personal information, data security, and your rights." />
        <link rel="canonical" href="https://getsift.co/privacy" />
        <meta property="og:title" content="Privacy Policy | Sift" />
        <meta property="og:description" content="Privacy policy for Sift — how we handle personal information, data security, and your rights." />
        <meta property="og:url" content="https://getsift.co/privacy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <SiteNav />

      <main className="flex-1 pt-14">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-10">Effective Date: July 7, 2025</p>

          <div className="space-y-10 font-sans text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-base font-semibold text-foreground mb-3 font-sans">1. Our Commitment to Privacy</h2>
              <p className="mb-3">
                GetSift, Inc. and its subsidiaries (collectively, "Sift," "we," "us," or "our") are committed to protecting your personal information and providing you with a positive experience when using our products and services.
              </p>
              <p>
                This Privacy Policy describes how we handle personal information and the choices available to you regarding its collection, use, access, and disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3 font-sans">2. Information We Collect</h2>
              <p className="mb-3">
                We may collect data, including personal information, about you as you use our Solutions and interact with us:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Service Data:</strong> Information from integrated platforms (e.g., Jira, Slack, Notion) as authorized by your organization.</li>
                <li><strong>Account Information:</strong> Name, email address, and organizational role.</li>
                <li><strong>Usage Data:</strong> Metadata about how you interact with our Service.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, and clickstream behavior.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3 font-sans">3. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>To Provide the Service:</strong> Build your organization's private context graph and deliver proactive intelligence.</li>
                <li><strong>For Your Organization Only:</strong> Your data is never used to train global models accessible by other customers.</li>
                <li><strong>To Improve the Service:</strong> Analyze usage patterns to develop new features.</li>
                <li><strong>For Security:</strong> Secure our Service and prevent fraud.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3 font-sans">4. How We Share Information</h2>
              <p className="mb-3">
                We do not sell your personal information. We may share data with:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Within Your Organization:</strong> Authorized users as set by your administrator.</li>
                <li><strong>Service Providers:</strong> Cloud hosting, LLM API providers, under contractual obligations.</li>
                <li><strong>Legal Requirements:</strong> When required by law or valid legal request.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3 font-sans">5. Security</h2>
              <p>
                Sift implements physical, administrative, and technical safeguards including encryption of data in transit and at rest, strict access controls, and logical data isolation for each customer.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3 font-sans">6. Data Retention</h2>
              <p>
                We retain personal information only as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3 font-sans">7. Your Rights</h2>
              <p className="mb-3">
                You may access, update, or request deletion of your personal account information by contacting us at privacy@getsift.co.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access, correct, and delete your personal information</li>
                <li>Manage communication preferences</li>
                <li>Control Desktop Context Assistant data capture</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3 font-sans">8. Contact Us</h2>
              <p>
                Questions about this Privacy Policy? Contact us at{" "}
                <a href="mailto:privacy@getsift.co" className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity">
                  privacy@getsift.co
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Privacy;
