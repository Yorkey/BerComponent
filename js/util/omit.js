/**
 * Created by wangyu on 2016/12/26.
 */

export default function(obj) {
    var keys =arguments[1] instanceof Array ? arguments[1] :   Array.prototype.slice.call(arguments, 1);
    var result = {};

    for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
            if(keys.indexOf(key) < 0) {
                result[key] = obj[key];
            }
        }
    }
    //keys.forEach(function(key) {
    //    delete obj[key];
    //});
    return result;
};