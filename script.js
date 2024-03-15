//OPERAZIONI DA FARE AD AVVIO PAGINA
//Recupero gli elementi che servono 

const button = document.querySelector('button');
const inputField = document.querySelector('input');
const todoList = document.querySelector('.todo-list');
const emptyListMessage = document.querySelector('.empty-list-msg');

//Preparo una lista di attività
let activities = [];

// OPERAZIONI DINAMICHE (EVENTI)
//Reagisco al click sul bottone
button.addEventListener('click', function() {
    //Recuperare il testo all'interno dell input
    const newActivity = inputField.value;
    //aggiungere il valore alla lista dell'array
    activities.push(newActivity);
    //Utilizzo la funzione di mostrare il testo sulla pagina
    showContent();

    //Svuotare l'input una volta preso il valore
    inputField.value = '';
});

// FUNZIONI
// Funzione che decide cosa mostrare in pagina
function showContent() {
    //innanzi tutto pulisco tutto
    todoList.innerText = '';
    emptyListMessage.innerText = '';   

    if (activities.length > 0) {
        //Se c'è almeno un attività... MOSTRA attività
        //Per ciascuna attività 
        activities.forEach(function(activity){
           todoList.innerHTML += `
            <li class="todo-item">
                <div class="todo-check">
                    <img src="/images/check.svg" alt="Check icon">
                </div>
                <p>${activity}</p>
            </li>
            `;
        });

        //Per poter eliminare l'attività eseguita
        //cerco elemento check (dopo il blocco di codice che li crea! e non a inizio pagina - perchè non esiste ancora)
        const checks = document.querySelectorAll('.todo-check');

        //Per ognuno dei check 
        checks.forEach(function (check, index){
            //Aggiungi una reazione al click
            check.addEventListener('click', function(){
                //Rimuovre elemento dalla lista
                activities.splice(index, 1);
                //Aggiorna la lista
                showContent();
            }) 

        })

    } else {
        //ALTRIMENTI, mostra messaggio di lista vuota
        emptyListMessage.innerText = 'Sembra che non ci siano attività';

    }
}

//DISCHIARAZIONE FUNZIONI
showContent();


//ALTRE SOLUZIONI

//Creare una funzione apposita per la crezione del li
//Al posto di newActivity
// function addActivity(){}

//Funzione per rendere i check cliccabili
// function makeCheckClickable() {
//     const checks = document.querySelectorAll('.todo-check');

//     checks.forEach(function (check, index){
        
//         check.addEventListener('click', function(){
//             //Rimuovre elemento dalla lista
//             activities.splice(index, 1);
//             //Aggiorna la lista
//             showContent();
//         }) 
// }) 
// }
// makeCheckClickable()

