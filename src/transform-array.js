module.exports = function transform(arr) {
    temparr = [];
    if (Array.isArray(arr)) {


        if (arr === []) return arr;
        for (let index = 0; index < arr.length; index++) {

            switch (arr[index]) {
                case '--discard-next':
                    index++;
                    break;

                case '--discard-prev':
                    temparr.pop();
                    break;

                case '--double-next':
                    index++;
                    if (index < arr.length) {
                        temparr.push(arr[index]);
                        temparr.push(arr[index]);
                    }
                    break;
                case '--double-prev':
                    if (index > 0)
                        temparr.push(arr[index - 1]);
                    break;
                default:

                    temparr.push(arr[index]);
                    break;
            }




        }

    } else throw new Error();
    return temparr;


}