const User = function(name,age){
	this.name=name;
	this.age=age;
};

User.prototype.showName =function(){
	console.log(this.name);
};

const mike = new User("Mike",25); //생성자 함수는 new없어도 에러 발생 안하고 실행됨


class User2{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	showName(){ //클래스에 있는 메소드는 클래스의 프로토타입으로 저장됨
		console.log(this.name);
	}
}

const tom= new User2("Tom",19); //클래스는 new 없으면 에러 발생

console.log(mike);
console.log(tom);
mike.showName();
tom.showName();