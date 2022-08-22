//slice 활용 (앞에 숫자 떼고 문자만 !)
let list=[
	"01. 들어가며",
	"02, JS의 역사",
	"03. 자료형",
	"04. 함수",
	"05. 배열",
];

let newList=[];

for(let i=0;i<list.length;i++){
	newList.push(
		list[i].slice(4)
	);
}

console.log(newList);

// 금칙어 게임
// 금칙어 : 벤치

function hasBench(str){
	if(str.indexOf("벤치")){
		console.log("금칙어가 존재합니다.");
	}else{
		console.log("통과!");
	}
}

hasBench("오늘은 등을 해야지!"); // -1 반환하므로 if문 통과해버림.
hasBench("오늘은 벤치프레스 10세트!"); //잘 반환된 케이스
hasBench("벤치 누가 쓰나?"); // 0을 반환하므로 if문을 통과하지 못해 else문에 걸림.

//해결법 : str.indexof("벤치)>-1 로 if문을 수정하거나, str.includes("벤치")를 활용(문자 있으면 true, 없으면 false)
