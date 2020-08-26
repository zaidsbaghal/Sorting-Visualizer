export default {
    methods: {
        selectionSort: function (array, animations) {
            let currentIdx = 0;
            while (currentIdx < array.length) {
                animations.push(["curr", currentIdx])
                let smallest = currentIdx;
                for (let i = currentIdx; i < array.length; i++) {
                    animations.push(["comp", currentIdx, i])
                    if (array[smallest] > array[i]) {
                        smallest = i
                    }
                    animations.push(["clear", i]) // uncolor current index 
                }
                animations.push(["swap", currentIdx, smallest, array[smallest]])
                animations.push(["swap", smallest, currentIdx, array[currentIdx]])
                if (smallest != currentIdx) {
                    animations.push(["clear", smallest]) // set last element sorted color
                }

                this.swap(currentIdx, smallest, array);



                currentIdx += 1
            }
            return [array, animations];
        },
        swap: function (i, j, array) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

}

