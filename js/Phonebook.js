// ce fichier définit la classe Phonebook pour gérer une liste de contact

// importation de classe Contact
import Contact from "./contact.js";

export default class Phonebook {
    constructor() {
        this.contacts = [];
    }

    // méthode pour ajouter un contact a la liste
    AddContact(name, number) {
        const contact = new Contact(name, number)
        this.contacts.push(contact)
    }

    // méthode pour affcicher tous les contacts dans la console
    printAllContacts() {
        this.contacts.forEach(contact => contact.print())
    }
}