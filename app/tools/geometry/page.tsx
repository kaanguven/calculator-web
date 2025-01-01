"use client";

import { useState } from "react";
import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function GeometryPage() {
  const [shape, setShape] = useState<string>("");
  const [dimensions, setDimensions] = useState<{ [key: string]: string }>({});
  const [result, setResult] = useState<{ area: number | null; perimeter: number | null }>({
    area: null,
    perimeter: null,
  });

  const shapes = {
    square: ["side"],
    rectangle: ["length", "width"],
    circle: ["radius"],
    triangle: ["base", "height", "side1", "side2", "side3"],
  };

  const calculate = () => {
    let area = null;
    let perimeter = null;

    switch (shape) {
      case "square":
        const side = parseFloat(dimensions.side);
        area = side * side;
        perimeter = 4 * side;
        break;
      case "rectangle":
        const length = parseFloat(dimensions.length);
        const width = parseFloat(dimensions.width);
        area = length * width;
        perimeter = 2 * (length + width);
        break;
      case "circle":
        const radius = parseFloat(dimensions.radius);
        area = Math.PI * radius * radius;
        perimeter = 2 * Math.PI * radius;
        break;
      case "triangle":
        const base = parseFloat(dimensions.base);
        const height = parseFloat(dimensions.height);
        const s1 = parseFloat(dimensions.side1);
        const s2 = parseFloat(dimensions.side2);
        const s3 = parseFloat(dimensions.side3);
        area = (base * height) / 2;
        perimeter = s1 + s2 + s3;
        break;
    }

    setResult({ area, perimeter });
  };

  return (
    <Layout>
      <div className="container px-4 py-8 md:px-6">
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>Geometry Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Shape</label>
              <Select onValueChange={setShape}>
                <SelectTrigger>
                  <SelectValue placeholder="Select shape" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="square">Square</SelectItem>
                  <SelectItem value="rectangle">Rectangle</SelectItem>
                  <SelectItem value="circle">Circle</SelectItem>
                  <SelectItem value="triangle">Triangle</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {shape && shapes[shape as keyof typeof shapes].map((dim) => (
              <div key={dim} className="space-y-2">
                <label className="text-sm font-medium capitalize">{dim}</label>
                <Input
                  type="number"
                  value={dimensions[dim] || ""}
                  onChange={(e) =>
                    setDimensions({ ...dimensions, [dim]: e.target.value })
                  }
                  placeholder={`Enter ${dim}`}
                />
              </div>
            ))}
            {shape && (
              <Button onClick={calculate} className="w-full">
                Calculate
              </Button>
            )}
            {result.area !== null && result.perimeter !== null && (
              <div className="text-center pt-4 space-y-2">
                <p className="text-lg font-medium">
                  Area: {result.area.toFixed(2)}
                </p>
                <p className="text-lg font-medium">
                  {shape === "circle" ? "Circumference" : "Perimeter"}: {result.perimeter.toFixed(2)}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}