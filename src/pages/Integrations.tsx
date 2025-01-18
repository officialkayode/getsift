import { WaitlistForm } from "@/components/WaitlistForm";
import { NavigationBar } from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Video, Mail, FileText, FolderKanban, HeadphonesIcon } from "lucide-react";

const IntegrationsPage = () => {
  const integrationCategories = [
    {
      title: "Communication & Collaboration",
      icon: MessageSquare,
      tools: ["Slack", "Microsoft Teams", "Zoom", "Google Meet", "Microsoft Outlook", "Google Workspace"],
    },
    {
      title: "Document Management",
      icon: FileText,
      tools: ["Confluence", "SharePoint", "Google Workspace", "Popular Wiki platforms"],
    },
    {
      title: "Project Management",
      icon: FolderKanban,
      tools: ["Jira", "Asana", "Monday.com", "Trello"],
    },
    {
      title: "Service Management",
      icon: HeadphonesIcon,
      tools: ["ServiceNow", "Zendesk", "Jira Service Management"],
    },
  ];

  const benefits = [
    "Automatic context capture across all your tools",
    "Seamless knowledge preservation without extra steps",
    "Reduced context switching for your team",
    "Faster onboarding and knowledge transfer",
    "Improved team productivity through integration",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f8f8f8]">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-gelasio text-[#312F2B]">
            Enterprise-Ready Integrations
          </h1>
          <p className="text-xl md:text-2xl text-[#272525] mb-8 max-w-3xl mx-auto">
            Connect Sift with your existing tools to unlock team knowledge and optimize workflows
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-[#272525] leading-relaxed">
              Sift seamlessly integrates with your existing toolstack, requiring no disruption to current workflows. Our platform automatically captures context and preserves knowledge while your team works with their familiar tools.
            </p>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center font-gelasio text-[#312F2B]">
            Supported Integrations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {integrationCategories.map((category) => (
              <Card key={category.title} className="border-accent/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <category.icon className="h-6 w-6 text-accent" />
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-[#272525]">
                    {category.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary/30 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center font-gelasio text-[#312F2B]">
            Integration Benefits
          </h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-lg text-[#272525]">
                  <div className="h-2 w-2 bg-accent rounded-full" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#BAB6AA] px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#312F2B] font-gelasio">
            Ready to streamline your team's workflow?
          </h2>
          <p className="text-xl text-[#272525] mb-12 max-w-3xl mx-auto">
            Join forward-thinking teams already using Sift to optimize their workflows and preserve knowledge.
          </p>
          <div className="max-w-lg mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IntegrationsPage;