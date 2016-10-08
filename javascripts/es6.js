console.log('es6');
// const > use to assign mathematical variables or things that are unlikely to change (mostly used for the former);
const a=9;
console.log('a1', a);
// a =12;
// console.log('a2', a);

// let > similar to var . BUT only used in the block it's defined in. Let doesn't hoist like var does 
let b = 8;
console.log('b', b);
b =12;
console.log('b2', b);

function varTest() {
	var x=1;
	if(true){
		var x=2;
		console.log(x);
	}
	console.log(x);
}
varTest();

function letTest() {
	let y=1;
	if(true){
		let y=12;
		console.log("inside if", y);
	}
	console.log("outside if", y);
}
letTest();
// arrow functions 
var sum = function(){
	let a=1, b=2
	return a+b;
}
console.log("hardcoded sum", sum());

var sum2 = () => {
	let a=1, b=2;
	return a+b;
}
console.log("easy sum", sum2());

var reflect = function(value) {
	return value;
}
console.log("reflect in ES5", reflect("hey"));

var reflect2 = (value) => value;

console.log("reflect in Es6", reflect2("hiya"));

var realSum = function (num1, num2){
	return num1 + num2;
}
console.log("realsumES5", realSum(2,5));

var realSum2 =(num1, num2) =>{
	return num1 + num2;
}
console.log("realSumES6", realSum2(2,5));
// string templates
let m="bitme";
console.log('m', m);
let r = `hello my name is ${m}`;
console.log('r', r);
//object literal property shorthand
let wow="Hi there", es6="ES6", numNum = ()=>{console.log("howdy")}
let myOldObject = {
	wow:wow,
	es6:es6,
	numNum:numNum
}
console.log("myOldObject", myOldObject);
let myNewObject = {
	wow, es6, numNum
}
console.log("myNewObject", myNewObject);
// method properties
var es5Obj = {
	foo: function(){console.log("foo")},
	bar: function(){console.log("bar")}
}
console.log("es5Obj", es5Obj);

var es6Obj= {
	foo(){console.log("foo")},
	bar(){console.log("bar")}
}
console.log("es6Obj", es6Obj);