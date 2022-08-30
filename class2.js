// 클래스 상속 (extends 이용)

class Car{
	constructor(color){
		this.color=color;
		this.wheels=4;
	}
	drive(){
		console.log("drive...");
	}
	stop(){
		console.log("Stop!");
	}
}

class Bmw extends Car{
	
	// constructor(...args){ 자식 클래스에 constructor가 없을 때 내부적으로 이렇게 동작!
	//    super(...args);
	//}
	constructor(color){ //오버라이딩 (무조건 부모생성자를 호출해야함. 프로퍼티 받아서 super 로 전달)
		super(color);
		this.navigation=1;
	}
	park(){
		console.log("Park");
	}
	stop(){
		super.stop(); //메소드 오버라이딩 (super 이용)
		console.log("OFF");
	}
}

const z4 = new Bmw("blue");

console.log(z4);
z4.drive(); 
z4.stop();

