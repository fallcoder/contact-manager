// ce fichier est le point d'entrée principale de cette application

import Phonebook from "./Phonebook.js";

// création d'une instance de Phonebook
const phonebook = new Phonebook();

// ajout des contacts
phonebook.AddContact("Joe", 33239293);
phonebook.AddContact("Marcel", 18747831);
phonebook.AddContact("Marie", 379017364);

// affichage de tous les contacts
console.log("Tous les contacts");
phonebook.printAllContacts();