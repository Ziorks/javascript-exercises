const repeatString = function(str,x) {
    let result = '';
    if(x < 0){
        return 'ERROR'
    }
    for(let i = 0; i < x; i++ ){
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
