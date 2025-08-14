// explicit type annotation
let num: number = 1;
let st: string = "2";
let bool: boolean = true;
let u: undefined = undefined;
let n: null = null;

// array
let numArr: number[] = [1, 2, 3, 4, 5];

// object
// anonymous, inline
let person: { name: string; age: number } = {
  name: "alice",
  age: 18,
};

// union type
type Age = string | number;

// literal type
type Direction = "north" | "south" | "east" | "west";

// type alias
type Person = { name: string; age: Age; direction: Direction };
type AnimalName = string;

let person2: Person = {
  name: "bob",
  age: "12",
  direction: "east",
};

// interface
// most scenarios, does same thing as type alias
// difference: only define shape of object
interface IPerson {
  name: string;
  age: number;
}

enum Direction2 {
  North = 1,
  South = 2,
  East = 3,
  West = 4,
}
let direct: Direction2 = Direction2.East;
console.log(direct);

// inline
function add(x: number, y: number): number {
  return x + y;
}

// unknown - check data type first
// void - no return
function foo(data: unknown): void {
  if (typeof data === "number") data.toFixed(2);
  else if (typeof data === "function") {
    return data();
  }
}

type AddFn = (x: number, y: number) => number;
const add2: AddFn = (x, y) => x + y;

const add3: typeof add2 = (x, y) => x + y;

/**
 * type alias
 * for primitives
 * no declaration merging
 * extend (&)
 *
 * interface
 * for objects
 * declaration merging
 * extend (extends keyword)
 *
 */

interface IPerson {
  contact: string;
}

type Student = Person & {
  studentId: number;
};

interface IStudent extends IPerson {
  studentId: number;
  study: Function;
}

// generic type
function toNumberArray(x: number, y: number): number[] {
  return [x, y];
}
function toStringArray(x: string, y: string): string[] {
  return [x, y];
}

function toArray<T>(x: T, y: T): T[] {
  return [x, y];
}
toArray<number>(1, 2);

// tuple - array with defined length and type of elements
// define exact shape of array, including length and type
let arr: [number, string, boolean] = [1, "3", true];
arr[0].valueOf();
arr[1].charAt(0);
