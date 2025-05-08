# 1. TypeScript Interfaces vs Types: Understanding the Differences

## Introduction

In TypeScript, both `interface` and `type` are used to define custom shapes. While they appear similar at first glance, they have distinct characteristics.

## Basic Syntax Comparison

```typescript
// Interface approach
interface User {
  id: number;
  name: string;
}

// Type alias approach
type User = {
  id: number;
  name: string;
};
```

## Key Differences

### 1. Declaration Merging

**Interfaces** can be extended through declaration merging:

```typescript
interface Car {
  make: string;
}
interface Car {
  model: string;
}
// Result: { make: string; model: string }
```

**Types** cannot be merged this way:

```typescript
type Car = { make: string };
type Car = { model: string }; // Error: Duplicate identifier
```

### 2. Extending Other Types

Both can extend others but with different syntax:

```typescript
// Interface extending interface
interface Admin extends User {
  permissions: string[];
}

// Type extending type
type Admin = User & {
  permissions: string[];
};

// Interface extending type
interface SpecialAdmin extends AdminType {}
```

### 3. Union and Tuple Types

**Types** excel here:

```typescript
// Union type
type Status = "active" | "inactive" | "pending";

// Tuple type
type Coordinates = [number, number];
```

Interfaces cannot represent these directly.

### 4. Performance Considerations

- Interfaces are generally faster for simple object checks
- Complex type operations may have better performance with type aliases

## Advanced Features

### With Types:

```typescript
// Mapped types
type Optional<T> = {
  [P in keyof T]?: T[P];
};

// Conditional types
type NonNullable<T> = T extends null | undefined ? never : T;
```

### With Interfaces:

```typescript
// Extending built-in types
interface CustomArray extends Array<number> {
  customMethod(): void;
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

**My opinion**: Use interfaces by default for objects, types for everything else.

# 7. Example Using Union and Intersection Types in TypeScript

## Introduction

TypeScript's type system offers powerful ways to combine types through **unions** (`|`) and **intersections** (`&`).

## Union Types (`|`)

The "OR" operator for types. A union type represents values that can be **one of several types**.

### Basic Example

```typescript
type Status = "active" | "inactive" | "pending";

function setStatus(newStatus: Status) {
  console.log(`Status changed to ${newStatus}`);
}

setStatus("active"); // Valid
setStatus("archived"); // Error: Not in the union
```

## Intersection Types (`&`)

The "AND" operator for types. Combines multiple types into one.

### Basic Example

```typescript
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  id: number;
  startDate: Date;
};

type AdminEmployee = Admin & Employee;

const admin: AdminEmployee = {
  name: "Jane",
  privileges: ["delete-users"],
  id: 123,
  startDate: new Date(),
};
```

## Combining Both

```typescript
type Printable = { print: () => void };
type Scannable = { scan: () => void };
type Flexible = { fax: () => void };

type OfficeDevice = Printable & (Scannable | Flexible);

// Valid devices:
const printerScanner: OfficeDevice = {
  print: () => {},
  scan: () => {},
};

const printerFax: OfficeDevice = {
  print: () => {},
  fax: () => {},
};
```

## Advanced Patterns

### Type Guards with Unions

```typescript
function isString(value: string | number): value is string {
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

   ```typescript
   type A = { foo: number };
   type B = { foo: string };
   type C = A & B; // foo becomes 'never' (number & string)
   ```

2. **Empty Intersections**:

   ```typescript
   type D = string & number; // Type 'never'
   ```

3. **Excessive Unions**:

   ```typescript
   // Avoid this when possible:
   type TooBig = string | number | boolean | object | any[];
   ```

   **My Opinion**:

   - `|` = "Either/Or"
   - `&` = "Combination of both"
