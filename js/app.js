//Materialize jQuery
$( document ).ready(function(){
  $(".dropdown-button").dropdown();
  $(".button-collapse").sideNav();
  
})

// Login - Currently Not Available 
document.querySelector('.login-na').addEventListener('click', loginClick);

function loginClick(){
  Materialize.toast('Login is currently not available', 4000)
}
 
// Floating Add - Currently Not Available

document.querySelector('#add-form-launch').addEventListener('click', launchAddForm);

function launchAddForm(e){
  Materialize.toast('Adding custom procedures currently not available', 4000)
  
}
//End of Materialize jQuery

//List of Procedures - Eventually this will be stored in a database

function Procedure(title,procedureList,color1,color2,inputA,inputB,inputBState,resultsImperial,minImpertial, maxImperial, resultsMetric, minMetric, maxMetric){
  this.name = title;
  this.procedureList = procedureList;
  this.color1 = color1;
  this.color2 = color2;
  this.inputA = inputA;
  this.inputB = inputB;
  this.inputBState = inputBState;
  this.resultsImperial = resultsImperial;
  this.minImpertial = minImpertial;
  this.maxImperial = maxImperial;
  this.resultsMetric = resultsMetric;
  this.minImpertial = minMetric;
  this.maxMetric = maxMetric;
}

var enHypophosphite = new Procedure(
        /*title*/'Electroless Nickel - Hypophosphite Analysis', 
        /*procedure list*/ 
        ['Pipet a 5 ml sample of the solution into a 250ml glass stoppered iodine flask', 
        'step2', 
        'step3'
        ],
        /*color1*/ 'brown', 
        /*color 2*/'white',
        /*inputA*/"mL Sodium Thisulfate Solution", 
        /*inputB*/'inputb', 
        /*inputBState*/ null, 
        /*resultsImperial*/ 'calc 1 currently string', 
        /* min Imperial*/ 2.5,
        /* max Imperial*/ 3.3,
        /*resultsMetric*/ 'calc 2 currently stringt',
        /* min Metric*/ 19,
        /* max Metric*/ 25);

//console.log(enHypophosphite);


// Insert card to HTML

document.querySelector('.new-card-request').addEventListener('click', addNewCard);

function addNewCard(e){
const newCard = document.createElement('div');
newCard.className = 'card larger';
newCard.style = 'margin-top: 3em';
newCard.innerHTML = `<div>Insert Secondary Card Here</div>`;     
const mainSection = document.querySelector('.main-section');
mainSection.appendChild(newCard);       
}

//Remove card from HTML 

document.querySelector('.card').addEventListener('click', removeCard);

function removeCard(e){
if(e.target.parentElement.classList.contains('remove-card')){
  console.log('199sale');
  if(confirm('Current procedure will be deleted.')){
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  } 
}
}

//Titration Application Calculation


document.querySelector('.input-a').addEventListener('keyup', calculateResults);

function calculateResults(e){
 
  const valueA = parseFloat(document.querySelector('.input-a').value);
  //const valueB = document.getElementById('input-b');
  const answerImperial = document.querySelector('.answer-imperial');
  const answerMetric = document.querySelector('.answer-metric');

  if(Number.isNaN(valueA)){
 console.log('NaN');
  } else {
                console.log(valueA);
              answerImperial.value = (valueA * 0.09).toFixed(2);
              if(answerImperial.value < 0.7 || answerImperial.value > 0.8) {
                answerImperial.style.color = "red";
                console.log(`${answerImperial.value}g/L is OUT of range`);
              } else {
                answerImperial.style.color = "green";
                console.log(`${answerImperial.value}g/L is IN of range`);
              }

              answerMetric.value = (valueA * 0.675).toFixed(2);
              if(answerMetric.value < 5.25 || answerMetric.value > 6) {
                answerMetric.style.color = "red";
                console.log(`${answerMetric.value}g/L is OUT of range`);
              } else {
                answerMetric.style.color = "green";
                console.log(`${answerMetric.value}g/L is IN of range`);
              } 
  } 
}
document.querySelector('body').addEventListener('click', runTest)
function runTest(e){
console.log('start test');

console.log('end test');
}