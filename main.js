class Elec {
    constructor(name, power){
      this.name = name;
      this.power = power;
      this.isPlugged = false;
    }

    On() {
      console.log(this.name + " is on!");
      this.isPlugged = true;
    }
    
    Off() {
      console.log(this.name + " is off!");
      this.isPlugged = false;
    }
  }
  
  class Lamp extends Elec {
    constructor (name, brand, power, bulbType) {
      super(name, power);
      this.brand = brand;
      this.bulbType = bulbType;
      this.isPlugged = true;
    }
  }
  
  class PC extends Elec {
    constructor(name, brand, power, type, functionality) {
      super(name, power); 
      this.brand = brand;
      this.type = type;
      this.functionality = functionality;
      this.isPlugged = false;
    }
  }
  
  var MyLamp = new Lamp("Lamp", "Brand1", 5, "LED");
  
  var MyPC = new PC("PC", "Intel", 160, "Gaming", "For games");
  
  MyLamp.Off();
  MyPC.On();
  
  console.log(MyPC)
  console.log(MyLamp)