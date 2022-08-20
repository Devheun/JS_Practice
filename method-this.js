let boy={
	name:"Mike",
	showName:function(){
		console.log(this.name)
	}
};

let man=boy;
boy=null;

man.showName();