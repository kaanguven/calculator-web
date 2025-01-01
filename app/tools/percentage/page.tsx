"use client";

import { useState } from "react";
import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function PercentagePage() {
  const [number, setNumber] = useState<string>("");
  const [percentage, setPercentage] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const calculatePercentage = () => {
    const num = parseFloat(number);
    const perc = parseFloat(percentage);
    if (!isNaN(num) && !isNaN(perc)) {
      setResult((num * perc) / 100);
    }
  };

  return (
    <Layout>
      <div className="container px-4 py-8 md:px-6">
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>Percentage Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Number</label>
              <Input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter number"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Percentage</label>
              <Input
                type="number"
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
                placeholder="Enter percentage"
              />
            </div>
            <Button onClick={calculatePercentage} className="w-full">
              Calculate
            </Button>
            {result !== null && (
              <div className="text-center pt-4">
                <p className="text-lg font-medium">
                  Result: {result.toFixed(2)}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}