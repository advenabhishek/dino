class NeuralNetwork {
    constructor(obj = {}) {
        if (!obj.layerArray)
            this.layerArray = [3, 2, 1]
        else {
            this.layerArray = obj.layerArray;
        }
        if (!obj.weight) {
            this.weight = []
            for (let layer = 0; layer < this.layerArray.length - 1; layer++) {
                let LayerWeight = [];
                for (let p = 0; p < this.layerArray[layer + 1]; p++) {
                    let currLayerWeight = []
                    for (let p = 0; p < this.layerArray[layer] + 1; p++) {
                        let k = Math.random() / 10
                        let sign = Math.random() < 0.5 ? -1 : 1
                        currLayerWeight.push(Math.random() * sign)
                    }
                    LayerWeight.push(currLayerWeight)
                    currLayerWeight = []
                }
                this.weight.push(LayerWeight)
                LayerWeight = []
            }
        } else {
            this.weight = obj.weight
        }
    }

    getOutput = (input) => {
        if (!input)
            throw 'NO input provided'
        let output = []
        input = [1, ...input]
        for (let i = 0; i < this.weight.length; i++) {
            let LayerWeight = this.weight[i]
            output = []
            for (let j = 0; j < LayerWeight.length; j++) {
                let temp = 0
                for (let k = 0; k < LayerWeight[j].length; k++) {
                    temp += LayerWeight[j][k] * input[k]
                }
                temp = 1 / (1 + Math.exp(-1 * temp))
                output.push(temp)
            }
            input = [1, ...output]
        }
        return output
    }
}

let neuralNetwork = new NeuralNetwork();