OBSTACLE_ID = 0

class Obstacle {
    constructor() {
        this.color = "red"
        this.cordinate = [999, 0];
        this.speed = 2;
        this.moveCount = 0;
        this.isMoving = false;
        this.isJumping = false;
        this.DOM = document.createElement('div')
        this.id = ++OBSTACLE_ID;
        this.DOM.id =  this.id+ '-obstacle'
        this.DOM.className = "obstacle"
        this.height = Math.floor(Math.random()*100) 
        this.DOM.style.height = this.height
        document.getElementById("playground").appendChild(this.DOM);
        this.DOM.style.top = 500 - this.height
        this.DOMReference = document.getElementById(this.DOM.id)
        this.is = setInterval(() => {
            this.DOM.style.left = this.cordinate[0]
            this.cordinate[0] = this.cordinate[0] - this.speed;
            if(this.cordinate[0] < -100){
                clearInterval(this.is)
                this.DOMReference.parentNode.removeChild(this.DOMReference);
            }
        }, REFRESH_RATE)
    }

}

async function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}