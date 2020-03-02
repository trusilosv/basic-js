const chainMaker = {
    temparray: [],
    getLength() {
        return this.temparray.length;
    },
    addLink(value) {
        this.temparray.push(value);
        return this;
    },
    removeLink(position) {
        if (Number.isInteger(position) && position > 0 && position <= this.temparray.length)
            this.temparray.splice(position - 1, 1);
        else {
            this.temparray = [];
            throw new Error();
        }
        return this;
    },
    reverseChain() {
        this.temparray.reverse();
        return this;
    },
    finishChain() {
        let finish = '';
        for (let index = 0; index < this.temparray.length; index++) {
            finish += '( ' + this.temparray[index] + ' )~~';
        }
        this.temparray = [];
        return finish.substring(0, finish.length - 2);

    }

};

module.exports = chainMaker;