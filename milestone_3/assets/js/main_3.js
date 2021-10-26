/* Milestone 1
Partendo dalla seguente struttura dati, 
mostriamo in pagina tutte le icone disponibili come da layout. */


let icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];

icons.forEach((icon) => {
    let cardEl = `
    <div class="card mx-5 mt-4 mb-5 ${icon.type}">
        <div class="icon_container">
            <i class="${icon.family} ${icon.prefix}${icon.name} ${icon.type}"></i>
            <h6>${(icon.name).toUpperCase()}</h6>
        </div>
    </div>`
    document.querySelector('.cards_container').insertAdjacentHTML('beforeend', cardEl)
});

/* Milestone 2
Coloriamo le icone per tipo */


/* Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone */

let filter = document.getElementById("filter")
let vegetables = document.getElementsByClassName('vegetable')
let animal = document.getElementsByClassName('animal')
let user = document.getElementsByClassName('user')


filter.addEventListener('change', function () {
    if (filter.value == '2') {
        addClassInArray(vegetables, 'hidden')
        addClassInArray(user, 'hidden')

    } else if (filter.value == '3') {
        removeClassInArray(vegetables, 'hidden')
        addClassInArray(animal, 'hidden')
        addClassInArray(user, 'hidden')

    } else if (filter.value == '4') {
        removeClassInArray(user, 'hidden')
        addClassInArray(animal, 'hidden')
        addClassInArray(vegetables, 'hidden')

    } else {
        removeClassInArray(user, 'hidden')
        removeClassInArray(vegetables, 'hidden')
        removeClassInArray(animal, 'hidden')
    }
})

/**
 * add a class to elements inside an array
 * @param {array} array - array where we need to add a class for each element 
 * @param {string} classEl - name of the class to add
 */
function addClassInArray(array, classEl) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        element.classList.add(classEl)
    }
}

/**
 * remove a class to elements inside an array
 * @param {array} array - array where we need to remove a class for each element
 * @param {string} classEl - name of the class to remove
 */
function removeClassInArray(array, classEl) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        element.classList.remove(classEl)
    }
}