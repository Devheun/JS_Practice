let n="name";
let m="age";

const user={
	[n]:"Mike",
	[m]:30,
	[1+4] : 5,
};

function makeObj(key,value){
	return{
		[key]:value,
	};
}

const obj=makeObj("성별","male");
console.log(user,obj);