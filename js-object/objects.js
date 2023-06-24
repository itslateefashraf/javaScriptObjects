let person = {
    name:'farhan',
    rollno:20,
    class:'10th',
    section:'c',
    address:{
        address1:'sopore',
        pin:193201,
        district:'baramulla'
    },
    Name : function (){
        console.log('hello welcome to j.s')
    }
}
person.Name()
console.log(person.name)

const cars = Object.create(person);
cars.doors = 5;
cars.wheels = 4;
cars.color = 'red';
cars.engine = function (){
    return 'santro car';
};

console.log(cars.engine());
console.log(cars.color);
// loop over object 
// it changes an object to arrays
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

for(let val in person){
    console.log(`my ${val} and this is my detail ${person[val]}`);

};

// destructuring object

let { rollno: myVariable} =person;
console.log(myVariable)
 

var { rollno,name, section} =person;
console.log(section)
console.log(name);
console.log(rollno)


function dance ({name}) {return `${name} can dance`};
console.log(dance(person));