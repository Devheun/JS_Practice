//생성자 함수 - 객체 리터럴 일일이 만드는거 귀찮을때 (붕어빵 틀)

function Item(title,price){
	this.title=title;
	this.price=price;
	this.showPrice=function(){
		console.log(`가격은 ${price}원 입니다.`);
	}
}

const item1=new Item('인형',3000);
const item2=new Item('가방',5000);
const item3=new Item('지갑',7000);

console.log(item1,item2,item3);

item3.showPrice();