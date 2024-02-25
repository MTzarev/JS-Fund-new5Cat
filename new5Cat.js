function new5Cat (input){
class Cat{
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    meow(){
        console.log (`${this.name}, age ${this.age} says Meow`)
    }
}
cats = []
for (let i=0; i<input.length;i++){
    let catInfo = input[i].split(` `);
    cats.push(catInfo [0], catInfo[1])
    let cat = new Cat(catInfo [0], catInfo[1]);
cat.meow()
}



}
new5Cat(['Mellow 2','Tom 5']);
//new5Cat();