/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var ary = s.split('');
    ary.sort(); // ['a', 'a', 'b', 'b', 'c']
    var obj = {};
    for(var i in ary) {
        if(obj[ary[i]] == undefined) {
            obj[ary[i]] = 1;
        } else {
            obj[ary[i]] += 1;
        }
    }
    //console.log(obj);
    var array = [];  //   [{a:3, count:3, name:'a'}, {b:3, count:3,name:'b'}, {c:2, count:2, name:'c'}]
    for(var i in obj) {
        var s = {};
        s.count = obj[i];
        s.name = i;
        s[i] = obj[i];
        array.push(s);
    }
    array.sort(function(a, b) {
        return b.count - a.count;
    });
    var str = '';
    for(var i in array) {
        for(var j = 0; j < array[i].count; j++) {
            str += array[i].name;
        }
    }
    return str;
};

console.log(frequencySort('bbaaacccd'));
