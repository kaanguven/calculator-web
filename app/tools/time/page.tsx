"use client";

import { useState } from "react";
import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TimePage() {
  const [date1, setDate1] = useState<string>("");
  const [date2, setDate2] = useState<string>("");
  const [difference, setDifference] = useState<string | null>(null);

  const calculateDifference = () => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    
    if (d1 && d2) {
      const diffTime = Math.abs(d2.getTime() - d1.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDifference(`${diffDays} days`);
    }
  };

  return (
    <Layout>
      <div className="container px-4 py-8 md:px-6">
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>Time Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">First Date</label>
              <Input
                type="date"
                value={date1}
                onChange={(e) => setDate1(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Second Date</label>
              <Input
                type="date"
                value={date2}
                onChange={(e) => setDate2(e.target.value)}
              />
            </div>
            <Button onClick={calculateDifference} className="w-full">
              Calculate Difference
            </Button>
            {difference && (
              <div className="text-center pt-4">
                <p className="text-lg font-medium">
                  Difference: {difference}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}