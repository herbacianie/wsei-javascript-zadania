// zad 1
let links = document.getElementsByClassName('list');

console.log(links);

// zad 2

function tagElements(tag) {
    const elements = document.getElementsByTagName(tag);
    for (let i = 0; i<elements.length; i++) {
        console.log(elements[i]);
    }
}

tagElements('ul');

// zad 3

const listElement = document.querySelector('#list');

console.log(listElement);

