// function getName(name){
// 	return new Promise((res,rej)=>{
// 		setTimeout(()=>{
// 			res(name);
// 		},1000);
// 	});
// }

// async function showName(){
// 	const result= await getName("Mike");
// 	console.log(result);
// }

// console.log("시작");
// showName();


// Promise.js 코드에서 쓴 예시
const f1=()=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			res("1번 주문 완료");
		},1000);
	});
};

const f2=(message)=>{
	console.log(message);
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			//rej("X")
			res("2번 주문 완료");
		},3000);
	});
};

const f3=(message)=>{
	console.log(message);
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			res("3번 주문 완료");
		},2000);
	});
};

console.log("시작");
async function order(){	// await 키워드 오른쪽에는 Promise가 온다!
	try{
			const result1= await f1(); //await 키워드는 async function 내부에서!
			const result2= await f2(result1);
			const result3= await f3(result2);
			console.log(result3);
		//async 함수 내부에서도 Promise.all 사용가능!
		// const result= await Promise.all([f1(),f2(),f3()]); 
		// console.log(result);
	} catch(e){
		console.log(e);
	}
	console.log("종료");
}

order();