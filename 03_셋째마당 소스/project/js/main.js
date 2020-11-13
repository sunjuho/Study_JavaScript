$(function(){
	$(".main-visual-slide").bxSlider({
		auto:true,
		pause:2000,
		autoHover:true,
		autoControls:true,
		autoControlsCombine:true
	});

	$("#notice-tab-wrap h4 a").on("click", tabmenu); // 공지사항 or 새소식이 클릭되면
	function tabmenu(e) {
		e.preventDefault();
		var $ts = $(this);
		var $next = $ts.parent().next();
		if($next.is(":hidden")){
			$("#notice-tab-wrap h4 a").removeClass("on"); // 두 a의 클래스를 지운 후
			$ts.addClass("on"); // this만 on 추가.
			$("#notice-tab-wrap > div:visible").hide(); // 모든 div를 숨긴 후
			$next.show(); // this의 하위 div만 보이게.
		}
	}

	$('.grid').isotope({ // index 하부 격자. 브라우저의 사이즈가 변할 때 애니메이션 적용.
		// options
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});    
});