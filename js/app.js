//Materialize jQuery
$( document ).ready(function(){
  $(".dropdown-button").dropdown();
  $(".button-collapse").sideNav();
  
})

//Titration App


document.getElementById('input-a').addEventListener('keyup', calculateResults);

function calculateResults(e){

  const valueA = parseFloat(document.querySelector('#input-a').value);

//const valueB = document.getElementById('input-b');

  const answerImperial = document.getElementById('answer-imperial');
  const answerMetric = document.getElementById('answer-metric');

console.log(valueA);

answerImperial.value = (valueA * 0.09).toFixed(2);
answerMetric.value = (valueA * 0.675).toFixed(2);

}

// Login NA
document.querySelector('.login-na').addEventListener('click', loginClick);

function loginClick(){
  Materialize.toast('Login is currently not available', 4000)
}
 
// Floating Add

document.querySelector('#add-form-launch').addEventListener('click', launchAddForm);

function launchAddForm(e){
  Materialize.toast('Currently not available', 4000)
  
}


