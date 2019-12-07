document.addEventListener("DOMContentLoaded", function (event) {
    main()
})

let max = 0

function main() {
    obstacles = []

    setInterval(function () {
        if (Math.random() < 0.15) {
            let obstacle = new Obstacle()
            obstacles.push(obstacle)
            // console.log('obstacle ', obstacle.id)
            setTimeout(() => {
                let a = obstacles.findIndex((item => {
                    return item.id == obstacle.id
                }))
                if (a > -1) {
                    obstacles.splice(a, 1);
                }
                delete obstacle;
            }, 10000)
            if (obstacles.length > max) {
                max = obstacles.length
            }
        }
    }, 200)
    // let playerArray = [];
    // for (let i = 0; i < 10; i++) {
    //     playerArray[i] = new Player();
    //     playerArray[i].setNeuralNetwork(
    //         new NeuralNetwork({
    //             layerArray: [40, 24, 18, 12, 1]
    //         })
    //     )
    //     playerArray[i].max_score = 0;
    // }

    setInterval(() => {
        arr = [];
        for (let i = 0; i < obstacles.length; i++) {
            arr.push(obstacles[i].cordinate[0])
            arr.push(obstacles[i].cordinate[1])
        }

        if (obstacles.length < 20) {
            for (let i = 0; i < 20 - obstacles.length; i++) {
                arr.push(999)
                arr.push(999)
            }
        }

        // for (let i = 0; i < playerArray.length; i++) {
        //     if (!playerArray[i])
        //         return
        //     let output = playerArray[i].neuralNetwork.getOutput(arr)
        //     if (output[0] < 0.5) {
        //         playerArray[i].jump()
        //     } else {}
        // }

    }, 1000)

    let generation = new Generation(50)
    generation.play();


    // let a = setInterval(() => {

    //     for (let i = 0; i < obstacles.length; i++) {
    //         let item = obstacles[i];
    //         for (let j = 0; j < playerArray.length; j++) {

    //             if (playerArray[j] && Math.abs(item.cordinate[0] - playerArray[j].cordinate[0]) < 5) {

    //                 // console.log(item.height, playerArray[j].cordinate[1])
    //                 if (item.height > playerArray[j].cordinate[1]) {
    //                     console.log('x diff - ', Math.abs(item.cordinate[0] - playerArray[j].cordinate[0]))
    //                     console.log('y diff - ', item.height, playerArray[j].cordinate[1])
    //                     console.log('score  - ', playerArray[j].score)
    //                     // console.log(playerArray[j])
    //                     // console.log(playerArray[j].cordinate,[item.cordinate[0],item.height])
    //                     // console.log(`player ${playerArray[j].id} Ended with score :: ${playerArray[j].score}`)
    //                     // console.log('player :: ', playerArray[j].id)
    //                     playerArray[j].max_score = playerArray[j].score
    //                     // clearInterval(a)
    //                     playerArray[j].clearDOM()
    //                     delete playerArray[j]
    //                 };

    //             }
    //         }
    //     }
    // }, 10)

    // document.onkeydown = function (e) {
    //     e = e || window.event;
    //     e = e.which || e.keyCode
    //     // console.log(e)
    //     if (e == 38 || e == 32) {
    //         player.jump()
    //     }
    //     if (e == 39) {
    //         console.log('right')
    //         player.moveForward()
    //     }
    //     if (e == 37) {
    //         console.log('left')
    //         player.moveBack()
    //     }
    // }

}