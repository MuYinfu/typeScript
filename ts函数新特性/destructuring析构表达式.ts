function getStock() {
    return{
        code:'LU',
        price:{
            price1:100,
            price2:200
        },
        aaa:'xixixi',
        bbb:'hahaha'
    }
}

//es5写法
var stock = getStock();
var code = stock.code;
var price = stock.price;

var {code: codex, price: {price2}} = getStock();

console.log(codex);
console.log(price);
