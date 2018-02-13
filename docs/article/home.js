(function($) {

  var themeImage = [
  'http://moufdesign.info/wp-content/themes/mouf-2016/assets/img/home/theme-01.gif',
  'http://moufdesign.info/wp-content/themes/mouf-2016/assets/img/home/theme-02.gif',
  'http://moufdesign.info/wp-content/themes/mouf-2016/assets/img/home/theme-03.gif'
  ];
  
  var l = themeImage.length;
  var r = Math.floor(Math.random()*l);
  var themeImageUrl = themeImage[r];
  var now = (new Date()).getTime();
  var bg = new Array(
  'http://moufdesign.info/wp-content/themes/mouf-2016/assets/img/home/theme-01.gif?'+now,
  'http://moufdesign.info/wp-content/themes/mouf-2016/assets/img/home/theme-02.gif?'+now,
  'http://moufdesign.info/wp-content/themes/mouf-2016/assets/img/home/theme-03.gif?'+now
  );
  
  var logoImageUrl = $('.logo img').attr('src');
  var $homeFooter = $('.univ-footer');
  
  //function
  
  function theme_height() {
  var h = $(window).height();
  $(".theme").css("height", h + "px")
  }
  
  function theme_position() {
  var o = $(window).height(),
  i = o -= 176,
  n = i /= 2;
  $(".logo").css("padding-top", n + "px")
  } 
  
  $(window).on('resize', function(){
  theme_height();
  theme_position();
  });

$(window).scroll(function(){
  var y = $(this).scrollTop();
  $('.home-profile').css('background-position', 'center ' + parseInt( -y / 5 ) + 'px');
  $('#section-home-contact').css('background-position', 'center ' + parseInt( -y / 5 ) + 'px');
});

$(function() {

  theme_height(); 
  theme_position();
  
  $('.theme').css('background-image',('url("'+themeImageUrl+'")'));
  
  bg.sort(
  function() {
  return Math.random() - 0.5;
  }
  );
  
  $('.theme').backstretch(bg, {
  fade: 400,
  duration: 8000
  });
  $('.logo').fadeIn(1);
  
  $('.logo img').attr('src', logoImageUrl + '?' + now);
  
  $('.theme').on({
  'click':function(){
  var target=$('#section-home-portfolio');
  if(target){var targetOffset=target.offset().top;
  $('html,body').stop().animate({scrollTop:targetOffset},200)};
  return false;
  }
  });
  
  $('.home-contact-form-submit input').on({
  'click':function(){
  $(this).parent().fadeOut();
  }
  });
  
  //
  $('.work-title span').each(function(){
  var txt = $(this).text();
  $(this).text(
  txt.replace(/design/g,"")
  );
  });
  
  $('#section-home-contact').append($homeFooter);

});

})(jQuery);