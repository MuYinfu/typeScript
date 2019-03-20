function fn1(...value) {
    value.forEach(item => {
        console.log(item);
    })
}

fn1(1, 2, 3, 4, 5, 6);//1，2，3，4，5，6

//类似于es6的点点点运算符


function fn2(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

let args = [1, 2];
fn2(...args);   //1，2，undefined

let args2 = [4, 5, 6, 7, 8];
fn2(...args2);  //4，5，6
