//////// FORM ///////////

let bottone = document.querySelector('.bottone');
let input = document.querySelectorAll('.val');
bottone.addEventListener('click', function(e) {
    e.preventDefault();
    let nome = document.querySelector('#nome').value;
    let cognome = document.querySelector('#cognome').value;
    let user = document.querySelector('#user').value;
    let email = document.querySelector('#email').value;
    
        input.forEach(elemento => {
            let inputValue = elemento.value;
            if (inputValue == ""){
                elemento.style.border = "1px solid red";
            }else{
                elemento.style.border = "";
            }
        });
    let password1 = document.querySelector('#psw1');
    let password2 = document.querySelector('#psw2');
    // console.log(password1.value)
    if(password1.value != password2.value){
        password1.style.border = "1px solid orange";
        password2.style.border = "1px solid orange";
    };
    if(nome != "" && cognome != "" && user != "" && email != "" && password1.value == password2.value){
        layer.style.display = 'block';
        const persona = new Utente(nome, cognome, user, password1.value, password2.value);
        salva(persona);
    };


});

let chiudi = document.querySelector('#chiudi');
chiudi.addEventListener('click', () => {
    layer.style.display = 'none';
    input.forEach(elemento1 => {
        elemento1.value = "";
    })
});

// classe utente
class Utente {
    constructor (nome, cognome, user, email, password1, password2){
        this.nome = nome;
        this.cognome = cognome;
        this.user = user;
        this.email = email;
        this.password1 = password1;
        this.password2 = password2;
    };
};

function salva(pippo){
    let list = localStorage.getItem('lista');
    let tern = list == null ? [] : JSON.parse(list);
    tern.push(pippo);
    let json = JSON.stringify(tern);
    localStorage.setItem('lista', json);

    
};







// NON CI SI PUò ISCRIVERE DUE VOLTE CON LA STESSA EMAIL!!!

//////// LOG-IN ///////////









// FORM
    // 1. required e annessi --> OK
        // 1.1 campi required --> OK 
        // 1.2 match password --> OK
        // 1.3 tutti i campi sono necessari --> OK

    // 2. al click localStorage --> OK
        // 2.1 al click crea un oggetto composto dai value degli input (OOP) --> OK
        // 2.2 creare array cestino --> OK
        // !!!! non creare utenti vuoti! !!!!!! --> OK
        // 2.3 pushare gli oggetti nell'array cestino --> OK
    
// extras: lettere e simboli ammessi negli input


// LOG-IN
    // 1. inserimento dati 
        // 1.1 i campi non devono essere lasciati vuoti
        // 1.2 crea un oggetto per ogni inserimento
        // 1.3 compara l'oggetto log-in con l'oggetto form
     