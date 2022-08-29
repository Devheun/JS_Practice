// bind는 함수의 this값을 영구히 바꿀 수 있다.

const user={
	name:"Mike",
	showName:function(){
		console.log(`hello, ${this.name}`);
	},
};

user.showName();

let fn=user.showName; //fn을 할당할 때 this를 잃어버린 것
fn();

fn.call(user);
fn.apply(user);

let boundFn=fn.bind(user);
boundFn();