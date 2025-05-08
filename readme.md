# 1. TypeScript Interfaces vs Types: Understanding the Differences

## Introduction

In TypeScript, both `interface` and `type` are used to define custom shapes. While they appear similar at first glance, they have distinct characteristics.

## Basic Syntax Comparison

```ts
// Interface approach
interface Student {
  id: number;
  name: string;
}

// Type alias approach
type Student = {
  id: number;
  name: string;
};
```

## Key Differences

### 1. Declaration Merging

**Interfaces** can be extended through declaration merging:

```ts
interface Student {
  id: number;
}
interface Student {
  name: string;
}
// Result: { id: number; name: string }
```

**Types** cannot be merged this way:

```ts
type Student = { id: number };
type Student = { name: string }; // Error: Duplicate identifier
```

### 2. Extending Other Types

Both can extend others but with different syntax:

```ts
// Interface extending interface
interface Subjects extends Student {
  subjects: string[];
}

// Type extending type
type Subjects = Student & {
  subjects: string[];
};
```

### 3. Union and Tuple Types

**Types** excel here:

```ts
// Union type
type Hobby = "Football" | "Cricket" | "Athletics";

// Tuple type
type Result = [boolean, boolean];
```

Interfaces cannot represent these directly.

### 4. Performance Considerations

- Interfaces are generally faster for simple object checks
- Complex type operations may have better performance with type aliases

## Advanced Features

### With Types:

```ts
// Mapped types
type Subjects<T> = {
  [P in keyof T]?: T[P];
};

// Conditional types
type NonNullable<T> = T extends null | undefined ? never : T;
```

### With Interfaces:

```ts
// Extending built-in types
interface Subjects extends Array<number> {
  numberPerSubject(): void;
}
```

## When to Use Each?

| Use Case            | Interface | Type    |
| ------------------- | --------- | ------- |
| Object shapes       | ✅ Best   | ✅      |
| Union types         | ❌        | ✅ Best |
| Declaration merging | ✅ Only   | ❌      |
| Tuple types         | ❌        | ✅ Only |
| Extending built-ins | ✅ Best   | ❌      |
| Complex type logic  | ❌        | ✅ Best |

**Conclusion**: Use interfaces by default for objects, types for everything else.

# 7. Example Using Union and Intersection Types in TypeScript

## Introduction

TypeScript's type system offers powerful ways to combine types through **unions** (`|`) and **intersections** (`&`).

## Union Types (`|`)

The "OR" operator for types. A union type represents values that can be **one of several types**.

### Basic Example

```ts
type Hobby = "Football" | "Cricket" | "Athletics";

function setHobby(hobby: Hobby) {
  console.log(`Hobby is ${hobby}`);
}

setHobby("active"); // Valid
setHobby("archived"); // Error: Not in the union
```

## Intersection Types (`&`)

The "AND" operator for types. Combines multiple types into one.

### Basic Example

```ts
type Student = {
  id: number;
  name: string;
};

type Subjects = {
  subjects: string[];
};

type StudentDetails = Student & Subjects;

const newStudent: StudentDetails = {
  id: 96,
  name: "Himadree Chaudhury",
  subjects: ["Physics", "Chemistry", "Math"],
};
```

## Combining Both

```ts
type Student = { id: number; name: string };
type Group = { group: "Science" | "Commerce" | "Arts" };
type Player = { play: string };

type StudentDetails = Student & (Group | Player);

// Valid devices:
const normalStudent: StudentDetails = {
  id: 96,
  name: "Himadree Chaudhury",
  group: "Science",
};

const bkspStudent: OfficeDevice = {
  id: 96,
  name: "Himadree Chaudhury",
  play: "Football",
};
```

## Advanced Patterns

### Type Guards with Unions

```ts
function isString(value: string | number): boolean {
  return typeof value === "string";
}

function processValue(value: string | number) {
  if (isString(value)) {
    console.log(value.toUpperCase()); // TypeScript knows it's string
  } else {
    console.log(value.toFixed(2)); // Knows it's number here
  }
}
```

## Common Pitfalls

1. **Overlapping Properties**:

   ```ts
   type A = { foo: number };
   type B = { foo: string };
   type C = A & B; // foo becomes 'never' (number & string)
   ```

2. **Empty Intersections**:

   ```ts
   type D = string & number; // Type 'never'
   ```

3. **Excessive Unions**:

   ```ts
   // Avoid this when possible:
   type TooBig = string | number | boolean | object | any[];
   ```

**Conclusion**:

- `|` = "Either/Or"
- `&` = "Combination of both"
