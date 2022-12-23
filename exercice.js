
//Consignes :

//  1. Écrivez un programme JavaScript qui demande à l'utilisateur de saisir un nombre de noms.
const numberOfNames = prompt ("Combien de noms voulez vous")


//  1.1 Utilisez une boucle pour demander à l'utilisateur de saisir chaque nom. Les noms saisis doivent être stockés dans un tableau.
 
const names = []

    for (let i = 0; i  < numberOfNames; i++) {
        names.push(prompt('Saisissez un nouveau nom'))
    }
    
 let message = `Vous avez saisi ${names.length} noms: `;
// 2  Concaténez plusieurs chaînes de caractères pour construire un message de confirmation contenant le nombre de noms saisis et la liste de ces noms. Si le nombre de noms est supérieur à 3, ajoutez une info supplémentaire au message (par exemple : "C'est beaucoup de noms !").

if (names > 3) {
    message += " C'est beaucoup de noms!";
  }
  
// 3  Affichez le message de confirmation dans la console.
console.log(message)
// 4 Écrivez une fonction qui prend en paramètre un tableau de noms et qui affiche chacun de ces noms dans la console.
//fonction=> paramètres => namesTables => boucles pour afficher chaques noms 
function showNames(namesTables){
     
     for (let i = 0; i < namesTables.length; i++){
        message+= namesTables[i]+" "
     }

return(message)}
console.log(showNames(names))
// 5 Appelez la fonction avec le tableau de noms en argument.
