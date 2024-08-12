// ce fichier est le point d'entrée principale de cette application

import Phonebook from "./Phonebook.js";

// création d'une instance de Phonebook
const phonebook = new Phonebook();

// séléctionner les éléments du DOM
const addContactForm = document.getElementById('addContactForm');
const nameInput = document.getElementById('name');
const numberInput = document.getElementById('number');
const contactList = document.getElementById('contactList');
const searchInput = document.getElementById('searchInput'); 
const searchButton = document.getElementById('searchButton');
const submitButton = addContactForm.querySelector('button');

let editingContact = null;

// function pour afficher les contacts
function displayContacts() {
    contactList.innerHTML = '';
    phonebook.contacts.forEach(contact => {
        const li = document.createElement('li');
        li.textContent = `${contact.name}: ${contact.number}`;

        // création du conteneur pour les boutons d'action
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';

        // créer le bouton Delete
        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.id = 'delete';
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => {
            phonebook.removeContact({name: contact.name});
            displayContacts();
        };

        // créer le bouton Edit
        const editBtn = document.createElement('button');
        editBtn.type = 'button';
        editBtn.id = 'edit';
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => {
            nameInput.value = contact.name;
            numberInput.value = contact.number;
            submitButton.textContent = 'update contact';
            editingContact = {name: contact.name, number: contact.number};   
        };
        buttonContainer.appendChild(editBtn);
        buttonContainer.appendChild(deleteBtn);
        li.appendChild(buttonContainer);
        contactList.appendChild(li);
        
    })
}

// gérer l'ajout ou la modification d'un contact
addContactForm.onsubmit = (e) => {
    e.preventDefault()
    const name = nameInput.value;
    const number = parseInt(numberInput.value)

    if(submitButton.textContent === 'add contact') {
        phonebook.AddContact(name, number)
    }
    else if(submitButton.textContent === 'update contact') {
        phonebook.updateContact(
            {oldName: editingContact.name, oldNumber: editingContact.number},
            {newName: name, newNumber: number}
        );
        // réinitialisation après la mise à jour
        submitButton.textContent = 'add contact';
        editingContact = null;
    }
    displayContacts();

    // reinitialiser le formulaire
    nameInput.value = '';
    numberInput.value = '';
};

// gérer la recherche de contacts
searchButton.onclick = () => {
    const searchValue = searchInput.value.trim();
    let contact;

    if(isNaN(searchValue)) {
        // si l'entrée n'est pas un numéro, rechercher par nom
        contact = phonebook.findContactByName(searchValue) 
    }
    else {
        // si l'entrée est un numéro, rechercher par numéro
        contact = phonebook.findContactByNumber(parseInt(searchValue))
    }

    if(contact) {
        alert(`contact found: ${contact.name} - ${contact.number}`)
    }
    else {
        alert('contact not found')
    }
}

displayContacts();






