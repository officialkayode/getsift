import { Brain, Users, Zap, Shield, Clock, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const UseCases = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container px-4 py-16">
        <div className="mb-12">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-slate-300 hover:text-white mb-8"
          >
            ← Back to Home
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Use Cases</h1>
          <p className="text-xl text-slate-300">
            Discover how Sift can transform your team's knowledge management and workflow optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-slate-700/30 border-slate-600">
            <CardContent className="p-6">
              <div className="bg-blue-500/10 p-3 rounded-full w-fit mb-4">
                <Brain className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Technical Documentation Management</h2>
              <ul className="space-y-4 text-slate-300">
                <li>• Automatically capture and organize technical documentation</li>
                <li>• Create searchable knowledge bases for development practices</li>
                <li>• Maintain up-to-date system architecture documentation</li>
                <li>• Track API changes and dependencies</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-700/30 border-slate-600">
            <CardContent className="p-6">
              <div className="bg-blue-500/10 p-3 rounded-full w-fit mb-4">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Team Transition Management</h2>
              <ul className="space-y-4 text-slate-300">
                <li>• Streamline employee onboarding and offboarding</li>
                <li>• Preserve critical knowledge during team transitions</li>
                <li>• Transfer project ownership seamlessly</li>
                <li>• Maintain continuity in team operations</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-700/30 border-slate-600">
            <CardContent className="p-6">
              <div className="bg-blue-500/10 p-3 rounded-full w-fit mb-4">
                <Clock className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Resource Optimization</h2>
              <ul className="space-y-4 text-slate-300">
                <li>• Monitor team capacity and workload</li>
                <li>• Optimize task allocation based on expertise</li>
                <li>• Predict and manage resource constraints</li>
                <li>• Track project timelines and dependencies</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-700/30 border-slate-600">
            <CardContent className="p-6">
              <div className="bg-blue-500/10 p-3 rounded-full w-fit mb-4">
                <Database className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Knowledge Base Management</h2>
              <ul className="space-y-4 text-slate-300">
                <li>• Centralize team knowledge and best practices</li>
                <li>• Create searchable documentation libraries</li>
                <li>• Track and version control procedures</li>
                <li>• Enable self-service information access</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UseCases;