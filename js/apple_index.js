// 头部隐藏导航
$(function(){
	var flag1=true;
	$(".hide-nav").click(function(){
		if(flag1){
			$(".line-one").css({
				transform:"translate(0,3px) rotate(45deg)"
			})
			$(".line-two").css({
				transform:"translate(0,-4px) rotate(-45deg)"
			})
			$(".menu").css({
				height:570,
				visibility:"visible"
			})

			$(".menu a").each(function(index,obj){
				$(obj).css("transition","all 0.4s ease "+index*0.1+"s");
			}).css({
				opacity:1,
				transform:"rotateY(0deg) scale(1,1)"
			})

			flag1=false;
		}else{
			$(".line-one").css({
				transform:"translate(0,0) rotate(0deg)"
			})
			$(".line-two").css({
				transform:"translate(0,0) rotate(0deg)"
			})
			$(".menu").css({
				height:0,
				visibility:"hidden"
			})

			$(".menu a").each(function(index,obj){
				$(obj).css("transition","none");
			}).css({
				opacity:0,
				transform:"rotateY(60deg) scale(1,0.3)"
			});
			flag1=true;
		}
	})
})

// 双下标无缝轮播
$(function(){
	// 1.获取元素
	var imgs=$(".pic");
	var win=$(".window");
	var cirs=$(".cirs li");
	var btnL=$(".btnL");
	var btnR=$(".btnR");
	var flag=true;

	// 2.状态初始化
	imgs.css("left","100%").eq(0).css("left","0");
	cirs[0].style.background="#E21E7F";
	cirs.eq(0).css({
		background: "transparent",
		border: "1px solid #0070c9",
	})


	// 3.记录下标
	var index=0;		//当前显示的图片
	var next=0;			//接下来会显示的图片


	// 4.时间间隔函数
	var t=setInterval(moveR,2000);

	// 5.move函数
	// (1)点击右按钮执行的函数
	function moveR(){
		// 更新下标
		next++;

		// 判断边界
		if(next==imgs.length){
			next=0;
		}
		
		// 动画执行之前先让下一张图片就位
		imgs.eq(next).css("left","100%");
		
		// 小点背景颜色随图片运动而变化
		cirs.eq(index).css({
			border: "0",
			background: "#999",
			margin: "1px 10px"
		})
		cirs.eq(next).css({
			border: "1px solid #0070c9",
			background: "transparent",
			margin: "0px 10px"
		})

		// 动画执行
		imgs.eq(index).animate({left:"-100%"});
		imgs.eq(next).animate({left:0},function(){
			flag=true;
		});


		// 动画执行完后更新下标
		index=next;
	}

	// (2)点击左按钮执行的函数
	function moveL(){
		// 更新下标
		next--;

		// 判断边界
		if(next<0){
			next=imgs.length-1;
		}
		
		// 动画执行之前先让下一张图片就位
		imgs.eq(next).css({left:"-100%"});
		
		// 小点背景颜色随图片运动而变化
		cirs.eq(index).css({
			border: "0",
			background: "#999",
			margin: "1px 10px"
		})
		cirs.eq(next).css({
			border: "1px solid #0070c9",
			background: "transparent",
			margin: "0px 10px"
		})

		// 动画执行
		imgs.eq(index).animate({left:"100%"});
		imgs.eq(next).animate({left:0},function(){
			flag=true;
		});

		// 动画执行完后更新下标
		index=next;
	}


	// 6.添加鼠标移入轮播停止,鼠标移出轮播继续的事件
	win.hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(moveR,2000);
	})


	// 7.给右按钮添加点击事件
	btnR.click(function(){
		if(flag){
			flag=false;
			moveR();
		}
	})

	// 8.给左按钮添加点击事件
	btnL.click(function(){
		if(flag){
			flag=false;
			moveL();
		}
	})

	// 8.给小点添加点击事件(选项卡)
	cirs.click(function(){
		var i=$(this).index();
		
		if(i==index){
			return;
		}

		cirs.eq(index).css({
			border: "0",
			background: "#999",
			margin: "1px 10px"
		})

		cirs.eq(i).css({
			border: "1px solid #0070c9",
			background: "transparent",
			margin: "0px 10px"
		})

		if(i>index){
			imgs.eq(i).css({
				left:"100%"
			})

			imgs.eq(index).animate({left:"-100%"});
			imgs.eq(i).animate({left:"0"},function(){
				flag=true;
			});
		}

		if(i<index){
			imgs.eq(i).css({
				left:"-100%"
			})

			imgs.eq(index).animate({left:"100%"});
			imgs.eq(i).animate({left:"0"},function(){
				flag=true;
			});
		}

		next=i;
		index=i;


	})
})

// 底部隐藏导航
$(function(){
	var flag=true;
	$(".add").click(function(){
		if(flag){
			$(this).css({
				transform:"rotate(45deg)"
			})
			var menu2=$(this).parent().next();

			menu2.css({
				display:"block"
			});
			
			flag=false;
		}else{
			$(this).css({
				transform:"rotate(0deg)"
			})
			var menu2=$(this).parent().next();

			menu2.css({
				display:"none"
			});
			
			flag=true;
		}
	})
})

