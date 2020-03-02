class VigenereCipheringMachine {
    constructor(bool) {
        if (bool === undefined)
            this.bool = true;
        else
            this.bool = bool;
    }
    encrypt(str, key) {
        if (typeof str == 'string' && typeof key == 'string') {
            str = str.toUpperCase().split('');
            key = key.toUpperCase();
            temp = 0;
            key = key.repeat(str.length / key.length + 1);
            for (let i = 0; i < str.length; i++) {
                if (str[i][0] != undefined && key[i] != undefined && str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) < 92) {
                    str[i] = String.fromCharCode((str[i].charCodeAt(0) - 130 + key[temp].charCodeAt(0)) % 26 + 65);
                    temp++;
                }
            }
            if (!this.bool) {
                str.reverse();
            }
            str = str.join('');
            return str;
        } else throw new Error();


    }

    decrypt(str, key) {

        if (typeof str == 'string' && typeof key == 'string') {
            str = str.toUpperCase().split('');
            key = key.toUpperCase();
            temp = 0;
            key = key.repeat(str.length / key.length + 1);
            for (let i = 0; i < str.length; i++) {
                if (str[i][0] != undefined && key[i] != undefined && str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) < 92) {
                    str[i] = String.fromCharCode((str[i].charCodeAt(0) - key[temp].charCodeAt(0) + 26) % 26 + 65);
                    temp++;
                }
            }
            if (!this.bool) {
                str.reverse();
            }
            str = str.join('');
            return str;
        } else throw new Error();

    }
}


module.exports = VigenereCipheringMachine;