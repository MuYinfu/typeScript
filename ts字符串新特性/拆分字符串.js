var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
var myname = 'Mu Yin fu';
var getAge = function () {
    return 18;
    '';
    //在模板字符串调用test方法的时候，表达式会传入相对于的参数中
    // test `hello, my name is ${myName},i'm ${getAgo()}`
    test(__makeTemplateObject(["hello my name is ", ",i'm ", ""], ["hello my name is ", ",i'm ", ""]), myname, getAge());
};
