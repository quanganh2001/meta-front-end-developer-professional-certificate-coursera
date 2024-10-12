// Task 1: Person class
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }

  sleep() {
    this.energy += 10;
  }

  doSomethingFun() {
    this.energy -= 10;
  }
}

// Task 2: Worker class
class Worker extends Person {
  constructor(name, age, energy, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }

  goToWork() {
    this.xp += 10;
  }
}

// Task 3: Intern object
function intern() {
  const bob = new Worker("Bob", 21, 110, 0, 10);
  bob.goToWork();
  return bob;
}

// Task 4: Manager object
function manager() {
  const alice = new Worker("Alice", 30, 120, 100, 30);
  alice.doSomethingFun();
  return alice;
}