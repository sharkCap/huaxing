$(function () {
  $('#top').click(function () {
    $('html,body').animate(
      {
        scrollTop: '0px'
      },
      1000
    );
  });
  //返回顶部
  $('.top_box').hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $('.top_box').fadeIn(500);
    } else {
      $('.top_box').fadeOut(0);
    }
  });

  $('.sous_box').hide();
  $('.head_ss').click(function () {
    $(this).toggleClass('ss');
    $('.sous_box').stop().slideToggle(300);
  });
  //轮播
  $('.banner').terseBanner();
});

//滚动
$(document).ready(function () {
  var box0 = $('.case-list'),
    v0 = 0.5; //这里添加滚动的对象和其速率
  Rin(box0, v0);
  Rin(box1, v1);

  function Rin($Box, v) {
    //$Box移动的对象，v对象移动的速率
    var $Box_ul = $Box.find('ul'),
      $Box_li = $Box_ul.find('li'),
      $Box_li_span = $Box_li.find('span'),
      left = 0,
      s = 0,
      timer; //定时器

    $Box_li.each(function (index) {
      $($Box_li_span[index]).width($(this).width()); //hover
      s += $(this).outerWidth(true); //即要滚动的长度
    });

    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      function (Tmove) {
        return setTimeout(Tmove, 1000 / 60);
      };
    window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;

    if (s >= $Box.width()) {
      //如果滚动长度超出Box长度即开始滚动，没有的话就不执行滚动
      $Box_li.clone(true).appendTo($Box_ul);
      Tmove();
      function Tmove() {
        //运动是移动left  从0到-s;（个人习惯往左滚）
        left -= v;
        if (left <= -s) {
          left = 0;
          $Box_ul.css('left', left);
        } else {
          $Box_ul.css('left', left);
        }
        timer = requestAnimationFrame(Tmove);
      }
      $Box_ul.hover(
        function () {
          cancelAnimationFrame(timer);
        },
        function () {
          Tmove();
        }
      );
    }
  }
});
