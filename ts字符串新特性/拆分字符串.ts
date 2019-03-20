function test(template,name,age) {
    console.log(template)
    console.log(name)
    console.log(age)
}
let myname ='Mu Yin fu'

let getAge=()=>{
    return 18;''


//在模板字符串调用test方法的时候，表达式会传入相对于的参数中
// test `hello, my name is ${myName},i'm ${getAgo()}`
test `hello my name is ${myname},i'm ${getAge()}`
