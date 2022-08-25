// 전개 구문
// arr1을 [4,5,6,1,2,3]으로

let arr1=[1,2,3];
let arr2=[4,5,6];

// arr2.reverse().forEach((num)=>{
// 	arr1.unshift(num);
// });


//전개 구문으로 간편하게!
arr1=[...arr2,...arr1];
console.log(arr1);

// 다른 예시 : 신상정보 기입하기

let user={name:'Mike'};
let info={age:30};
let fe=["JS","React"];
let lang=["Korean","English"];

//전개 구문 안쓰고 하면 이렇게 번거로움

// user=Object.assign({},user,info,{
// 	skills:[],
// });

// fe.forEach(item=>{
// 	user.skills.push(item);
// });

// lang.forEach(item=>{
// 	user.skills.push(item);
// });

user={
	...user,
	...info,
	skills:[...fe,...lang],
};

console.log(user);