/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(obj instanceof Array && obj[0] != "") {
        if (obj[0] === undefined) {
            return true;
        }
        return false;
    } else if (obj[0] == 0) {
        return false;
    } else if(obj instanceof Object) {
        keysTotal = Object.keys(obj);
         if (obj[keysTotal[0]] == "" && keysTotal[0] == "") {
            return false
         }
        return (keysTotal == 0) ? true : false;
    } else {
        return true;
    }
};