PLAYER_ID = 0
JUMP_SPEED = 2
REFRESH_RATE = 10
UPDATE_FREQUENCY = 10

class Player {
    constructor() {
        this.color = getRandomColor()
        this.cordinate = [0, 0];
        this.speed = 10;
        this.moveCount = 0;
        this.isMoving = false;
        this.isJumping = false;
        this.DOM = document.createElement('div')
        this.id = ++PLAYER_ID
        this.DOM.id = this.id + '-player'
        this.DOM.className = "player"
        this.DOM.style.backgroundColor = this.color
        // console.log(this.color)
        document.getElementById("playground").appendChild(this.DOM)
        this.DOMReference = document.getElementById(this.DOM.id)
        // console.log(this.DOMReference)
        this.score = 0;
        setInterval(() => {
            this.score++;
            // if(this.cordinate[1]>10){
            //     console.log('*')
            // }
            this.DOM.style.top = 485 - this.cordinate[1]
            this.DOM.style.left = this.cordinate[0]
        }, REFRESH_RATE)
        

    }

    clearDOM = () =>{
        this.DOMReference.parentNode && this.DOMReference.parentNode.removeChild(this.DOMReference);
    }

    jump = async () => {
        if (this.isJumping)
            return
        this.isJumping = true
        let jumpUp = setInterval(() => {
            this.cordinate[1] = this.cordinate[1] + JUMP_SPEED
        }, UPDATE_FREQUENCY)
        await wait(1000)
        clearInterval(jumpUp)
        let jumpDown = setInterval(() => {
            this.cordinate[1] = this.cordinate[1] - JUMP_SPEED
        }, UPDATE_FREQUENCY)
        await wait(1000)
        clearInterval(jumpDown)
        this.isJumping = false;
    }

    moveForward = async () => {
        this.cordinate[0] = this.cordinate[0] + this.speed
    }

    moveBack = async () => {
        this.cordinate[0] = this.cordinate[0] - this.speed
    }

    setNeuralNetwork = (network) => {
        this.neuralNetwork = network
    }
}

async function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  