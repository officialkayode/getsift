import { WaitlistForm } from "@/components/WaitlistForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";

const IntegrationsPage = () => {
  const integrationCategories = [
    {
      title: "Communication & Collaboration",
      tools: [
        { name: "Slack", type: "Chat" },
        { name: "Microsoft Teams", type: "Chat & Meetings" },
        { name: "Zoom", type: "Meetings" },
        { name: "Google Meet", type: "Meetings" },
        { name: "Microsoft Outlook", type: "Email" },
        { name: "Google Workspace", type: "Email" },
      ],
    },
    {
      title: "Document Management",
      tools: [
        { name: "Confluence", type: "Wiki" },
        { name: "SharePoint", type: "Document Management" },
        { name: "Google Workspace", type: "Document Management" },
        { name: "Popular Wiki platforms", type: "Wiki" },
      ],
    },
    {
      title: "Project Management",
      tools: [
        { name: "Jira", type: "Project Management" },
        { name: "Asana", type: "Project Management" },
        { name: "Monday.com", type: "Project Management" },
        { name: "Trello", type: "Project Management" },
      ],
    },
    {
      title: "Service Management",
      tools: [
        { name: "ServiceNow", type: "Service Management" },
        { name: "Zendesk", type: "Service Management" },
        { name: "Jira Service Management", type: "Service Management" },
      ],
    },
  ];

  const benefits = [
    {
      title: "Automatic Context Capture",
      description: "Seamlessly capture and preserve knowledge across all your tools",
    },
    {
      title: "Seamless Knowledge Preservation",
      description: "Never lose valuable insights or context from team communications",
    },
    {
      title: "Reduced Context Switching",
      description: "Access information without jumping between different platforms",
    },
    {
      title: "Faster Onboarding",
      description: "Enable new team members to get up to speed quickly with preserved knowledge",
    },
    {
      title: "Improved Team Productivity",
      description: "Streamline workflows and enhance team collaboration efficiency",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavigationBar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
              Enterprise-Ready Integrations
            </h1>
            <p className="text-xl md:text-2xl text-center text-muted-foreground max-w-3xl mx-auto">
              Connect Sift with your existing tools to unlock team knowledge and optimize workflows
            </p>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-6 text-foreground">
                Sift seamlessly integrates with your existing tools, ensuring no disruption to current workflows while automatically capturing and preserving valuable team knowledge.
              </p>
            </div>
          </div>
        </section>

        {/* Integration Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Available Integrations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {integrationCategories.map((category, index) => (
                <Card key={index} className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.tools.map((tool, toolIndex) => (
                        <li key={toolIndex} className="flex items-center gap-2 text-card-foreground">
                          <span className="text-sm text-muted-foreground">{tool.type}:</span>
                          <span>{tool.name}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Integration Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-card-foreground">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Ready to transform your workflow?</h2>
            <WaitlistForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IntegrationsPage;