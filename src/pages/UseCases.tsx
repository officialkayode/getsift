import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const useCases = [
  {
    title: "Managing Employee Bandwidth",
    problem: "Managers struggle to distribute workloads effectively due to lack of real-time visibility into employee capacity.",
    solution: "Sift's real-time employee bandwidth monitoring and smart task allocation ensure workloads are balanced and aligned with team expertise.",
    benefit: "Teams can avoid burnout, reduce delays, and maintain peak productivity even during high-pressure periods."
  },
  {
    title: "Seamless Knowledge Transfer",
    problem: "Knowledge documentation is scattered, leading to inefficiencies in onboarding and team transitions.",
    solution: "Sift organizes knowledge contextually by role, project, and workflow, making critical information easily accessible.",
    benefit: "New hires get up to speed faster, and knowledge remains actionable even when employees are unavailable."
  },
  {
    title: "Reducing Impact of PTO and Employee Turnover",
    problem: "Team productivity drops when key employees are on leave or leave the organization entirely.",
    solution: "Sift predicts potential bottlenecks and offers recommendations to redistribute tasks and ensure continuity.",
    benefit: "Teams stay agile, and operations remain unaffected by absences or transitions."
  },
  {
    title: "Enhancing Workflow Efficiency",
    problem: "Teams waste valuable time searching for information or recreating processes due to disorganized workflows.",
    solution: "Sift uses AI to learn successful patterns and suggest process improvements while delivering proactive insights at critical decision points.",
    benefit: "Teams complete tasks faster, make better decisions, and avoid redundant efforts."
  },
  {
    title: "Improving Team Collaboration",
    problem: "Collaboration suffers when team members rely on multiple siloed tools for communication and task tracking.",
    solution: "Sift integrates with existing tools, providing a unified view of team resources, tasks, and capacity in real time.",
    benefit: "Teams collaborate more effectively, with fewer misunderstandings and greater alignment."
  }
];

const UseCases = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f8f8f8] pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">Use Cases</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-accent mb-1">Problem:</h3>
                  <p className="text-sm">{useCase.problem}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Solution:</h3>
                  <p className="text-sm">{useCase.solution}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">Benefit:</h3>
                  <p className="text-sm">{useCase.benefit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCases;