// es7 async语法
// async function f() {
//     const res = await console.log('我堵车了')
//     console.log(res)
// }

function* doSomething() {
    consolelog('start');
    yield
    console.log('finish');
}
var fun1 = doSomething();
fun1.next();//每执行一个next()就停在一个yield中，相当于断点
fun1.next();

function* getStockPrice(stock) {
    while (true) {
        yield Math.random()*100
    }
}
var priceGenerator = getStockPrice("LU");
var limitPrice = 14;
var price = 100;
while (price > limitPrice) {
    price = priceGenerator.next().value;
    console.log(`the gernerator return ${price}`)
}

console.log(`buying at ${price}`)
//当white满足时将暂停跳出
