window.onload = function() {

	/*添加两个数组
	一个颜色数组
	一个格子数组*/
	var col = ['red', 'blue', 'yellow', 'purple', 'grey', 'black', 'yellowgreen', 'green', 'cyan'];

	//拿到九宫格里的全部小格子
	var cell = document.querySelectorAll(".row div");

	function function_change() {
		//在换颜色前，清空所有颜色就可以了。
		for(var i = 0; i < 9; i++) {
			//把所有格子颜色换成#FFA600，即格子刚开始就有的颜色。
			cell[i].style.backgroundColor = "#FFA600";
		};

		var indexArr = myArr();

		for(i = 0; i < 3; i++) {

			cell[indexArr[i]].style.backgroundColor = col[i];
		};
	};

	function myArr() {
		//声明一个数组
		var indexArr = [];
		//随机抽取三个数
		var number1 = Math.floor(Math.random() * 9);
		var number2 = Math.floor(Math.random() * 9);
		var number3 = Math.floor(Math.random() * 9);
		//过滤随机抽取的三个数，使这三个数互不重复。
		while(number1 == number2) {
			number2 = Math.floor(Math.random() * 9);
		};
		while(number3 == number2 || number3 == number1) {
			number3 = Math.floor(Math.random() * 9);
		};
		indexArr.push(number1, number2, number3);
		return indexArr;

	};

	//拿到两个按钮
	var control_twinkle = document.getElementById("control_twinkle");
	var control_extinction = document.getElementById("control_extinction");
	var timer;
	//给开始闪按钮添加点击事件
	control_twinkle.onclick = function() {
		function_change();
		clearInterval(timer);
		timer = setInterval(function_change, 1000);

		control_twinkle.style.backgroundColor = "#FFA600";
		control_twinkle.style.color = "white";
		control_extinction.style.backgroundColor = "white";
		control_extinction.style.color = "#FFA600";

	};
	//给结束闪按钮添加点击事件
	control_extinction.onclick = function() {

		control_extinction.style.backgroundColor = "#FFA600";
		control_extinction.style.color = "white";
		control_twinkle.style.backgroundColor = "white";
		control_twinkle.style.color = "#FFA600";
		clearInterval(timer);
		for(var i = 0; i < 9; i++) {
			cell[i].style.backgroundColor = "#FFA600";
			setTimeout(function() {
				control_extinction.style.backgroundColor = "#fff";
				control_extinction.style.color = "#FFA600";
			}, 1000);
		};
	};

};