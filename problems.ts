{
  // *Problem 1
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === undefined || toUpper === true) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  }

  // *Problem 2
  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter((item) => item.rating >= 4);
  }

  // *Problem 3
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, currentArray) => acc.concat(currentArray));
  }

  // *Problem 4

  class Vehicle {
    constructor(private make: string, private year: number) {}

    getInfo(): string {
      return `Make : ${this.make}, Year: ${this.year}`;
    }
  }

  class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
      super(make, year);
    }
    getModel(): string {
      return `Model : ${this.model}`;
    }
  }

  // *Problem 5
  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  // *Problem 6
  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    return products.reduce(
      (max, product) =>
        max === null || max.price < product.price ? product : max,
      products[0] ?? null
    );
  }

  // *Problem 7

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }

  // *Problem 8

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (n < 0) {
        reject(new Error("Negative numbers are not allowed"));
      }
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    });
  }
}
