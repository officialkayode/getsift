
import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeInUpClass, cardHoverClass } from "@/components/shared/animations";

interface FeatureCardProps {
  title: string;
  icon: ReactNode;
  description: string;
  delay?: number;
  accentColor?: string;
}

export const FeatureCard = ({ 
  title, 
  icon, 
  description, 
  delay = 0,
  accentColor = "border-t-purple-500" 
}: FeatureCardProps) => {
  const delayClass = delay ? `animate-delay-${delay}` : "";
  
  return (
    <Card className={`${fadeInUpClass} ${delayClass} ${cardHoverClass} shadow-md border-t-4 ${accentColor}`}>
      <CardHeader className="flex flex-col items-center">
        <div className="text-accent mb-4">
          {icon}
        </div>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};
