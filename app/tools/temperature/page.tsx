"use client";

import { useState } from "react";
import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function TemperaturePage() {
  const [temperature, setTemperature] = useState<string>("");
  const [fromUnit, setFromUnit] = useState<string>("");
  const [toUnit, setToUnit] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const convert = () => {
    const temp = parseFloat(temperature);
    if (isNaN(temp)) return;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      setResult((temp * 9/5) + 32);
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      setResult((temp - 32) * 5/9);
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
      setResult(temp + 273.15);
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
      setResult(temp - 273.15);
    }
  };

  return (
    <Layout>
      <div className="container px-4 py-8 md:px-6">
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>Temperature Converter</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Temperature</label>
              <Input
                type="number"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                placeholder="Enter temperature"
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
                    <SelectItem value="celsius">Celsius</SelectItem>
                    <SelectItem value="fahrenheit">Fahrenheit</SelectItem>
                    <SelectItem value="kelvin">Kelvin</SelectItem>
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
                    <SelectItem value="celsius">Celsius</SelectItem>
                    <SelectItem value="fahrenheit">Fahrenheit</SelectItem>
                    <SelectItem value="kelvin">Kelvin</SelectItem>
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
                  Result: {result.toFixed(2)}° {toUnit}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}