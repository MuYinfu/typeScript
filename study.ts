//参数类型特效 ts拥有类型推算,没有赋值的时候默认为初始值的类型 any(所有类型)
class Person {
	public name: String; //公共
	private age: Number; //私有
	// protected h: Number; //私有||子类

	constructor(name: String = 'myf', age: Number = 18, h ?: string) {
		this.name = name;
		this.age = age
	}
}

//private 私有属性子类不可使用
let p1: Person = new Person('myf', 18);

/*
String 新特性
 */

//多行字符串
let str1 = `abc
abc
abc`

//字符串模板
let str2 = `abc${p1.name}`

//自动拆分字符串 参数1为模板通过后续参数分割后的数组, 参数2+为分割参数
function tem(template: String, name: String, age: Number) {
	console.log(template, name, age);
}

function getAge() {
	return 18;
}

// @ts-ignore
tem`hello my name is ${'myf'}, i,m ${getAge()}`

/*
函数新特性
 */

//扩展运算符, 数组类型
function fun1(...args: any[]) {
	args.map(item => {
		console.log(item)
	})
}

fun1(1, 2, 3, 4)

//generator
function* fun2() {
	yield
}

//解构赋值
function fun3() {
	return {
		a: 1,
		b: {
			a: 3
		}
	}
}

let {a: c, b: {a}} = fun3();
console.log(c, a)

let arr1 = [1, 2, 3, 4];

let [num1, num2, ...num3] = arr1;


//箭头函数
let arr2 = [1, 2, 3, 4, 5];
arr2.filter(value => value % 2 == 0);

//for of 可以break
let arr3 = [1, 2, 3, 4, 5, 6];
for(let n of arr3) {
	if(n > 4) {
		break;
	}
}

//class类
class Super {
	constructor(public name: String) {

	}

	eat() {
		console.log(this.name);
	}
}

class Stu extends Super {
	constructor(name: String, public age: Number) {
		super(name);
	}

	work() {
		super.eat()
	}
}

let stu1 = new Stu('myf', 123);
console.log(stu1)


//泛型 指定类型
let p2:Array<Super> = [];
p2.push(stu1);


//接口Interface
//定义接口
interface Pconfig {
	name: String,
	age: Number
}

//声明类的初始化的值
class PersonS {
	constructor(public config: Pconfig) {
	}
}

let p3 = new PersonS({
	name: 'myf',
	age: 123
})

//实现接口 implements
interface StuS {
	// @ts-ignore
	eat();
}

class Tiger implements StuS {
	eat() {
		console.log(123);
	}
}

//模块 export(导出)  import(导入)

//类型定义文件 *.d.ts

