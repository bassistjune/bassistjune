$(function () {
    // 영역외 클릭시 닫기
	$(document).mouseup(function (e){
        var closeWrap = $('#site_search_wrap, #site_menu_wrap, .stock_list');
        var onclass = $('.site_search.on, .site_menu.on');
        var stock = $('.stock_list_wrap');
        
		if( closeWrap.has(e.target).length === 0) {
			closeWrap.slideUp();
            // onclass.removeClass("on");
            // $('.stock_list_wrap').removeClass("on");
		}
        
        // if( stock.has(e.target).length === 0) {
		// 	stock.removeClass("on");
		// }

	});

	// 헤더 Gnb 기능
	$('.site_gnb>li>a').on('click', function(e) {
		e.preventDefault();
		var idx = $(this).parent('li').index();
		$('#modelCatalogue .catalogue_wrap').eq(idx).slideToggle().siblings('#modelCatalogue .catalogue_wrap').hide();
	});
	// 헤더 Gnb 닫기
	$('.close_catalogue').on('click',function() {
		$('#modelCatalogue .catalogue_wrap').slideUp();
	});
	// 2개 이상의 목록 기능 
	$('.car_list_tab li a').on('mouseenter', function() {
		var idx = $(this).parent('li').index();

		/*$('.multiple_catalogue').stop().eq(idx).show().parent().siblings('.multiple_catalogue').hide(); */
		$('#modelCatalogue .a5_catalogue .model_detail').eq(idx).show().siblings('.model_detail').hide();
		$('#modelCatalogue .a6_catalogue .model_detail').eq(idx).show().siblings('.model_detail').hide();
		$('#modelCatalogue .a7_catalogue .model_detail').eq(idx).show().siblings('.model_detail').hide();
		$('#modelCatalogue .a8_catalogue .model_detail').eq(idx).show().siblings('.model_detail').hide();	
		$('#modelCatalogue .q3_catalogue .model_detail').eq(idx).show().siblings('.model_detail').hide();	
		$('#modelCatalogue .q4_catalogue .model_detail').eq(idx).show().siblings('.model_detail').hide();
		$('#modelCatalogue .q5_catalogue .model_detail').eq(idx).show().siblings('.model_detail').hide();
		$('#modelCatalogue .q8_catalogue .model_detail').eq(idx).show().siblings('.model_detail').hide();
		$('#modelCatalogue .e_tron_gt_catalogue .model_detail').eq(idx).show().siblings('.model_detail').hide();
	}); 
	$('.car_list_tab li').eq(0).children('a').trigger('mouseenter');

    // 사이트맵 기능
	$('#header .site_menu').on('click', function(e) {
		e.preventDefault();

		if ($(this).hasClass("on")){
			$(this).removeClass("on");
			$("#site_menu_wrap").slideUp();
		} else{
			$(this).addClass("on");
			$("#site_menu_wrap").slideDown();
		}
	});	
    $('#header .close_menu').on('click', function(e) {
        $("#header .site_menu").removeClass("on");
        $("#site_menu_wrap").slideUp();
    });

	// 사이트 검색 기능
	$('#header .site_search').on('click', function(e) {
		e.preventDefault();
		if ($(this).hasClass("on")){
			$(this).removeClass("on");
			$("#site_search_wrap").slideUp();
		} else{
			$(this).addClass("on");
			$("#site_search_wrap").slideDown();
		}
	});
    $('.close_search').on('click', function(e) {
        $(".site_search").removeClass("on");
        $("#site_search_wrap").slideUp();
    });

    // 신차재고검색기능
	$('.stock_list_wrap').on('click', function() {
        if ($(this).hasClass("on")){
			$(this).removeClass("on");
			$(this).find(".stock_list").slideUp();
		} else{
			$(this).addClass("on");
			$(this).find(".stock_list").slideDown();
		}
	});

// 모델리스트 슬라이더
	$('.model_slider').slick({
		dots: false,
		infinite: false,
		setPosition: 0,
		speed: 300,
		slidesToShow: 8,
		slidesToScroll: 8,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		],
		arrows: true,
		prevArrow : ".main-slick-prev",		// 이전 화살표 모양 설정
		nextArrow : ".main-slick-next",		// 다음 화살표 모양 설정
	});

	// 모델타입 슬라이더
	$('.type_slider').slick({
		dots: false,
		infinite: false,
		setPosition: 0,
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 6,
		centerMode: false,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,

			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		],
		arrows: false,
		prevArrow : ".type-slick-prev",		// 이전 화살표 모양 설정
		nextArrow : ".type-slick-next",		// 다음 화살표 모양 설정	
	});

	
	// 모델 섹션 탭 기능
	$('.model_list .model_tab li a').on('click', function(e) {
		e.preventDefault();

		$(this).parent().addClass('on').siblings().removeClass('on');

		var idx = $(this).parent('li').index();
		$('.model_content>div').eq(idx).show().siblings().hide();
		// $('.model_content>div').eq(idx).addClass('active').siblings().removeClass('active');
		$('.type_slider').resize();
		$('.type_slider').slick('refresh');
		$('.model_slider').resize();
		$('.model_slider').slick('refresh');
	});
	$('.model_list .model_tab li').eq(0).children('a').trigger('click');

	// 사이드바 마우스엔터 기능 
	$('#sideBar .menu_list').on('mouseenter', function() {
		$('#sideBar .menu_list li p').css('right', '50px');	
	}).on('mouseleave', function() {
		$('#sideBar .menu_list li p').css('right', '-80px');	
	});
	
	// 모바일 gnb 기능 
	// 푸터 모바일 메뉴기능 
	//resize: 브라우저 창 너비의 변경된 값을 width 변수에 저장
	$(window).resize(function(){

		var widthW = $(window).width();

		if (widthW <= 900) {
			$('#site_menu_wrap .site_menu_inner .gnb>li>a').click(function(){
				$(this).parent().addClass('on').siblings().removeClass('on');
				$(this).siblings('.depth_2').stop().slideToggle().parent().siblings().find('.depth_2').slideUp();
			});
		} else if(widthW <= 767) {

		}
	
	});
		$(window).trigger("resize"); 
	/* 
		$('#footer .footer_inner .footer_menu>li a').on('click', function(e) {
			e.preventDefault();
		}); */

		$('#footer .footer_inner .footer_menu>li a').on('click', function(e) {
			e.preventDefault();
			
			$(this).parent().addClass('on').siblings().removeClass('on');
			$(this).siblings('.footer_depth_2').stop().slideToggle().parent().siblings().find('.footer_depth_2').slideUp(); 
		});

});