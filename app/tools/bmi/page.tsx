"use client";

import { useState } from "react";
import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function BMIPage() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bmi, setBMI] = useState<number | null>(null);

  const calculateBMI = () => {
    const weightKg = parseFloat(weight);
    const heightM = parseFloat(height) / 100;
    
    if (!isNaN(weightKg) && !isNaN(heightM) && heightM > 0) {
      const bmiValue = weightKg / (heightM * heightM);
      setBMI(bmiValue);
    }
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  return (
    <Layout>
      <div className="container px-4 py-8 md:px-6">
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>BMI Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Weight (kg)</label>
              <Input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight in kilograms"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Height (cm)</label>
              <Input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter height in centimeters"
              />
            </div>
            <Button onClick={calculateBMI} className="w-full">
              Calculate BMI
            </Button>
            {bmi !== null && (
              <div className="text-center pt-4 space-y-2">
                <p className="text-lg font-medium">
                  Your BMI: {bmi.toFixed(1)}
                </p>
                <p className="text-md">
                  Category: {getBMICategory(bmi)}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}