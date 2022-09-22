// var fighters = ['✄','🖖🏽','📑','🪨','🦎']

var scissorFighter = document.querySelector('.scissors-fighter')
var lizardFighter = document.querySelector('.lizard-fighter')
var rockFighter = document.querySelector('.rock-fighter')
var paperFighter = document.querySelector('.paper-fighter')
var spockFighter = document.querySelector('.spock-fighter')
var fighterDisplay = document.querySelector('.fight-section')

var fighters = [scissorFighter, lizardFighter, rockFighter, paperFighter, spockFighter]

scissorFighter.addEventListener('click', humanChoseScissor)
lizardFighter.addEventListener('click', humanChoseLizard)
rockFighter.addEventListener('click', humanChoseRock)
paperFighter.addEventListener('click', humanChosepaper)
spockFighter.addEventListener('click', humanChoseSpock)




function getCpuFighter(fighters) {
    var index = Math.floor(Math.random() * fighters.length);
    return fighters[index].innerText; 
  }

  function hide(element) {
    element.classList.add('hidden')
   }
   
   function show(element) {
   element.classList.remove('hidden')
   }

  function humanChoseScissor () {
    hide(lizardFighter)
    hide(rockFighter)
    hide(paperFighter)
    hide(spockFighter)
    
   }

   function humanChoseLizard () {
    hide(scissorFighter)
    hide(rockFighter)
    hide(paperFighter)
    hide(spockFighter)
   }

   function humanChoseRock() {
    hide(scissorFighter)
    hide(lizardFighter)
    hide(paperFighter)
    hide(spockFighter)
   }

   function humanChosepaper () {
    hide(scissorFighter)
    hide(lizardFighter)
    hide(rockFighter)
    hide(spockFighter)
   }

   function humanChoseSpock () {
    hide(scissorFighter)
    hide(lizardFighter)
    hide(paperFighter)
    hide(rockFighter)
   }