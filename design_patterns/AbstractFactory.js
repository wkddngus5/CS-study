// Abstract Factory has abstracted out a theme
// which is shared by the newly created objects.

function Employee(name) {
	this.name = name;
	this.say = () => {
		log.add(`I am employee ${name}`)
	}
}

function EmployeeFactory() {
	this.create = (name) => {
		return new Employee(name)
	}
}

function Vendor(name) {
	this.name = name;
	this.say = () => {
		log.add(`I am vendor ${name}`)
	}
}

function VendorFactory(name) {
	this.create = (name) => {
		return new Vendor(name);
	}
}

const log = (function() {
	let log = '';
	return {
		add: (msg) => { log += msg + '\n' },
		show: () => {
			console.log(log);
			log = '';
		}
	}
})()

function run() {
	var persons = [];
    var employeeFactory = new EmployeeFactory();
    var vendorFactory = new VendorFactory();
 
    persons.push(employeeFactory.create("Joan DiSilva"));
    persons.push(employeeFactory.create("Tim O'Neill"));
    persons.push(vendorFactory.create("Gerald Watson"));
    persons.push(vendorFactory.create("Nicole McNight"));
 
    for (var i = 0, len = persons.length; i < len; i++) {
        persons[i].say();
    }
 
    log.show();
}

run();

