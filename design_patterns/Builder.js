// The Builder pattern allows a client
// 	to construct a complex object bt specifiying the type and content only.

function Shop() {
	this.construct = (builder) => {
		builder.step1();
		builder.step2();
		return builder.get();
	}
}

function Car() {
	this.doors = 0;
	this.addParts = () => {
		this.doors = 4;
	}
	this.say = () => {
		log.add(`I am a ${ this.doors }-door car`);
	}
}

function CarBuilder() {
	this.car = null;
	this.step1 = () => {
		this.car = new Car();
	}
	this.step2 = () => {
		this.car.addParts();
	}
	this.get = () => {
		return this.car;
	}
}


function Truck() {
	this.doors = 0;
	this.addParts = () => {
		this.doors = 2;
	}
	this.say = () =>{
		log.add(`I am a ${ this.doors }-door truck`);
	}
}

function TruckBuilder() {
	this.truck = null;
	this.step1 = () => {
		this.truck = new Truck();
	}
	this.step2 = () => {
		this.truck.addParts();
	}
	this.get = () => {
		return this.truck;
	}
}

// log helper
const log = (() => {
    let log = "";
    return {
        add: (msg) => { log += msg + "\n"; },
        show: () => {
			console.log(log);
			log = "";
		}
    }
})();
 
function run() {
    var shop = new Shop();
    var carBuilder = new CarBuilder();
    var truckBuilder = new TruckBuilder();
    var car = shop.construct(carBuilder);
    var truck = shop.construct(truckBuilder);
 
    car.say();
    truck.say();
 
    log.show();
}

run()
