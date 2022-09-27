class Player {
    constructor(name, icon) {
      this.name = name;
      this.token = icon;
      this.win = 0;
      this.currentChoice = "";
  
    }
  
    getCpuChoice() {
      if (game.type === "classic") {
          game.computer.currentChoice = classic[this.generatePick(classic)]
      } else {
          game.computer.currentChoice = difficult[this.generatePick(difficult)]
      }
    }
  
    generatePick(array) {
      return Math.floor(Math.random() * array.length)
    }
    }

  