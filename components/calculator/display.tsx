"use client";

import { cn } from "@/lib/utils";

interface DisplayProps {
  primary: string;
  secondary: string;
  className?: string;
}

export function Display({ primary, secondary, className }: DisplayProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="bg-secondary p-4 rounded-lg text-right text-2xl font-mono overflow-x-auto">
        {primary}
      </div>
      <div className="text-sm text-muted-foreground text-right overflow-x-auto">
        {secondary || "0"}
      </div>
    </div>
  );
}