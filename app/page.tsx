"use client";

import { useState } from "react";
import { Calculator } from "@/components/calculator";
import { ToolsGrid } from "@/components/tools-grid";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isScientific, setIsScientific] = useState(true);
  
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-start">
        <section className="w-full py-12">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                MathCalculate.com
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Professional calculation tools for your mathematical needs
              </p>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setIsScientific(!isScientific)}
                className="mt-4"
              >
                {isScientific ? "Switch to Basic Calculator" : "Switch to Scientific Calculator"}
              </Button>
            </div>
          </div>
        </section>
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center gap-12">
            <div className="w-full max-w-xl mx-auto">
              <Calculator isScientific={isScientific} />
            </div>
            <div className="w-full max-w-6xl mx-auto" id="tools">
              <ToolsGrid />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}