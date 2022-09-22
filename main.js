

var scissorFighter = document.querySelector('.scissors-fighter')
var lizardFighter = document.querySelector('.lizard-fighter')
var rockFighter = document.querySelector('.rock-fighter')
var paperFighter = document.querySelector('.paper-fighter')
var spockFighter = document.querySelector('.spock-fighter')
var fighterDisplay = document.querySelector('.fight-section')
var resetButton = document.getElementById('#reset-button')
var humanWins = document.querySelector('.human-win-count')
var cpuWins = document.querySelector('.cpu-win-count')

var game = new Game()


fighterDisplay.addEventListener('click', gameHandler)

  // function hide(element) {
  //   element.classList.add('hidden')
  //  }
   
  //  function show(element) {
  //  element.classList.remove('hidden')
  //  }

   function humanSelection(event) {
    game.playerSelection(parseInt(event.target.id))
   }

   function cpuSelection() {
    game.getCpuFighter()
   }

   function gameHandler() {
    humanSelection(event)
    cpuSelection()
    findWinner()
    //reset dom function w/ reset class method
    console.log('humanwins: ' + game.humanWinCount)
    console.log('cpuwin: ' + game.cpuWinCount)
    console.log('cpu: ' + game.cpuPick)
    console.log('human: ' + game.humanPick)
   }

   function findWinner() {
      game.declareWinner()
      humanWins.innerHTML = `<p>${game.humanWinCount}</p>`
      cpuWins.innerHTML = `<p>${game.cpuWinCount}</p>`
      if(game.humanWinCount > 0) {
        fighterDisplay.innerHTML = '<p>YOU WIN</p>'
      }
      else if (game.cpuWinCount > 0) {
        fighterDisplay.innerHTML = '<p>YOU LOST</p>'
      }
      else {
        fighterDisplay.innerHTML = '<p>TIE</p>'
      }
   }

  

 