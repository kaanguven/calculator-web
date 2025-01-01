export function evaluateExpression(expression: string): number {
  // Replace mathematical constants
  expression = expression.replace(/Math.PI/g, Math.PI.toString());
  expression = expression.replace(/Math.E/g, Math.E.toString());

  // Handle square function
  expression = expression.replace(/square\((.*?)\)/g, (_, num) => {
    return `(${num} * ${num})`;
  });

  // Handle other math functions
  const mathFunctions = ["sin", "cos", "tan", "log10", "log", "sqrt"];
  mathFunctions.forEach(fn => {
    const regex = new RegExp(`Math.${fn}\\((.*?)\\)`, "g");
    expression = expression.replace(regex, (_, num) => {
      const value = eval(num);
      return Math[fn](value).toString();
    });
  });

  try {
    return eval(expression);
  } catch (error) {
    console.error("Invalid expression:", error);
    return NaN;
  }
}