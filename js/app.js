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
 
// Floating Add - #add-form-launch hidden in HTML

// document.querySelector('#add-form-launch').addEventListener('click', launchAddForm);

// function launchAddForm(e){
//   Materialize.toast('Adding custom procedures currently not available', 4000)
  
// }
//End of Materialize jQuery

//List of Procedures - Eventually this will be stored in a database

let count = 1;

class Procedure { 
    constructor(id, title ,procedureList,color1,color2,inputA,inputB,inputBState,factorImperial, textImperial1, textImperial2, minImpertial, maxImperial, factorMetric, textMetric1, textMetric2, minMetric, maxMetric){
        this.id = id;
        this.name = title;
        this.procedureList = procedureList;
        this.color1 = color1;
        this.color2 = color2;
        this.inputA = inputA;
        this.inputB = inputB;
        this.inputBState = inputBState;
        this.factorImperial = factorImperial;
        this.textImperial1 = textImperial1;
        this.textImperial2 = textImperial2;
        this.minImpertial = minImpertial;
        this.maxImperial = maxImperial;
        this.factorMetric = factorMetric;
        this.textMetric1 = textMetric1;
        this.textMetric2 = textMetric2;
        this.minMetric = minMetric;
        this.maxMetric = maxMetric;
      }
     
    newProcedureCard(){

          const newCard = document.createElement('div');
          newCard.className = 'card larger main-card';
          newCard.id = `${this.id}-card`;
          newCard.style = 'margin-top: 3em';
          newCard.innerHTML = `<div class="card-content">
          <div class="row">
              <div class="col s10">  
              <span class="card-title">${this.name}</span>
              </div>
              <div class="col s2 right-align">
                <a class="btn-floating waves-effect waves-light red remove-card"><i class="material-icons">close</i></a>
              </div>  
          </div>    
            <ol class="collection ${this.id}-${count}">
            </ol> 
            <div class="card-content titration-color" style="background: linear-gradient(to right, ${this.color1}, ${this.color2})">
                        </div>
            <div class="card-content">
            <form class="calc-form">
              <!--INPUT 1 ENTER A-->
              <div class="row">
                  <div class="input-field col s12 m 6 l6 input-ab">
                      <i class="prefix">A</i>
                      <input class="input-a" type="number">
                      <label for="icon_prefix">${this.inputA}</label>
                    </div>
                <!--INPUT 2 ENTER B-->
                  <div class="input-field col s12 m6 l6 input-ab">
                        <i class="prefix">B</i>
                        <input class="input-b" type="number" disabled>
                        <label for="icon_prefix">${this.inputB}</label>
                  </div>
              </div>
                <!--INPUT 2 ANSWER IMPERIAL-->
                      <div class="row answer-imperial-row">
                          <div class="col s12">${this.textImperial1}<div class="input-field inline"><input type="number" class="answer-imperial center-align" style="width: 4em" disabled></div>${this.textImperial2}.  Min: <div class="input-field inline"><input type="number" placeholder="${this.minImpertial}" class="min-imperial center-align" style="width: 4em"disabled></div> Max: <div class="input-field inline">
                              <input type="number" placeholder="${this.maxImperial}" class="max-imperial center-align" style="width: 4em" disabled></div></div>
                        
                      </div>
                <!--INPUT 2 ANSWER METRIC-->
                      <div class="row" class="answer-metric-row">
                          <div class="col s12">${this.textMetric1} 
                            <div class="input-field inline">
                              
                              <input type="number" class="center-align validate answer-metric" style="width: 4em" disabled>
                            </div>${this.textMetric2}.
                          Min: <div class="input-field inline"><input class="min-metric center-align" type="number" placeholder="${this.minMetric}"  style="width: 4em"disabled></div> Max: <div class="input-field inline">
                            <input class="max-metric center-align" type="number" placeholder="${this.maxMetric}" style="width: 4em" disabled></div></div></div>
                      </div>
                  
            </form>
            </div>  
            </div>`;     
          const mainSection = document.querySelector('.main-section');
          mainSection.appendChild(newCard);       
              }  
  
  addProcedureList() {
    let stepId = this.id;
    this.procedureList.forEach(function(tasks, index){
          let ol = document.querySelector(`ol.${stepId}-${count}`);
          const step = document.createElement('li'); 
          step.className = "collection-item";
          step.appendChild(document.createTextNode(tasks));
          const checkbox = document.createElement('span');
          checkbox.className = 'secondary-content';
          checkbox.innerHTML = `<form><p>
          <input type="checkbox" id="${stepId}${index}"/>
          <label for="${stepId}${index}"></label>`;
          step.appendChild(checkbox);
          ol.appendChild(step);     
          })}
          
    static addCount() {
      count += 1;
    }      
  // static performCalc(procedureCalcId, valueA) {
  //   console.log(procedureCalcId, valueA);
    
//   }        
 
}


//Global Variable - to be pulled from DB in the future
const enHypophosphite = new Procedure(
  /*ID*/'enHypophosphite',
  /*title*/'Electroless Nickel - Hypophosphite Analysis', 
  /*procedure list*/ 
  ['Pipet a 5 ml sample of the solution into a 250ml glass stoppered iodine flask', 
  'Add 25 mL of 6N HCL, using it to rinse down the neck of the flask.', 
  'Pipet 50 mL of the 0.10N KIO3 solution into the flask. Add one gram of KI crystals.',
  'Rinse down the neck of the flask with 3 to 5 mL of 6N HCl',
  'Stopper the flask and set in the dark for EXACTLY 30 min',
  'Rinse stopper and neck of flask with a small amount of deionized water',
  'Titrate immediately with 0.1N Sodium Thiosulfate Soln. from Brown to Colorless'
  ],
  /*color1*/ '#604020', 
  /*color 2*/'white',
  /*inputA*/"mL Sodium Thisulfate Solution", 
  /*inputB*/'Not Required', 
  /*inputBState*/ null, 
  /*factorImperial*/ 1.41, 
  /*textImperial1*/ '1.41 x [(mL KIO3 x Normality KIO3) - (A x Normality Sodium Thiosulfate)] =',
  /*textImperial2*/ 'oz/gal of Sodium Hypophoshite',
  /* min Imperial*/ 2.5,
  /* max Imperial*/ 3.3,
  /*factorMetric*/ 10.6,
  /*textMetric1*/ '10.60 x [(mL KIO3 x Normality KIO3) - (A x Normality Sodium Thiosulfate)] =',
  /*textMetric2*/ 'g/L of Sodium Hypophosphite',
  /* min Metric*/ 19,
  /* max Metric*/ 25);  

  const enNickel = new Procedure(
    /*ID*/'enNickel',
    /*title*/'Electroless Nickel - Metal Analysis', 
    /*procedure list*/ 
    ['Pippet 5ml operating solution into 250ml Erlenmeyer',
    'Add 10mL Ammonium Hydroxide (AG Grade)',
    'Add a pinch Murexide to pale straw color',
    'Titrate with 0575M EDTA to blue-purple endpoint',
    'Record mL 0.0575M EDTA titrated as "A"'
    ],
    /*color1*/ 'orange', 
    /*color 2*/'#2A00BB',
    /*inputA*/"mL 0.0575M EDTA titrated", 
    /*inputB*/'Not Required', 
    /*inputBState*/ null, 
    /*factorImperial*/ 0.09,
    /*textImperial1*/ 'A x 0.09 =',
    /*textImperial2*/ 'oz/gal of Nickel Metal',
    /* min Imperial*/ 0.7,
    /* max Imperial*/ 0.8,
    /*factorMetric*/ 0.675,
    /*textMetric1*/ 'A x 0.675 =',
    /*textMetric2*/ 'g/L of Nickel Metal',
    /* min Metric*/ 5.25,
    /* max Metric*/ 6);  

// Insert card to HTML
document.body.addEventListener('click', addNewCard);

function addNewCard(e){
  if(e.target.parentElement.classList.contains('enHypophosphite')){
    enHypophosphite.newProcedureCard();
    enHypophosphite.addProcedureList();
    Procedure.addCount(); 
  }
  if(e.target.parentElement.classList.contains('enNickel')){
      enNickel.newProcedureCard();
      enNickel.addProcedureList();
      Procedure.addCount(); 
    }
}

//Remove card from HTML 

document.body.addEventListener('click', removeCard);

function removeCard(e){
if(e.target.parentElement.classList.contains('remove-card')){
  
  if(confirm('Current procedure will be deleted.')){
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  } 
}
}

//Titration Application Calculation

document.body.addEventListener('keyup', calculateResults);

function calculateResults(e){

      if(e.target.classList.contains('input-a')){
    
      const valueA = parseFloat(e.target.value);
      const answerImperial = e.target.parentElement.parentElement.parentElement.children[1].children[0].children[0].children[0];
      const minImpertial   = e.target.parentElement.parentElement.parentElement.children[1].children[0].children[1].children[0].placeholder;
      const maxImperial    = e.target.parentElement.parentElement.parentElement.children[1].children[0].children[2].children[0].placeholder;
      const answerMetric   = e.target.parentElement.parentElement.parentElement.children[2].children[0].children[0].children[0];
      const minMetric      = e.target.parentElement.parentElement.parentElement.children[2].children[0].children[1].children[0].placeholder;
      const maxMetric      = e.target.parentElement.parentElement.parentElement.children[2].children[0].children[2].children[0].placeholder;
      
          if(Number.isNaN(valueA)){
          answerImperial.value = '';
          answerMetric.value = ''; 
          } else {    //Calculation Imperial 

                      eventId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id.slice(0, -5);
                      switch(eventId){
                        case enNickel.id:
                        answerImperial.value = (valueA * enNickel.factorImperial).toFixed(2);  
                        answerMetric.value = (valueA * enNickel.factorMetric).toFixed(2);
                        break;
                        case enHypophosphite.id:
                        answerImperial.value = ((5 - (valueA * 0.1)) * enHypophosphite.factorImperial).toFixed(2); 
                        answerMetric.value = ((5 - (valueA * 0.1)) * enHypophosphite.factorMetric).toFixed(2);
                        break;
                      }
                      
                      //Validation
                      if(answerImperial.value < minImpertial || answerImperial.value > maxImperial) {
                        answerImperial.style.color = "red";
                      } else {
                        answerImperial.style.color = "green";
                      }
                      if(answerMetric.value < minMetric || answerMetric.value > maxMetric) {
                        answerMetric.style.color = "red";
                      } else {
                        answerMetric.style.color = "green";
                      } 
          } 
    }
}