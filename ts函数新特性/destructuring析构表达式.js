function getStock() {
    return {
        code: 'LU',
        price: {
            price1: 100,
            price2: 200
        },
        aaa: 'xixixi',
        bbb: 'hahaha'
    };
}
//es5写法
var stock = getStock();
var code = stock.code;
var price = stock.price;
var _a = getStock(), codex = _a.code, price2 = _a.price.price2;
console.log(codex);
console.log(price);
