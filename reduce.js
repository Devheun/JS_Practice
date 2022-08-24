/*
arr.reduce()
인수로 함수를 받고,
(누적 계산값,현재값)=>{ return 계산값 };
*/

//배열의 모든 수 합치기
let arr=[1,2,3,4,5];

//for, for of, forEach
let result=0;
for(let i=0;i<arr.length;i++){
	result+=arr[i];
}

let result2=0;
for(let x of arr){
	result2+=x;
}

let result3=0;
arr.forEach(num=>{
	result3+=num;
})

//arr.reduce()
const result4=arr.reduce((prev,cur)=>{
	return prev+cur;
},0); //초기값은 Optional, 설정 안해주면 첫번째 배열 요소가 들어감

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);

//다른 예시 : 성인의 이름만 배열에 저장하기
let userList=[
	{name:"Mike",age:30},
	{name:"Tom",age:10},
	{name:"Jane",age:27},
	{name:"Sue",age:26},
	{name:"Harry",age:42},
	{name:"Steve",age:60},
]

let users=userList.reduce((prev,cur)=>{
	if(cur.age>19){
		prev.push(cur.name);
	}
	return prev;
},[]);
console.log(users);
