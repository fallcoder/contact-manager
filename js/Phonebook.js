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

    // méthode pour supprimer un contact de la liste par nom et/ou numéro
    removeContact({name, number}) {
        this.contacts = this.contacts.filter(contact => {
            let match = true;

            if(name) {
                match = match && contact.name !== name;
            }
            if(number) {
                match = match && contact.number !== number;
            }

            return match;
        })
    }

    // méthode pour modifier un contact existant
    updateContact({oldName, oldNumber}, {newName, newNumber}) {
        // trouver le contact a modifier
        const contact = this.contacts.find(contact => 
            (oldName && contact.name === oldName) ||
            (oldNumber && contact.number === oldNumber)
        );

        if(contact) {
            // mettre a jour les informations du contact
            if(newName) {
                contact.name = newName;
            }
            if(newNumber) {
                contact.number = newNumber;
            } 
        }
        else {
            console.log("contact not found");
        }
    }

    // méthode pour afficher tous les contacts dans la console
    printAllContacts() {
        this.contacts.forEach(contact => contact.print())
    }
}