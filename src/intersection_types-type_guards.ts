type Admin = {
  name: string;
  privs: string[];
};

type Employee2 = {
  name: string;
  startDate: Date;
};

//in the case of an object the resulting object is a combination of the objects
type ElevatedEmployee = Admin & Employee2;

const e1: ElevatedEmployee = {
  name: "Michael",
  privs: ["create", "delete"],
  startDate: new Date(),
};

type Combinable2 = string | number;
type Numeric = number | boolean | string;

//in the case of a union type the resulting object is type(s) they have in common
type Universal = Combinable2 & Numeric;

console.log("privs" in e1);

class Car {
  drive() {
    console.log("Driving...");
  }
}
class Truck {
  drive() {
    console.log("Driving a truck...");
  }
  loadCargo(amount: number) {
    console.log(`Loading ${amount} amount of cargo.`);
  }
}

type Vehicle1 = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle1) {
  vehicle.drive();
  // if('loadCargo' in vehicle){
  //     vehicle.loadCargo(1000);
  // }
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

