//Array.isArray()

let user={
	name:"Mike",
	age:20,
};

let userList=["Mike","Tom","Jane"];

//typeof 쓰면 객체와 배열 모두 Object라고 판단하므로 배열인지 아닌지 정확한 구분할땐 Array.isArray()이용
console.log(typeof user);
console.log(typeof userList);

console.log(Array.isArray(user));
console.log(Array.isArray(userList));