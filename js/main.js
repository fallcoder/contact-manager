// ce fichier est le point d'entrée principale de cette application

import Phonebook from "./Phonebook.js";

// création d'une instance de Phonebook
const phonebook = new Phonebook();

// ajout des contacts
phonebook.AddContact("Joe", 33239293);
phonebook.AddContact("Marcel", 18747831);
phonebook.AddContact("Marie", 379017364);
phonebook.AddContact("Mama", 211331893);

// affichage de tous les contacts
console.log("All contacts");
phonebook.printAllContacts();

console.log("**************************")
console.log("Remove contact")

// supprime le contact nommé Marie
phonebook.removeContact({name: "Marie"})
phonebook.printAllContacts();
console.log("**************************")


console.log("Update contact")
console.log("**************************")

// modifier le contact nommé Mama
phonebook.updateContact({oldName: "Mama"}, {newName: "Mamaya"})
phonebook.printAllContacts();
console.log("**************************")


console.log("Search contact")
console.log("**************************")

// rechercher un contact par nom
const foundContactByName = phonebook.findContactByName("Joe");
if(foundContactByName) {
    console.log("contact found by name");
    foundContactByName.print()
}
else {
    console.log("contact not found by name");
}

// rechercher un contact par numéro
const foundContactByNumber = phonebook.findContactByNumber(379017364);
if(foundContactByNumber) {
    console.log("contact found by number");
    foundContactByNumber.print()
}
else {
    console.log("contact not found by number");
}




