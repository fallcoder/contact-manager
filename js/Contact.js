class Contact {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }

    print() {
        console.log(this.name + ": " + this.number)
    }
}

const c1 = new Contact("Joe", 33239293);
const c2 = new Contact("Marcel", 18747831);

c1.print()
c2.print()