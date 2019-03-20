function fn1() {
    var value = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        value[_i] = arguments[_i];
    }
    value.forEach(function (item) {
        console.log(item);
    });
}
fn1(1, 2, 3, 4, 5, 6); //1，2，3，4，5，6
//类似于es6的点点点运算符
function fn2(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
var args = [1, 2];
fn2.apply(void 0, args); //1，2，undefined
var args2 = [4, 5, 6, 7, 8];
fn2.apply(void 0, args2); //4，5，6
