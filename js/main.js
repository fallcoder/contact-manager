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

// function pour afficher les contacts
function displayContacts() {
    contactList.innerHTML = '';
    phonebook.contacts.forEach(contact => {
        const li = document.createElement('li');
        li.textContent = `${contact.name}: ${contact.number}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.id = 'delete';
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => {
            phonebook.removeContact({name: contact.name});
            displayContacts();
        };
        li.appendChild(deleteBtn);
        contactList.appendChild(li);
        
    })
}

// gérer l'ajout de contact
addContactForm.onsubmit = (e) => {
    e.preventDefault()
    const name = nameInput.value;
    const number = parseInt(numberInput.value)
    phonebook.AddContact(name, number);
    displayContacts();
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
        alert(`Found: ${contact.name} - ${contact.number}`)
    }
    else {
        alert('contact not found')
    }
}

displayContacts();






