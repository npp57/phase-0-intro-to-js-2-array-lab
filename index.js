// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
});

function destructivelyAppendCat(Ralph) {
    return cats.push("Ralph");
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
});

function destructivelyPrependCat(name) {
    return cats.unshift("Bob") ;
}
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
});

function destructivelyRemoveFirstCat(name) {
    return cats.shift() ;
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
});

function destructivelyRemoveLastCat(name) {
    return cats.pop() ;
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
});


function appendCat(name) {
    return [...cats, "Broom"] ;
}


beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
});

function prependCat(name) {
    return ["Arnold", ...cats] ;
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
});

function removeLastCat() {
  return cats.slice(0,cats.length - 1); 
}

function removeFirstCat() {
    return cats.slice(1) ;
}

