window.onload = function() {

		/*添加两个数组
		一个颜色数组
		一个格子数组*/
		var col = ['red', 'blue', 'yellow', 'purple', 'grey', 'black', 'yellowgreen', 'green', 'cyan'];

		//拿到九宫格里的全部小格子
		var cell = document.querySelectorAll(".box");

		function function_change() {
			//在换颜色前，清空所有颜色就可以了。
			for(var i = 0; i < 9; i++) {
				//把所有格子颜色换成#FFA600，即格子刚开始就有的颜色。
				cell[i].style.backgroundColor = "#FFA600";
			};

			var indexArr = myArr();

			for(i = 0; i < 3; i++) {

				cell[indexArr[i].style.backgroundColor = col[i];
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
				}
				while(number3 == number2 || number3 == number1) {
					number3 = Math.floor(Math.random() * 9);
				};
				indexArr.push(number1, number2, number3);
				return indexArr;

			};

			//拿到两个按钮
			var btn1 = document.getElementById("btn1");
			var btn2 = document.getElementById("btn2");
			var timer;
			//给开始闪按钮添加点击事件
			btn1.onclick = function() {
				function_change();
				clearInterval(timer);
				timer = setInterval(function_change, 1000);
				btn1.style.backgroundColor = "#FFA600";
				btn1.style.color = "white";
				btn2.style.backgroundColor = "white";
				btn2.style.color = "#FFA600";

			};
			//给结束闪按钮添加点击事件
			btn2.onclick = function() {
				btn2.style.backgroundColor = "#FFA600";
				btn2.style.color = "white";
				btn1.style.backgroundColor = "white";
				btn1.style.color = "#FFA600";
				clearInterval(timer);
				for(var i = 0; i < 9; i++) {
					cell[i].style.backgroundColor = "#FFA600";
					setTimeout(function() {
						btn2.style.backgroundColor = "#fff";
						btn2.style.color = "#FFA600";
					}, 1000);
				};
			};

		};