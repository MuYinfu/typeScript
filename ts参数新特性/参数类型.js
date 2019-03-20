var myName = "Mu Yin fu";
var myAge = 18;
var myGender = "男";
//可以给变量直接生命数据类型
function test(name) { }
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Mu = new Person();
Mu.name = "Mu Yi fu";
Mu.age = 18;
