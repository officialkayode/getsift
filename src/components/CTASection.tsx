
import { WaitlistForm } from "@/components/WaitlistForm";
import { Shield, Lock, Server } from "lucide-react";

export const CTASection = () => {
  const securityFeatures = [
    {
      icon: <Shield className="w-5 h-5 text-accent" />,
      text: "SOC 2 Type II Certification in progress"
    },
    {
      icon: <Lock className="w-5 h-5 text-accent" />,
      text: "End-to-end encryption"
    },
    {
      icon: <Server className="w-5 h-5 text-accent" />,
      text: "Enterprise-grade infrastructure"
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container px-4 text-center">
        <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
          Join forward-thinking teams already on the waitlist to transform their knowledge management.
        </p>
        <div className="max-w-lg mx-auto mb-8">
          <WaitlistForm />
        </div>
        
        <div className="mt-12 pt-8 border-t border-accent/10">
          <h3 className="text-lg font-semibold mb-6">Our Commitment to Data Privacy & Security</h3>
          <p className="text-foreground/70 max-w-3xl mx-auto mb-8 leading-relaxed">
            At Sift, your data security and privacy are our top priorities. We operate under strict data isolation principles, ensuring your data is never shared, sold, or used for any purpose other than improving your own workflows. All data is encrypted in transit and at rest, and we comply with industry-leading certifications, including <i>SOC 2 certification in progress</i> and ISO 27001. You maintain full control and visibility over your data, and our AI models are client-specific, ensuring no cross-company data usage. With Sift, you can focus on optimizing your operations while we safeguard your information with the highest standards.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                {feature.icon}
                <span className="text-sm text-foreground/70">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
