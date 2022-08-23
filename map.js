let userList=[
	{name:"Mike",age:30},
	{name:"Jane",age:27},
	{name:"Tom",age:20},
];

let newUserList=userList.map((user,index)=>{
	return Object.assign({},user,{
		id:index+1,
		isAdult: user.age>20,
	});
});

console.log(newUserList);
console.log(userList);