const sum = (a : number, b : number) => {
  return a + b;
}

const answer = sum(6, 5);

console.log(answer)

// boolean
let isCool: boolean = true;

// number
let age: number = 56;

//string
let eyeColor: string = 'brown';

// Array
let pets: string[] = ['cat', 'dog', 'pig']

// Object
let wizard: object = {
  a: 'John'
}

// Tuple
let basket: [string, number];
basket = ['basketball', 5]

// Enum 
enum Size { Small = 1, Medium = 2, Large = 3 }
let sizeName: string = Size[2];

// Any - !!!!!!! Be Careful
let whatever: any = 'aaaaaaaaaaahhhhhhhhhhhhhh!!!!'
whatever = 5
whatever = Size

// void
let sing = (): void => {
  console.log('ffff')
}

// never
let error = (): never => {
  throw Error('ooops');
}

// interface
interface RobotArny {
  count: number,
  type: string,
  magic: string
}

let fightRobotArny = ( robots: RobotArny ) => {
  console.log('FIGHT!')
}