{
  // *Problem 1
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === undefined || toUpper === true) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  }

  //   console.log(formatString("hello"));
  //   console.log(formatString("hello",true));
  //   console.log(formatString("hello",false));

  // *Problem 2
  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter((item) => item.rating >= 4);
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];
  // console.log(filterByRating(books));

  // *Problem 3
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, currentArray) => acc.concat(currentArray));
  }

  //   console.log(concatenateArrays(["a", "b"], ["c"]));

  // *Problem 4

  class Vehicle {
    constructor(private make: string, private year: number) {}

    getInfo(): string {
      return `Make : ${this.make} , Year: ${this.year}`;
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

  const myCar = new Car("Toyota", 2020, "Crown");
  // console.log(myCar.getModel());

  // *Problem 5
  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  //   console.log(processValue(5));
  //     console.log(processValue("Himadree"));

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
  const products = [
    { name: "Pen", price: 10 },
    { name: "Bag", price: 50 },
    { name: "Notebook", price: 25 },
  ];
  //   console.log(getMostExpensiveProduct(products));
  //   console.log(getMostExpensiveProduct([]));

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
  // console.log(getDayType(Day.Sunday));

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

  // squareAsync(4).then(console.log);
  // squareAsync(-3).catch(console.error);

  // *Problem 9

  // *Problem 10
}
