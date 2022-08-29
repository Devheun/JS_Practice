const mike={
	name:"Mike",
};

const tom={
	name:"Tom",
};

function showThisName(){
	consoloe.log(this.name);
}

function update(birthYear,occupation){
	this.birthYear=birthYear;
	this.occupation=occupation;
};

update.call(mike,1999,"singer"); // 첫번째 매개변수 : this로 사용될 값, 그 이후: 함수가 사용할 매개변수들 순서대로
update.call(tom,2001,"dancer");
update.apply(mike,[1999,"singer"]); //apply는 call과 똑같지만 매개변수 배열로 받는다!

console.log(mike);
console.log(tom);


// 다른 예시

const nums=[3,10,1,6,4];
const minNum=Math.min(...nums);
const maxNum=Math.max(...nums);

console.log(minNum,maxNum);

const minNum2=Math.min.apply(null,nums);
const maxNum2=Math.max.apply(null,nums);
console.log(minNum2,maxNum2);

const minNum3=Math.min.call(null,...nums);
const maxNum3=Math.max.call(null,...nums);
console.log(minNum3,maxNum3);