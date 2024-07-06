// ce fichier définit la classe Phonebook pour gérer une liste de contact

// importation de classe Contact
import Contact from "./contact.js";

export default class Phonebook {
    constructor() {
        this.contacts = [];
    }

    // méthode pour ajouter un contact a la liste
    AddContact(name, number) {
        // vérification des types d'arguments
        if(typeof name !== 'string' || typeof number !== 'number') {
            throw new Error("Invalid arguments: name must be a string and must be a number");
        }

        const contact = new Contact(name, number)
        this.contacts.push(contact)
    }

    // méthode pour rechercher un contact par son nom
    findContactByName(name) {
        return this.contacts.find(contact => contact.name === name)
    }

    // méthode pour rechercher un contact par son numéro
    findContactByNumber(number) {
        return this.contacts.find(contact => contact.number === number)
    }

    // méthode pour afficher tous les contacts dans la console
    printAllContacts() {
        this.contacts.forEach(contact => contact.print())
    }
}