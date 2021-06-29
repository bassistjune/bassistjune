$(function () {
	
	// 헤더 메뉴목록
	var $menu = $('#header .gnb_menu>li');
    // 섹션 컨텐츠
	var $contentWrap = $('#container .contents_wrap');
	
	

	// 스크롤
	scrollTop = $(window).scrollTop();
	
	// 헤더 Gnb 기능
	$('#header .gnb_menu>li>a').on('click', function(e) {
		e.preventDefault();/* 기본 기능 제거 */

		/* $(this).parent().addClass('on').siblings().removeClass('on'); */

		var idx = $(this).parent().index();
		var sectionEq = $contentWrap.eq(idx);
		var sectionDistance = sectionEq.offset().top;

		$('html,body').stop().animate({scrollTop:sectionDistance});
	});
	// 모바일 헤더 기능 
	$('.mobile_menu>a').on('click', function(e) {
		e.preventDefault();
		$('.mobile_menu_wrap').toggleClass('on');
		
	});
	// 모바일 gnb
	$('.mobile_menu_wrap .mobile_menu_list>li>a').on('click', function(e) {
		e.preventDefault();

		var idx = $(this).parent().index();
		var sectionEq = $contentWrap.eq(idx);
		var sectionDistance = sectionEq.offset().top;

		$('html,body').stop().animate({scrollTop:sectionDistance});

		$('.mobile_menu_wrap').removeClass('on');
	})

	$('.mobile_menu_wrap .mobile_sns>li>a').on('click', function() {
		$('.mobile_menu_wrap').removeClass('on');
	});


	// 인트로 슬라이더
	var swiper = new Swiper(".intro_slider", {
        slidesPerView: 1,
        spaceBetween: 40,
		centeredSlides: true,
		loop: true,
		/* effect: "fade", */
        pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	$('.swiper_arrow').on('click', function() {
		$('.button_wrap .link_notice').hide();
	});


	// 디테일 아코디언 메뉴
	$('.detail .detail_list li a').on('click', function(e) {
		e.preventDefault();

		$(this).parent().toggleClass('on').siblings().removeClass('on');

		$(this).siblings('.detail_txt').stop().slideToggle().parent().siblings().find('.detail_txt').slideUp(); 
	});

	// 스크롤 기능
	$(window).scroll(function() {

		//스크롤 메뉴 on기능
		$contentWrap.each(function() {

			var idx = $(this).index() - 5;
			
			if($(this).offset().top -5 <= $(window).scrollTop()) {

				/* console.log(idx); */
				$menu.removeClass('on');
				$menu.eq(idx).addClass('on');
			} else if($(window).scrollTop() < $contentWrap.eq(0).offset().top) {
				$menu.removeClass('on');
				$menu.eq(idx).removeClass('on');
			} 
		}); 

		//탑 버튼 기능
		if ( $( this ).scrollTop() > 200 ) {
			$( '.btn_top' ).fadeIn();
		} else {
			$( '.btn_top' ).fadeOut();
		}
	});


	$( '.btn_top' ).click( function() {
		$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
		return false;
	} );
	
	
	// 사이트링크 - 알림 기능 
	$('.button_wrap .link_notice').hide();
	$('.intro_slider_wrap .btn_type_2_notice').on('click', function() {
		$(this).next().show();
	});
	$('.button_wrap .link_notice .link_top_inner .btn_close').on('click', function(e) {
		e.preventDefault();
		$('.button_wrap .link_notice').hide();
	});

	$('.contact .button_wrap .btn_email').mouseover(function() {
		$('.contact_contents .button_wrap li .send_mail_wrap').show();
	});
	$('.send_mail_wrap').mouseleave(function(){
		$('.contact_contents .button_wrap li .send_mail_wrap').hide();
	});

	
	$('.send_mail_wrap li.send_mail').on('click', function(e){
		$('.contact_contents .button_wrap li .send_mail_wrap').hide();
	});

	$('.send_mail_wrap li.copy_mail').on('click', function(e){
		e.preventDefault();

		$('.copy_mail .clipboard').select(); //복사할 텍스트를 선택
		document.execCommand("copy"); //클립보드 복사 실행
		alert('복사완료');

		$('.contact_contents .button_wrap li .send_mail_wrap').hide();


	});


	// 해당 외 영역 클릭시 발생 이벤트
	$('html, body').click(function(e){
		e.stopImmediatePropagation();

		if(!$('.detail .detail_list li a').is(e.target)) 
		{
			$('.detail .detail_list li').removeClass('on');
			$('.detail_txt').slideUp();
		}else if(!$('.link_notice').is(e.target)) {
			$('.button_wrap .link_notice').hide();
		}/* else if(!$('.mobile_menu_list li').parent().find('.mobile_menu_wrap').hasClass('on').is(e.target)) {
			$('.mobile_menu_wrap').removeClass('on');
		} */
		/* 이것 수정요망*/
	});


	// 반응형 - 리사이즈 이벤트 

	$(window).resize(function (){

		var widthSize = window.outerWidth;

		if (widthSize <= 878 ) {

			$('.intro .sub_tit').html("안녕하세요.<br>하드코딩을 사랑하는 <strong>한준희</strong> 입니다:)");

			/* location.reload(); */
		}
	}).resize();

});