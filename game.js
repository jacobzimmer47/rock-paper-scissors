class Game {
    constructor() {
        this.fighters = [0, 1, 2, 3, 4]
        this.cpuPick = null;
        this.humanPick = null;
        this.humanWinCount = 0
        this.cpuWinCount = 0
    }
    playerSelection(fighter) {
        this.humanPick = fighter
    }

    getCpuFighter () {
        var index = Math.floor(Math.random() * this.fighters.length);
        this.cpuPick = index 
    }

    declareWinner() {
        if (this.cpuPick === this.humanPick) {
            console.log('tie')
        }
        else if (this.cpuPick === 0 && this.humanPick === 1) {
            this.humanWinCount += 1 
        }
        else if (this.cpuPick === 0 && this.humanPick === 2) {
            this.cpuWinCount += 1
        }
        else if (this.cpuPick === 0 && this.humanPick === 3) {
           this.cpuWinCount += 1
        }
        else if (this.cpuPick === 0 && this.humanPick === 4) {
            this.humanWinCount += 1
        }
        else if (this.cpuPick === 3 && this.humanPick === 1) {
            this.humanWinCount += 1
        }
        else if (this.cpuPick === 3 && this.humanPick === 4) {
            this.cpuWinCount += 1
        }
        else if (this.cpuPick === 3 && this.humanPick === 2) {
            this.cpuWinCount += 1
        }
        else if (this.cpuPick === 3 && this.humanPick === 0) {
            this.cpuWinCount += 1
        }
        else if (this.cpuPick === 2 && this.humanPick === 4) {
            this.cpuWinCount += 1
        }
        else if (this.cpuPick === 2 && this.humanPick === 0) {
            this.cpuWinCount += 1
        }
        else if (this.cpuPick === 2 && this.humanPick === 1) {
            this.cpuWinCount += 1
        }
        else if (this.cpuPick === 2 && this.humanPick === 3) {
            this.humanWinCount += 1
        }
        else if (this.cpuPick === 4 && this.humanPick === 0) {
            this.cpuWinCount += 1
        }
        else if (this.cpuPick === 4 && this.humanPick === 3) {
            this.humanWinCountm += 1
        }
        else if (this.cpuPick === 4 && this.humanPick === 1) {
            this.cpuWinCount += 1
        }
        else if (this.cpuPick === 4 && this.humanPick === 2) {
            this.humanWinCount += 1
        }
        else if (this.cpuPick === 1 && this.humanPick === 0) {
            this.cpuWinCount += 1
        }
        else if (this.cpuPick === 1 && this.humanPick === 2) {
            this.humanWinCount += 1
        }
        else if (this.cpuPick === 1 && this.humanPick === 4) {
            this.humanWinCount += 1
        }
        else if (this.cpuPick === 1 && this.humanPick === 3) {
            this.cpuWinCount += 1
        }
    }
    playAgain() {
        this.humanWinCount = 0
        this.cpuWinCount = 0
    }

}
// add tie functionallity for dom
// in game class reset game method
// 