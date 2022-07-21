console.log("connected");

// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
const parentProto = {
  initialise(fName, lName, yBirth) {
    this.fName = fName;
    this.lName = lName;
    this.yBirth = yBirth;
  },
  calculateAge() {
    console.log(
      `My self ${this.fName} ${this.lName} and my age is ${2022 - this.yBirth}`
    );
  },
};

const child = Object.create(parentProto);
child.initialise("Sachin", "Tewatia", 2002);

child.calculateAge();

// Write code to explain prototype chaining

const childProto = Object.create(parentProto);


