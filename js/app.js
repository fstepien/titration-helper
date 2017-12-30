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
newCard.innerHTML = `<div class="card-content">
<div class="row">
    <div class="col s10">  
    <span class="card-title">Electroless Nickel - Nickel Metal Analysis</span>
    </div>
    <div class="col s2 right-align">
      <a class="btn-floating waves-effect waves-light red remove-card"><i class="material-icons">close</i></a>
    </div>  
</div>    

  <ol class="collection" id="procedure-list">
    <li class="collection-item">Pippet 5ml operating solution into 250ml Erlenmeyer 
      <span class="secondary-content">
        <form><p>
        <input type="checkbox" id="checkbox1"/>
        <label for="checkbox1"></label>
        </form></span>
    </li>
    <li class="collection-item">Add 10mL Ammonium Hydroxide (AG Grade)
        <span class="secondary-content">
            <form><p>
            <input type="checkbox" id="checkbox2"/>
            <label for="checkbox2"></label>
            </form></span>
    </li>
    <li class="collection-item">Add a pinch Murexide to pale straw color
        <span class="secondary-content">
            <form><p>
            <input type="checkbox" id="checkbox3"/>
            <label for="checkbox3"></label>
            </form></span>
    </li>
    <li class="collection-item">Titrate with 0575M EDTA to blue-purple endpoint
        <span class="secondary-content">
            <form><p>
            <input type="checkbox" id="checkbox4"/>
            <label for="checkbox4"></label>
            </form></span>
    </li>
    <li class="collection-item">Record mL 0.0575M EDTA titrated as "A"
        <span class="secondary-content">
            <form><p>
            <input type="checkbox" id="checkbox5"/>
            <label for="checkbox5"></label>
            </form></span>
    </li>
  </ol> 

  <div class="card-content titration-color" style="background: linear-gradient(to right, orange, #2A00BB)">
  </div>

  <div class="card-content">
  <form class="calc-form">
    <!--INPUT 1 ENTER A-->
    <div class="row">
        <div class="input-field col s12 m 6 l6 input-ab">
            <i class="prefix">A</i>
            <input class="input-a" type="number">
            <label for="icon_prefix">mL 0.0575M EDTA titrated</label>
          </div>
       <!--INPUT 2 ENTER B-->
        <div class="input-field col s12 m6 l6 input-ab">
              <i class="prefix">B</i>
              <input class="input-b" type="number" disabled>
              <label for="icon_prefix"></label>
        </div>
     </div>
      <!--INPUT 2 ANSWER IMPERIAL-->
            <div class="row answer-imperial-row">
                <div class="col s12"> A x 0.09 = <div class="input-field inline"><input type="number" class="answer-imperial center-align" style="width: 4em" disabled></div>oz/gal of Nickel Metal.  Min: <div class="input-field inline"><input type="number" placeholder="0.7" class="min-imperial center-align" style="width: 4em"disabled></div> Max: <div class="input-field inline">
                    <input type="number" placeholder="0.8" class="max-imperial center-align" style="width: 4em" disabled></div></div>
              
            </div>
      <!--INPUT 2 ANSWER METRIC-->
            <div class="row" class="answer-metric-row">
                <div class="col s12">A x 0.675 = 
                  <div class="input-field inline">
                    
                    <input type="number" class="center-align validate answer-metric" style="width: 4em" disabled>
                  </div>g/L of Nickel Metal.
                Min: <div class="input-field inline"><input class="min-metric center-align" type="number" placeholder="5.25"  style="width: 4em"disabled></div> Max: <div class="input-field inline">
                  <input class="max-metric center-align" type="number" placeholder="6" style="width: 4em" disabled></div></div></div>
            </div>
        
  </form>
  </div>  
  </div>`;     
const mainSection = document.querySelector('.main-section');
mainSection.appendChild(newCard);       
}

//Remove card from HTML 

document.body.addEventListener('click', removeCard);

function removeCard(e){
if(e.target.parentElement.classList.contains('remove-card')){
  console.log('199sale');
  if(confirm('Current procedure will be deleted.')){
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  } 
}
}

//Titration Application Calculation


document.body.addEventListener('keyup', calculateResults);

function calculateResults(e){

  if(e.target.classList.contains('input-a')){
// previously listened to querySelector('.input-a')
 
  const valueA = parseFloat(e.target.value);
  //const valueB = document.getElementById('input-b');

  //Previously const answerImperial = document.querySelector('.answer-imperial'); which does not work on JS entered forms
  const answerImperial = e.target.parentElement.parentElement.parentElement.children[1].children[0].children[0].children[0];
  //Previously const answerMetric = document.querySelector('.answer-metric'); which doesn't work on a JS imputed form
  const answerMetric = e.target.parentElement.parentElement.parentElement.children[2].children[0].children[0].children[0];

  //used to find the correct target.... will be updated once i find a better way...console.log(e.target.parentElement.parentElement.parentElement.children[2].children[0].children[0].children[0]);

  if(Number.isNaN(valueA)){
 console.log('NaN');
  } else {
                //console.log(valueA);
              answerImperial.value = (valueA * 0.09).toFixed(2);
              if(answerImperial.value < 0.7 || answerImperial.value > 0.8) {
                answerImperial.style.color = "red";
                //console.log(`${answerImperial.value}oz/gal is OUT of range`);
              } else {
                answerImperial.style.color = "green";
                //console.log(`${answerImperial.value}oz/gal is IN of range`);
              }

              answerMetric.value = (valueA * 0.675).toFixed(2);
              if(answerMetric.value < 5.25 || answerMetric.value > 6) {
                answerMetric.style.color = "red";
                //console.log(`${answerMetric.value}g/L is OUT of range`);
              } else {
                answerMetric.style.color = "green";
                //console.log(`${answerMetric.value}g/L is IN of range`);
              } 
  } 
}
}
// document.querySelector('body').addEventListener('click', runTest)
// function runTest(e){
// console.log('start test');

// console.log('end test');
// }