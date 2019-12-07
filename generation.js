GENERATION_ID = 0

class Generation {
    constructor(playerCount) {
        this.id = ++GENERATION_ID
        this.players = []
        this.alivePlayers = 0;
        this.generatePlayers(playerCount);
        this.inPlay1 = false
        this.inPlay2 = false
        document.title = 'Generation :: ' + this.id
    }

    getNextGeneration = (parentGeneration) => {
        //sort the players with score
        // console.log(parentGeneration)
        let players = parentGeneration.players.sort((a, b) => {
            return a.score > b.score ? -1 : 1
        })
        // console.log(players.map(e=>e.score))
        //delete and regenerate bottom 10% with new ones

        //preserve the upper 10% 

        //breed bottom 10-50% players with upper 10-50% with some mutations

        //breed  uppor 20-50 % with 

        //breed the rest with random gene mutations
    }

    generatePlayers = (count) => {
        for (let i = 0; i < count; i++) {
            this.players[i] = new Player();
            this.players[i].setNeuralNetwork(
                new NeuralNetwork({
                    layerArray: [40, 24, 18, 12, 1]
                })
            )
            this.players[i].max_score = 0;
        }
        this.alivePlayers = this.alivePlayers + count
    }


    play = () => {
        this.inplay1 = setInterval(() => {
            for (let i = 0; i < obstacles.length; i++) {
                let item = obstacles[i];
                for (let j = 0; j < this.players.length; j++) {
                    if (this.players[j] && !this.players[j].dead && Math.abs(item.cordinate[0] - this.players[j].cordinate[0]) < 5) {
                        if (item.height > this.players[j].cordinate[1]) {
                            this.players[j].max_score = this.players[j].score
                            // clearInterval(a)
                            this.players[j].clearDOM()
                            this.players[j].high_score = this.players[j].score;
                            this.players[j].dead = true
                            console.log(j, 'Dead')
                            // delete this.players[j]
                            this.alivePlayers--;
                        };

                    }
                }
            }
        }, 10)

        this.inplay1 = setInterval(() => {
            if (this.alivePlayers == 0) {
                console.log('ALL DEAD!!!!!!!!!!')
                this.score = Math.max(...(this.players.map(item=>item.score)))
                console.log(this.score)
                clearInterval(this.inplay1)
                clearInterval(this.inplay2)
                this.getNextGeneration(this)
            }
            for (let i = 0; i < this.players.length; i++) {
                if (!this.players[i])
                    return
                let output = this.players[i].neuralNetwork.getOutput(arr)
                if (output[0] < 0.5) {
                    this.players[i].jump()
                } else {}
            }
        }, 1000)
    }


}