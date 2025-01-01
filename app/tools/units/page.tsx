"use client";

import { useState } from "react";
import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function UnitsPage() {
  const [value, setValue] = useState<string>("");
  const [fromUnit, setFromUnit] = useState<string>("");
  const [toUnit, setToUnit] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const units = {
    length: ["meters", "kilometers", "miles", "feet"],
    weight: ["kilograms", "pounds", "ounces", "grams"],
  };

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) return;

    // Basic conversion example (meters to kilometers)
    if (fromUnit === "meters" && toUnit === "kilometers") {
      setResult(num / 1000);
    }
    // Add more conversion logic as needed
  };

  return (
    <Layout>
      <div className="container px-4 py-8 md:px-6">
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>Unit Converter</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Value</label>
              <Input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter value"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">From</label>
                <Select onValueChange={setFromUnit}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    {units.length.map((unit) => (
                      <SelectItem key={unit} value={unit}>
                        {unit}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">To</label>
                <Select onValueChange={setToUnit}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    {units.length.map((unit) => (
                      <SelectItem key={unit} value={unit}>
                        {unit}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button onClick={convert} className="w-full">
              Convert
            </Button>
            {result !== null && (
              <div className="text-center pt-4">
                <p className="text-lg font-medium">
                  Result: {result} {toUnit}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}