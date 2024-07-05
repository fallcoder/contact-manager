export default class Contact {
    constructor(name, number) {
        // gestion des entrées
        if(!name  || !number || isNaN(number)) {
            throw new Error("Invalid name or number");
        }
        this.name = name;
        this.number = number;
    }

    print() {
        console.log(this.name + ": " + this.number)
    }
}

