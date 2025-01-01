"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Calculator, 
  Percent, 
  Clock, 
  Ruler, 
  Scale, 
  Thermometer,
  Triangle
} from "lucide-react";

const tools = [
  {
    title: "Percentage Calculator",
    icon: Percent,
    description: "Calculate percentages easily",
    path: "/tools/percentage"
  },
  {
    title: "Time Calculator",
    icon: Clock,
    description: "Calculate time differences",
    path: "/tools/time"
  },
  {
    title: "Unit Converter",
    icon: Ruler,
    description: "Convert between different units",
    path: "/tools/units"
  },
  {
    title: "BMI Calculator",
    icon: Scale,
    description: "Calculate Body Mass Index",
    path: "/tools/bmi"
  },
  {
    title: "Temperature Converter",
    icon: Thermometer,
    description: "Convert between temperature units",
    path: "/tools/temperature"
  },
  {
    title: "Geometry Calculator",
    icon: Triangle,
    description: "Calculate areas and perimeters",
    path: "/tools/geometry"
  }
];

export function ToolsGrid() {
  return (
    <div className="grid gap-6">
      <h2 className="text-2xl font-bold tracking-tight">Calculation Tools</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Card key={tool.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="w-8 h-8">
                <tool.icon className="w-8 h-8" />
              </div>
              <CardTitle className="text-lg">{tool.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
              <Link href={tool.path}>
                <Button className="w-full" variant="outline">
                  Use Tool
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}