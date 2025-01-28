import { NavigationBar } from "@/components/NavigationBar";
import { Card } from "@/components/ui/card";
import { Brain, Search, Clock, GitBranch, AlertCircle, FileSearch } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      title: "Root Cause Analysis (RCA)",
      icon: <FileSearch className="w-6 h-6 text-accent" />,
      description: "Automatically capture and surface relevant system states, logs, and previous incidents during RCA workflows, enabling faster incident resolution.",
      benefits: [
        "Immediate access to relevant system context",
        "Historical incident patterns at your fingertips",
        "Automated documentation of investigation steps"
      ]
    },
    {
      title: "Incident Response",
      icon: <AlertCircle className="w-6 h-6 text-accent" />,
      description: "Proactively surface similar past incidents and their resolutions at critical decision points during incident response.",
      benefits: [
        "Faster incident resolution",
        "Reduced mean time to recovery (MTTR)",
        "Improved team coordination"
      ]
    },
    {
      title: "Knowledge Transfer",
      icon: <Brain className="w-6 h-6 text-accent" />,
      description: "Capture implicit knowledge during troubleshooting workflows without disrupting the engineer's focus.",
      benefits: [
        "Preserve critical troubleshooting patterns",
        "Reduce knowledge loss during team transitions",
        "Accelerate new team member onboarding"
      ]
    },
    {
      title: "System Debugging",
      icon: <Search className="w-6 h-6 text-accent" />,
      description: "Surface relevant system information and past debugging sessions automatically during active debugging workflows.",
      benefits: [
        "Quick access to system context",
        "Pattern recognition across issues",
        "Automated debugging trail"
      ]
    },
    {
      title: "Change Management",
      icon: <GitBranch className="w-6 h-6 text-accent" />,
      description: "Track and surface relevant system changes and their impacts during incident investigation and system updates.",
      benefits: [
        "Complete change history context",
        "Impact analysis insights",
        "Better rollback decisions"
      ]
    },
    {
      title: "On-Call Support",
      icon: <Clock className="w-6 h-6 text-accent" />,
      description: "Provide immediate context and relevant historical data to on-call engineers during critical incidents.",
      benefits: [
        "Faster incident context gathering",
        "Reduced escalation needs",
        "Better first-response decisions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <div className="container px-4 pt-24 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
          Use Cases
        </h1>
        <p className="text-lg text-white/70 mb-12 max-w-3xl animate-fade-up">
          Discover how Sift enhances technical operations by automatically capturing and surfacing critical information at key decision points.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card 
              key={index}
              className="p-6 bg-card hover:scale-[1.02] transition-transform duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
              <p className="text-white/70 mb-4">{useCase.description}</p>
              <ul className="space-y-2">
                {useCase.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-white/60">
                    <div className="w-1 h-1 bg-accent rounded-full" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCases;