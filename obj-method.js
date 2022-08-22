const user={
	name:'Mike',
	age:30,
};

//const user2=user; 이렇게 만들지 X

//Object.assign() 이용
const user2=Object.assign({},user);
user2.name="Tom"
console.log(user,user2);

//Object.keys(),values(),entries() 이용

const result=Object.keys(user);
const result2=Object.values(user);
const result3=Object.entries(user);

console.log(result,result2,result3);

//Object.fromEntries() 이용

let arr=[
	['남성','male'],
	['여성','female'],
];

const result4=Object.fromEntries(arr);
console.log(result4);
