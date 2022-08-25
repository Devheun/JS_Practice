//나머지 매개변수
//전달 받은 모든 수를 더하기

function add(...numbers){
	let result=0;
	numbers.forEach((num)=>{result+=num});
	console.log(result);
}

add(1,2,3);
add(1,2,3,4,5,6,7,8,9,10);

//user 객체를 만들어주는 생성자 함수 만들기

function User(name,age,...skills){ //나머지 매개변수는 항상 제일 마지막에 위치!
	this.name=name;
	this.age=age;
	this.skills=skills;
}

const user1=new User('Mike',30,'html','css');
const user2=new User('Tom',20,'js','css');

console.log(user1);
console.log(user2);
