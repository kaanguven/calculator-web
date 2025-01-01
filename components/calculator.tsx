"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Display } from "./calculator/display";
import { ButtonGrid } from "./calculator/button-grid";
import { BasicButtonGrid } from "./calculator/basic-button-grid";
import { evaluateExpression } from "@/lib/calculator";
import { Calculator as CalculatorIcon, FunctionSquare as FunctionIcon } from "lucide-react";

interface CalculatorProps {
  isScientific: boolean;
}

export function Calculator({ isScientific }: CalculatorProps) {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");
  const [isNewCalculation, setIsNewCalculation] = useState(true);

  const handleNumber = (number: string) => {
    if (isNewCalculation) {
      setDisplay(number);
      setEquation(number);
      setIsNewCalculation(false);
    } else {
      setDisplay(display === "0" ? number : display + number);
      setEquation(equation + number);
    }
  };

  const handleOperator = (operator: string) => {
    setDisplay("0");
    setEquation(equation + " " + operator + " ");
    setIsNewCalculation(false);
  };

  const handleFunction = (fn: string) => {
    if (fn === "Math.PI" || fn === "Math.E") {
      setDisplay(fn === "Math.PI" ? "π" : "e");
      setEquation(equation + fn);
    } else if (fn === "square") {
      setDisplay(`${display}²`);
      setEquation(`square(${equation})`);
    } else {
      setDisplay(`${fn.split(".")[1]}(${display})`);
      setEquation(`${fn}(${equation})`);
    }
    setIsNewCalculation(false);
  };

  const calculate = () => {
    try {
      const result = evaluateExpression(equation);
      setDisplay(result.toString());
      setEquation(result.toString());
      setIsNewCalculation(true);
    } catch (error) {
      setDisplay("Error");
      setEquation("");
      setIsNewCalculation(true);
    }
  };

  const clear = () => {
    setDisplay("0");
    setEquation("");
    setIsNewCalculation(true);
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-center space-y-0 pb-4">
        <CardTitle>{isScientific ? "Scientific Calculator" : "Basic Calculator"}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <Display primary={display} secondary={equation} />
          {isScientific ? (
            <ButtonGrid
              onNumber={handleNumber}
              onOperator={handleOperator}
              onFunction={handleFunction}
              onClear={clear}
              onCalculate={calculate}
            />
          ) : (
            <BasicButtonGrid
              onNumber={handleNumber}
              onOperator={handleOperator}
              onClear={clear}
              onCalculate={calculate}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}