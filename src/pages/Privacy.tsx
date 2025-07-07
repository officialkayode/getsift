import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-block mb-8">
            <h1 className="text-4xl font-orbitron text-foreground hover:text-muted-foreground transition-colors cursor-pointer">
              Sift
            </h1>
          </Link>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <h1 className="text-3xl font-orbitron mb-8">Sift Platform Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Effective Date: July 7, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Our Commitment to Privacy</h2>
              <p className="mb-4">
                GetSift, Inc. and its subsidiaries (collectively, "Sift," "we," "us," or "our") are committed to protecting your personal information and providing you with a positive experience when using our products and services (collectively "Solutions"). Our mission is to build an indispensable proactive contextual information layer for enterprises, and we understand that the data you entrust to us is critical to your business.
              </p>
              <p className="mb-4">
                This Privacy Policy applies to Sift that link to or reference this Statement and describes how we handle personal information and the choices available to you regarding its collection, use, access, and disclosure. By using Sift or otherwise providing personal information to us, you agree to these terms.
              </p>
              <p>
                Additional information on our personal information practices may be provided in offer descriptions, supplemental privacy statements, or notices provided prior to or at the time of data collection. To the extent a more specific notice conflicts with this Privacy Policy, that specific notice will control.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Compliance with Data Privacy Frameworks</h2>
              <p className="mb-4">
                Sift is committed to complying with the principles of the EU-U.S. Data Privacy Framework (DPF), the UK Extension to the EU-U.S. DPF, and the Swiss-U.S. Data Privacy Framework as set forth by the U.S. Department of Commerce. We adhere to the DPF Principles regarding the collection, use, and retention of personal information transferred from the European Union, the United Kingdom, and Switzerland to the United States.
              </p>
              <p>
                If there is any conflict between the terms in this privacy policy and the DPF Principles, the DPF Principles shall govern. To learn more about the Data Privacy Framework program, please visit www.dataprivacyframework.gov.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Information We Collect ("Personal Information")</h2>
              <p className="mb-4">
                For purposes of this Privacy Policy, "personal information" is defined as any information that can be used to identify an individual. We may collect data, including personal information, about you as you use our Solutions and interact with us. If we link other data with your personal information, we will treat that linked data as personal information.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">3.1. Customer Data</h3>
              <p className="mb-4">
                This is the information Sift processes on behalf of your organization ("Customer"). This data is owned and controlled by the Customer and is treated as Sift's confidential information.
              </p>
              <p className="mb-4">
                <strong>Service Data from Integrated Platforms:</strong> When your organization's administrator connects Sift to third-party services (e.g., Jira, Slack, Notion, GitHub), we collect data from those services as authorized. This may include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Project Management Data (e.g., Jira):</strong> Issue details, summaries, descriptions, comments, status, priority, assignees, and project metadata.</li>
                <li><strong>Communication Data (e.g., Slack):</strong> Public channel messages, message content, timestamps, user IDs, and channel IDs. Sift only accesses channels it has been explicitly invited to.</li>
                <li><strong>Documentation Data (e.g., Notion):</strong> Content from pages and databases that have been shared with the Sift integration, including text, titles, and properties.</li>
              </ul>
              
              <p className="mb-4">
                <strong>Desktop Context Data (from the Sift DCA):</strong> If you use our Desktop Context Assistant, the application captures information about your work activity to understand your current context. This may include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Active Window Metadata:</strong> The name of the application you are actively using and the title of the active window.</li>
                <li><strong>Transcribed Audio Snippets:</strong> If enabled, the DCA may capture and locally transcribe segments of speech. Raw audio is not transmitted to our servers.</li>
                <li><strong>Screen Text via OCR:</strong> If enabled, the DCA may capture and perform Optical Character Recognition (OCR) on portions of your screen. Raw images are not transmitted to our servers.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.2. User Account & Administrative Information</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Account Information:</strong> To create and manage your Sift user account, we collect information such as your name, email address, password, and organizational role.</li>
                <li><strong>Contact Information:</strong> We may collect contact information for administrative, billing, and marketing purposes.</li>
                <li><strong>Authentication Information:</strong> When you authenticate to our Service, we collect necessary credentials. For connected third-party services, we may collect authentication tokens but do not collect or store your raw passwords for those services.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.3. Usage and Technical Data</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Service Usage Data:</strong> We collect metadata about how you interact with our Service, such as features used, clicks, and performance metrics.</li>
                <li><strong>Technical Data:</strong> Like many websites, we may use automatic data collection tools, such as cookies and web beacons, to collect your IP address, browser type, and clickstream behavior to improve usability and performance.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. How We Use Your Personal Information</h2>
              <p className="mb-4">
                Sift uses personal information to provide and improve our Solutions, and for other legitimate purposes as permitted by applicable law.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>To Provide and Maintain the Service:</strong> We use Customer Data to build your organization's private context graph, perform semantic searches, synthesize information, and deliver proactive intelligence to you and your authorized team members.</li>
                <li><strong>For Your Organization's Private Use Only:</strong> Your organization's Customer Data is never used to train general, global machine learning models that would be accessible by other customers. All AI/ML models trained on or fine-tuned with your data are isolated and used exclusively for your organization's benefit.</li>
                <li><strong>To Improve and Personalize the Service:</strong> We analyze usage patterns and feedback to improve our product, develop new features, and personalize your experience.</li>
                <li><strong>To Send Communications:</strong> We use your contact information to send service-related announcements, security alerts, support messages, and, with your consent, marketing communications.</li>
                <li><strong>For Security and Compliance:</strong> We use information to secure our Service, prevent fraud, and enforce our terms and legal obligations.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. How We Share and Disclose Your Personal Information</h2>
              <p className="mb-4">
                We do not sell your personal information. We may share your personal information with third parties only for the purposes of operating our business, delivering and improving our Solutions, and for other legitimate purposes permitted by applicable law or otherwise with your consent.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Within Your Organization:</strong> The Service is designed for collaboration. Your information and Customer Data may be visible to other authorized users within your organization, subject to the access controls set by your administrator.</li>
                <li><strong>With Service Providers and Subprocessors:</strong> We engage third-party service providers and subprocessors to perform functions on our behalf. These include cloud hosting providers (e.g., Amazon Web Services), LLM API providers (e.g., OpenAI, Anthropic), and other software providers. These providers are contractually obligated to process data only for the purposes we specify and to implement appropriate security measures.</li>
                <li><strong>For Legal Reasons and Lawful Requests:</strong> We may disclose your information if required to do so by law or in response to a valid request by a competent authority (e.g., law enforcement) to comply with a legal obligation or meet national security requirements.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you of any change in ownership.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
              <p className="mb-4">
                Sift respects your rights to access, correct, and control your personal information.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Access, Correction, and Deletion:</strong> You may access, update, or request deletion of your personal account information by contacting us at privacy@getsift.co. For Customer Data, you should direct your request to your organization's administrator. We will respond to requests within 30 days or as otherwise mandated by applicable law.</li>
                <li><strong>Communication Preferences:</strong> You can manage your communication preferences by following the unsubscribe instructions included in promotional emails or by contacting us. These choices do not apply to mandatory service communications.</li>
                <li><strong>DCA Controls:</strong> You have direct control over the Desktop Context Assistant and can enable or disable its data capture functionalities at any time through its user interface.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Security of Your Personal Information</h2>
              <p>
                We intend to protect the personal information entrusted to us. Sift implements physical, administrative, and technical safeguards designed to protect your personal information from unauthorized access, use, or disclosure, including encryption of data in transit and at rest, strict access controls, and logical data isolation for each customer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
              <p>
                We will only retain your personal information for as long as necessary to fulfill the purposes for which it was collected, to comply with our business requirements and applicable laws, to resolve disputes, and to enforce our agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Additional Information for California Residents</h2>
              <p className="mb-4">
                This section provides additional details for California residents in accordance with the California Consumer Privacy Act (CCPA).
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Categories of Personal Information:</strong> The categories of personal information we collect and the purposes for which we use them are described in Sections 3 and 4 of this policy.</li>
                <li><strong>Do Not Sell My Personal Information:</strong> Sift does not "sell" Personal Information as that term is defined in the CCPA.</li>
                <li><strong>Your Rights:</strong> You have the right to request (1) a copy of the specific pieces of personal information we have collected about you, (2) deletion of your personal information, and (3) correction of inaccuracies. To make a request, please contact us at privacy@getsift.co. We will verify your identity before processing your request. You will not be discriminated against for exercising your CCPA rights.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. International Data Transfers</h2>
              <p>
                Sift is a global organization. We may transfer your personal information to Sift in the United States or to third parties located in various countries. By using our Solutions, you consent to the transfer and processing of such information outside of your country of residence. We ensure a similar degree of protection is afforded to it by using specific contracts approved by relevant authorities, such as the Standard Contractual Clauses for transfers out of the European Economic Area.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Updates to this Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or through a notice within the Service. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. How to Contact Us</h2>
              <p className="mb-4">
                We value your opinions. Should you have questions or comments related to this Privacy Policy, or to exercise your rights, please contact us.
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:privacy@getsift.co" className="text-primary hover:underline">privacy@getsift.co</a>
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;