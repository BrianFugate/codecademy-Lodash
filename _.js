const _ = {
    clamp(num, lowerBound, upperBound) {
        return Math.min(Math.max(num, lowerBound), upperBound);
    },

    inRange(num, start, end) {
        if (end == undefined) { // check if end is undefined
            end = start;
            start = 0;
        }
        if (start > end) { // swap start and end if in wrong order
            let temp = start;
            start = end;
            end = temp;
        }
        return num >= start && num < end ? true : false;
    },

    words(string) {
        return string.split(' ');
    },

    pad(string, length) {
        if (string.length >= length) return string;
        let startPad = Math.floor((length - string.length) / 2);
        let endPad = length - string.length - startPad;
        const space = ' ';
        return space.repeat(startPad) + string + space.repeat(endPad);
    },

    has(object, property) {
        return Object.hasOwn(object, property);
    },

    invert(object) {
        const invObject = {};
        for (const key in object) {
            invObject[object[key]] = key;
        }
        return invObject;
    },

    findKey(object, func) {
        for (const key in object) {
            if (func(object[key]) == true) return key;
        }
        return undefined;
    },

    drop(array, num) {
        const newArray = [];
        if (num == undefined) num = 1;
        for (let i = num; i < array.length; i++) {
            newArray.push(array[i]);
        }
        return newArray;
    },

    dropWhile(array, func) {
        for (let i = 0; i < array.length; i++) {
            if (func(array[i], i, array) == false) {
                return array.slice(i);
            }
        }
    },

    chunk(array, size) {
        const chunkArray = [];
        if (size == undefined) size = 1;
        for (let i = 0; i < array.length; i = i + size) {
            chunkArray.push(array.slice(i, i + size));
        }
        return chunkArray;
    }
};




// Do not write or modify code below this line.
module.exports = _;