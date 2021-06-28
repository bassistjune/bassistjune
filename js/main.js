(function() {

    animateIco();

    // ico 애니메이션
    function animateIco() {
        var idx = 1;
    
        setInterval(function() {
            if(idx === 7) {
                idx = 0;
            }
            idx++;
    
            $('#favicon').attr('href','favicon_logo_0' + idx + '.ico');
        }, 100);
    }

    // 메인 live 슬라이더
    var liveSlider = new Swiper('.live_slider', {
        slidesPerView: 3,
        spaceBetween:40,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // 뷰포트 1200이하일때 2컬럼
            1200: {
                slidesPerView: 2,
                spaceBetween:30,
            },
            767: {
                // loop모드일때 소수점사용시 오른쪽끝 슬라이더 복제안되는경우 있음
                slidesPerView: 'auto',
                spaceBetween:20,
            },
          }
      });
})();