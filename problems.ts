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

  console.log(processValue(5));
  console.log(processValue("Himadree"));
}
