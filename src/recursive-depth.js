module.exports = class DepthCalculator {

    calculateDepth(arr) {
        let temparr = [];
        let depth = 0;
        for (let i = 0; i < arr.length; i++) {
            depth++;
            if (Array.isArray(arr[i])) {
                depth += this.calculateDepth(arr[i]);
            }
            temparr.push(depth);
            depth = 0;
        }

        let max = 1;
        for (let j = 0; j < temparr.length; j++) {
            if (max < temparr[j])
                max = temparr[j];
        }

        return max;
    }
};