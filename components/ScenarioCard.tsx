import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Scenario } from '@/types';

interface ScenarioCardProps {
  scenario: Scenario;
  onStart: (scenario: Scenario) => void;
}

export default function ScenarioCard({ scenario, onStart }: ScenarioCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{scenario.title}</CardTitle>
        <div className="text-sm text-gray-500">
          Difficulty: {scenario.difficulty}
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{scenario.description}</p>
        <Button onClick={() => onStart(scenario)}>
          Start Scenario
        </Button>
      </CardContent>
    </Card>
  );
}