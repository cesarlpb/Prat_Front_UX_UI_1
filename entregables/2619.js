/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {

    let lastElement
    if(this.length > 0)
    {
        lastElement = this[this.length - 1];
    }
    else{
        lastElement = -1
    }

    return lastElement;
    
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */