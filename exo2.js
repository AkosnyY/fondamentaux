// 1 Écrivez un programme JavaScript qui demande à l'utilisateur de saisir un nombre entier compris entre 1 et 10. Si l'utilisateur saisit un nombre qui n'est pas compris dans cet intervalle, le programme doit afficher un message d'erreur et redemander à l'utilisateur de saisir un nombre jusqu'à ce qu'il saisisse un nombre valide.
 

    const num = prompt ("Choissi un nombre entier entre 1 à 10 ")

if (num >= 0 && num <= 10 && Number (num)){
    console.log(num)
    
    // 2 Utilisez une boucle for pour afficher la table de multiplication du nombre saisi. Par exemple, si l'utilisateur saisit 5, le programme doit afficher :
    
    
    for ( const i = 0 ; i <= 10; i++)
    { 
        console.log(num+ " x " + i + " = "+ (num * i ))
    }
    
    
    // 3 Écrivez une fonction qui prend en paramètre un entier et affiche sa table de multiplication de 1 à 10.Appelez la fonction avec le nombre saisi par l'utilisateur en argument.
    
    function multiplication(num ) {
        for ( const i = 0 ; i <= 10; i++)
        { 
            console.log(num+ " x " + i + " = "+ (num * i ))}
            
            
        }
    }
    else { 
        console.log("Vous devez saisir un nombre entier entier compris entre 1 à 10 ")
    }

    // correction 

    // 1. Écrivez un programme JavaScript qui demande à l'utilisateur de saisir un nombre entier compris entre 1 et 10. Si l'utilisateur saisit un nombre qui n'est pas compris dans cet intervalle, le programme doit afficher un message d'erreur et redemander à l'utilisateur de saisir un nombre jusqu'à ce qu'il saisisse un nombre valide.

// prompt -> number entre 1 et 10 compris.

let number = NaN;

do {
    number = parseInt(prompt('Veuillez renseigner un nombre.'));
} while (isNaN(Number(number)) || number < 1 || number > 10);

// 2. Utilisez une boucle for pour afficher la table de multiplication du nombre saisi. Par exemple, si l'utilisateur saisit 5, le programme doit afficher :

// ```
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50
// ```

for (let i = 1; i <= 10; i++) {
    // 5 x 10 = 50
    console.log(`${number} x ${i} = ${number * i}`)
}

// 3. Écrivez une fonction qui prend en paramètre un entier et affiche sa table de multiplication de 1 à 10.

function tableDeMultiplication(param) {
    console.log("Fonction tableDeMultiplication");
    for (let i = 1; i <= 10; i++) {
        // 5 x 10 = 50
        console.log(`${param} x ${i} = ${param * i}`)
    }
}

// 4. Appelez la fonction avec le nombre saisi par l'utilisateur en argument.
tableDeMultiplication(number);
