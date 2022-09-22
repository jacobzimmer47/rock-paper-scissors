class Game {
    constructor(cpuPick, humanPick) {
        this.cpuPick = cpuPick;
        this.humanPick = humanPick;
        this.humanWinCount = 0
        this.cpuWinCount = 0
    }
    playGame(cpuPick, humanPick) {
        if (cpuPick === humanPick) {
            return 'tie'
        }
        else if (cpuPick === '✄' && humanPick === '🪨') {
            this.humanWinCount ++ 
        }
        else if (cpuPick === '✄' && humanPick === '📑') {
            this.cpuWinCount ++
        }
        else if (cpuPick === '✄' && humanPick === '🦎') {
           this.cpuWinCount ++
        }
        else if (cpuPick === '✄' && humanPick === '🖖🏽') {
            this.humanWinCount ++
        }
        else if (cpuPick === '🦎' && humanPick === '🪨') {
            this.humanWinCount ++
        }
        else if (cpuPick === '🦎' && humanPick === '🖖🏽') {
            this.cpuWinCount ++
        }
        else if (cpuPick === '🦎' && humanPick === '📑') {
            this.cpuWinCount ++
        }
        else if (cpuPick === '🦎' && humanPick === '✄') {
            this.cpuWinCount ++
        }
        else if (cpuPick === '📑' && humanPick === '🖖🏽') {
            this.cpuWinCount ++
        }
        else if (cpuPick === '📑' && humanPick === '✄') {
            this.cpuWinCount ++
        }
        else if (cpuPick === '📑' && humanPick === '🪨') {
            this.cpuWinCount ++
        }
        else if (cpuPick === '📑' && humanPick === '🦎') {
            this.humanWinCount ++
        }
        else if (cpuPick === '🖖🏽' && humanPick === '✄') {
            this.cpuWinCount ++
        }
        else if (cpuPick === '🖖🏽' && humanPick === '🦎') {
            this.humanWinCountm ++
        }
        else if (cpuPick === '🖖🏽' && humanPick === '🪨') {
            this.cpuWinCount ++
        }
        else if (cpuPick === '🖖🏽' && humanPick === '📑') {
            this.humanWinCount ++
        }
        else if (cpuPick === '🪨' && humanPick === '✄') {
            this.cpuWinCount ++
        }
        else if (cpuPick === '🪨' && humanPick === '📑') {
            this.humanWinCount ++
        }
        else if (cpuPick === '🪨' && humanPick === '🖖🏽') {
            this.humanWinCount ++
        }
        else if (cpuPick === '🪨' && humanPick === '🦎') {
            this.cpuWinCount ++
        }
    }
}