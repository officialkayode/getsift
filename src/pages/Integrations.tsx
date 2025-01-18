import { WaitlistForm } from "@/components/WaitlistForm";
import { NavigationBar } from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, FileText, FolderKanban, HeadphonesIcon, Search } from "lucide-react";

const IntegrationsPage = () => {
  const integrationTypes = [
    "All",
    "Search Integration",
    "Featured App",
    "HRIS Sync",
    "Build your own",
    "SSO/SCIM",
  ];

  const integrationCategories = [
    {
      title: "Communication & Collaboration",
      icon: MessageSquare,
      description: "Connect your team's communication tools for seamless knowledge capture",
      tools: [
        {
          name: "Slack",
          description: "Enable AI-powered searches in Slack with Sift Integration",
          featured: true,
        },
        {
          name: "Microsoft Teams",
          description: "Streamline team collaboration with Sift's Microsoft Teams Integration",
          featured: true,
        },
        {
          name: "Zoom",
          description: "Capture and index meeting content automatically",
        },
        {
          name: "Google Meet",
          description: "Seamless integration with Google Workspace meetings",
        },
      ],
    },
    {
      title: "Document Management",
      icon: FileText,
      description: "Integrate with your document storage and wiki platforms",
      tools: [
        {
          name: "Confluence",
          description: "Connect your Confluence workspace with Sift",
          featured: true,
        },
        {
          name: "SharePoint",
          description: "Seamless integration with Microsoft SharePoint",
        },
        {
          name: "Google Workspace",
          description: "Full integration with Google's document suite",
          featured: true,
        },
      ],
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

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {/* Sidebar */}
            <div className="hidden lg:block w-64 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search integrations"
                  className="pl-10"
                />
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Integration types</h3>
                <ul className="space-y-2">
                  {integrationTypes.map((type) => (
                    <li
                      key={type}
                      className={`px-4 py-2 rounded-lg cursor-pointer hover:bg-accent/20 ${
                        type === "All" ? "bg-accent/20" : ""
                      }`}
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Integration Grid */}
            <div className="flex-1">
              {integrationCategories.map((category) => (
                <div key={category.title} className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <category.icon className="h-6 w-6 text-accent" />
                    <h2 className="text-2xl font-bold font-gelasio">{category.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{category.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.tools.map((tool) => (
                      <Card key={tool.name} className="border-accent/20">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-lg font-semibold">{tool.name}</h3>
                            {tool.featured && (
                              <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">
                                FEATURED
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {tool.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
