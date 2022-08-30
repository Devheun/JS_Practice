// const pr = new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		//resolve('OK');
// 		reject(new Error("err.."));
// 	},3000)
// });

// pr.then(
// 	function(result){
// 		console.log(result + ' 성공적입니다.');
// 	}
// ).catch( //catch는 error가 발생했을 때만 동작
// 	function(error){
// 		console.log("다시 시도해주세요.");
// 	}
// ).finally( //항상 실행된다
// 	function(){
// 		console.log('마감!');
// 	}
// )

//더 실용적인 예시

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


// 프로미스 올 (Promise.all) 동시에 진행 !
// 배열로 받고 작업이 모두 끝나야 실행된다. 시간적인 측면에서 도움된다.
// 하나의 정보라도 error 뜨면 실행 안된다. 즉, 다 보여주거나 아예 안보여주거나!
Promise.all([f1(),f2(),f3()]).then(res=>{
	console.log(res);
}); 





// 프로미스 레이스 (Promise.race)
// 배열로 받고 그중 하나라도 작업이 완료되면 끝 !
// Promise.race([f1(),f2(),f3()]).then(res=>{
// 	console.log(res);
// }); 





// 프로미스 체이닝 (Promises chaining) 순차적으로 진행 !
// f1()
// 	.then(res=>f2(res))
// 	.then(res=>f3(res))
// 	.then(res=>console.log(res))
// 	.catch(console.log)
// 	.finally(()=>{
// 	console.log("끝!");
// 	});