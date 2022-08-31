
// Generator는 외부로부터 값을 입력받을 수 있다.
function* fn(){
	const num1 = yield "첫번째 숫자를 입력하세요";
	console.log(num1);
	
	const num2= yield "두번째 숫자를 입력하세요";
	console.log(num2);
	
	return num1+num2;
}

const a = fn();

//Generator는 값을 미리 만들어두지 않음
function* fn2(){
	let index=0;
	while(true){
		yield index++;
	}
}

const b=fn2();

//Generator는 yield* 를 이용하여 다른 제너레이터를 받을 수 있다.
function* gen1(){
	yield "W";
	yield "o";
	yield "r";
	yield "l";
	yield "d";
}

function* gen2(){
	yield "Hello,";
	yield* gen1(); // yield* 옆에는 반복가능한 모든 객체가 올 수 있음
	yield "!";
}

console.log(...gen2()); // for-of 와 마찬가지로 done이 true가 될때까지 !