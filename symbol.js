//Symbol은 객체로 인식 되지 않는다. (Object.values() 이런거나 for in 같은거)


//타인이 만들어 놓은 객체 (Symbol을 이용하여 타인의 코드에 영향을 미치지 않고 작업 가능!)
const user={
	name:"Heun",
	age:22,
};

//내가 작업하는 곳
//user.showName=function(){}; 이런 식으로 추가하면 이상한 메시지 출력함. (객체로 인식해서)
const showName=Symbol('show name');
user[showName]=function(){
	console.log(this.name);
};

user[showName]();

//사용자가 접속하면 보는 메시지
for (let key in user){
	console.log(`His ${key} is ${user[key]}`);
}