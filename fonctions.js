// correction 

// # Fonctions

// 1. Écrivez une fonction qui prend en argument un entier et renvoie `true` si l'entier est pair, `false` sinon. Vous pouvez utiliser l'opérateur modulo `%` pour vérifier si un nombre est divisible par deux.

function isPair(number) {
    if (number % 2 === 0) {
        return true;
    }
    return false;
}

console.log(isPair(4));

// 2. Écrivez une fonction qui prend en argument un tableau d'entiers et renvoie la somme de tous les éléments du tableau. Vous pouvez utiliser une boucle `for` pour parcourir le tableau et ajouter chaque élément à une variable qui tiendra la somme.

function sum(numbers) {
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        result+=numbers[i];    
    }

    return result;
}

console.log(sum([5, 6, 1, 2]))

// 3. Écrivez une fonction qui prend en argument une chaîne de caractères et renvoie la chaîne de caractères inversée. Par exemple, si la chaîne passée en argument est "bonjour", la fonction doit renvoyer "ruojnob". Vous pouvez utiliser la méthode `split()` pour séparer la chaîne en un tableau de caractères, la méthode `reverse()` pour inverser l'ordre des éléments du tableau, et la méthode `join()` pour reconstruire la chaîne de caractères à partir du tableau inversé.

function reverseString(string) {
    return Array.from(string).reverse().join("");
}

console.log(reverseString("Bonjour"))