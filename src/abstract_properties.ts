//Abstract forces implementing certain methods in derived classes
abstract class Vehicle {
  abstract drive(x: number, y: number): void; //any derived classes will have to implement a drive method that accepts 2 numbers

  constructor(public wheels: number) {}

  get howManyWheels(){
      return this.wheels
  }
}
