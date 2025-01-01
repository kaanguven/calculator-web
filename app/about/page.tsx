"use client";

import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <Layout>
      <div className="container px-4 py-12 md:px-6">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">About MathCalculate</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert">
            <p className="text-lg text-muted-foreground">
              MathCalculate.com is your comprehensive online calculation toolkit, designed to make mathematical computations simple and accessible for everyone.
            </p>
            
            <h3 className="text-xl font-semibold mt-6">Our Tools</h3>
            <p>
              We offer a variety of calculation tools including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Basic Calculator for everyday calculations</li>
              <li>Percentage Calculator for quick percentage computations</li>
              <li>BMI Calculator for health metrics</li>
              <li>Temperature Converter for unit conversions</li>
              <li>Geometry Calculator for area and perimeter calculations</li>
              <li>Time Calculator for date and time differences</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Why Choose Us?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Simple and intuitive interface</li>
              <li>Accurate calculations</li>
              <li>Free to use</li>
              <li>No registration required</li>
              <li>Works on all devices</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}