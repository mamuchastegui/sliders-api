exports.makeStruct = names => {
    names = names.split(' ');
    let count = names.length;
    function constructor() {
        for (let i = 0; i < count; i++) {
            this[names[i]] = arguments[i];
        }
    }
    return constructor;
}