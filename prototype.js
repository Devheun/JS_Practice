// 상속과 프로토타입 : 프로퍼티를 찾고 없으면 __proto__객체(prototype)을 살펴본다.

const car={
	wheels:4,
	drive:function(){
		console.log("drive...");
	},
};

const bmw={
	color:"red",
	navigation:1,
};

bmw.__proto__=car;

const x5={
	color:"white",
	name:"x5",
};

x5.__proto__=bmw;

console.log(x5.wheels);
for(x in x5){ //상속받은 프로퍼티까지 다 나옴 'color,name,navigation,wheels,drive'
	console.log(x);
}

console.log(Object.keys(x5)); // ['color','name'] 상속받은 프로퍼티까진 안 나옴 
console.log(Object.values(x5)); // ['white','x5'] 상속받은 프로퍼티까진 안 나옴


// 다른 예시 (생성자 함수 활용)

const Bmw= function(color){
	this.color=color;
};

Bmw.prototype.wheels=4;
Bmw.prototype.navigation=1;

const z5 = new Bmw("red");
const z4= new Bmw("blue");

for(z in z4){
	console.log(z);
}

console.log(z4 instanceof Bmw); // True 반환 (Bmw로 부터 생성되었으니)
console.log(z4.constructor===Bmw); // True 반환 (z4의 생성자가 Bmw 이므로)

// 다른 예시 (closure 이용) 값을 바꾸는걸 방지하고자

const Benz=function(color){
	const c=color;
	this.getColor=function(){
		console.log(c);
	}
};

const sc= new Benz("red");
sc.getColor();