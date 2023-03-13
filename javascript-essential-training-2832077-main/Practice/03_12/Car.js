/**
 * Create a Car class
 */
class Car {
  //define parameter
  constructor(brand, color, km, maxSpeed) {
    //define properties
    this.brand = brand;
    this.color = color;
    this.km = km;
    this.maxSpeed = maxSpeed;
  }
  //methods
  setBrand(brand) {
    this.brand = brand;
  }
  setColor(color) {
    this.color = color;
  }
  setKm(km) {
    this.km = km;
  }
  setMaxSpeed(maxSpeed) {
    this.maxSpeed = maxSpeed;
  }
}

export default Car;
