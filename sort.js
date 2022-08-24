/*
arr.sort() : 배열 재정렬
주의!!!! 배열 자체가 변경됨.
인수로 정렬 로직을 담은 함수를 받음
*/

let arr=[27,8,5,13];
arr.sort();
//이런식으로 정렬하면 문자열 기준으로 앞의 글자만 보고 판단하므로 정렬로직 담은 함수를 써야함.
console.log(arr);

arr.sort((a,b)=>{
	return a-b;
});
console.log(arr);

// 함수를 만들기보단 Lodash 라이브러리를 이용. ( _.sortBy(arr); ) lodash.com 참조!
