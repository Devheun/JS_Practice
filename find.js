//find / findIndex / filter

//find는 첫번째 true값만 반환함, 없으면 undefined 반환
let arr=[1,2,3,4,5];
const result=arr.find((item)=>{
	return item%2==0;
})

console.log(result);

//filter는 만족하는 모든 요소를 배열로 반환
const result3=arr.filter((item)=>{
	return item%2==0;
})
console.log(result3);


//findIndex는 해당 Index 반환, 없으면 -1 반환
let userList=[
	{name:"Mike",age:30},
	{name:"Jane",age:27},
	{name:"Tom",age:20},
];

const result2=userList.findIndex((user)=>{
	if(user.age>20){
		return true;
	}
	return false;
})

console.log(result2);