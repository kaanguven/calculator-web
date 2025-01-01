"use client";

import { Button } from "@/components/ui/button";

interface BasicButtonGridProps {
  onNumber: (num: string) => void;
  onOperator: (op: string) => void;
  onClear: () => void;
  onCalculate: () => void;
}

export function BasicButtonGrid({ onNumber, onOperator, onClear, onCalculate }: BasicButtonGridProps) {
  return (
    <div className="grid gap-2">
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "/"].map((btn) => (
          <Button
            key={btn}
            variant={btn.match(/\d/) ? "outline" : "secondary"}
            onClick={() => btn.match(/\d/) ? onNumber(btn) : onOperator(btn)}
          >
            {btn}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["4", "5", "6", "*"].map((btn) => (
          <Button
            key={btn}
            variant={btn.match(/\d/) ? "outline" : "secondary"}
            onClick={() => btn.match(/\d/) ? onNumber(btn) : onOperator(btn)}
          >
            {btn}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["1", "2", "3", "-"].map((btn) => (
          <Button
            key={btn}
            variant={btn.match(/\d/) ? "outline" : "secondary"}
            onClick={() => btn.match(/\d/) ? onNumber(btn) : onOperator(btn)}
          >
            {btn}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["0", ".", "=", "+"].map((btn) => (
          <Button
            key={btn}
            variant={btn === "=" ? "default" : btn.match(/\d|\./) ? "outline" : "secondary"}
            onClick={() => {
              if (btn === "=") onCalculate();
              else if (btn.match(/\d|\./)) onNumber(btn);
              else onOperator(btn);
            }}
          >
            {btn}
          </Button>
        ))}
      </div>
      <Button variant="destructive" onClick={onClear}>Clear</Button>
    </div>
  );
}