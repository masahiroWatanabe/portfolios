(function($) {

$(function() {

  var targetImgs=$('img');targetImgs.each(function(){if(this.src.match('_off')){this.rollOverImg=new Image();this.rollOverImg.src=this.getAttribute("src").replace("_off","_on");$(this.rollOverImg).css({position:'absolute',opacity:0});$(this).before(this.rollOverImg);$(this.rollOverImg).mousedown(function(){$(this).stop().animate({opacity:0},{duration:0,queue:false})});$(this.rollOverImg).hover(function(){$(this).animate({opacity:1},{duration:1,queue:false})},function(){$(this).animate({opacity:0},{duration:1,queue:false})})}});
  
  var fadeImage=$('.btn a img');$(fadeImage).hover(function(){$(this).fadeTo('1',0.7)},function(){$(this).fadeTo(1,1)});
  var fadeInput=$('.btn input');$(fadeInput).hover(function(){$(this).fadeTo('1',0.7)},function(){$(this).fadeTo(1,1)});
  
  //
  $('a[href*=#]').on({
  'click':function(){
  var target=$(this.hash);
  if(target){var targetOffset=target.offset().top;
  $('html,body').stop().animate({scrollTop:targetOffset},200)};
  $($spUnivNav).fadeOut();
  $('.page-wrapper').removeClass('blur');
  return false;
  }
  });
  
  //$(window).on('pageshow', function() {
  
  $(window).on('pageshow', function() {
  $('.sp-univ-nav').hide();
  $('.page-wrapper').removeClass('blur');
  });
  
  $(window).resize(function(){
  if (window.matchMedia( '(min-width: 768px)' ).matches) {
  $('.page-wrapper').removeClass('blur');
  $('.sp-univ-nav').fadeOut();
  }
  });
  
  //if (window.matchMedia( '(min-width: 320px)' ).matches) {
  
  var $btnSpUnivNav = $('.btn-sp-univ-nav');
  var $btnSpUnivNavClose = $('.btn-sp-univ-nav-close');
  var $spUnivNav = $('.sp-univ-nav');
  
  $($btnSpUnivNav).on({
  'click':function(){
  $('html,body').stop().animate({scrollTop:0},100);
  $($spUnivNav).fadeIn();
  $('.page-wrapper').addClass('blur');
  }
  });
  
  $($btnSpUnivNavClose).on({
  'click':function(){
  $($spUnivNav).fadeOut();
  $('.page-wrapper').removeClass('blur');
  }
  });
  
  //}
  
  //
  function textTrim(){
  
  var $setElm = $('.text-trim').find('a');
  var cutFigure = '12';
  var afterTxt = '…';
  
  $setElm.each(function(){
  var textLength = $(this).text().length;
  var textTrim = $(this).text().substr(0,(cutFigure))
  
  if(cutFigure < textLength) {
  $(this).html(textTrim + afterTxt).css({visibility:'visible'});
  } else if(cutFigure >= textLength) {
  $(this).css({visibility:'visible'});
  }
  });
  
  }
  
  if ($('.text-trim').length) {
  textTrim();
  }
  
  $('.blog-category-nav li:nth-child(odd)').addClass('odd');
  $('.blog-category-nav li:nth-child(even)').addClass('even');
  
  $('.blog-index-article:last').addClass('last');
  
  $('.wp-caption').each(function(){
  $(this).wrapAll('<div class="wp-caption-wrapper"></div>');
  });
  
  $('.blog-category-post:nth-child(3n+1)').addClass('first');
  $('.blog-category-post:nth-child(3n+3)').addClass('last');
  $('.blog-category-post:nth-child(3n+2)').addClass('center');
  
  var $hiddenList = $('.blog-monthly-archive-nav li:nth-child(n+13)').addClass('hidden');
  
  $('.blog-monthly-archive-nav .more').on({
  'click':function(){
  $(this).fadeOut(400);
  $($hiddenList).fadeIn(400);
  }
  });
  
  //toggleClass
  
  $('.menu-trigger').on({
  'click':function(){
  $('body').toggleClass('is-show');
  $(this).toggleClass('active');
  $('.md-univ-nav').toggleClass('is-show');
  }
  });
  
  $('.md-univ-nav li a').on({
  'click':function(){
  $('.menu-trigger').removeClass('active');
  $('.md-univ-nav').removeClass('is-show');
  }
  });
  
  //
  var loadCount = 0,
  imgLength = $("img").size();
  $("img").each(function() {
  var src = $(this).attr("src");
  $("<img>")
  .attr("src", src)
  .load(function() {
  loadCount++;
  });
  });
  
  var timer = setInterval(function() {
  $(".md-loading").css({
  "width": (loadCount / imgLength) * 100 + "%"
  });
  
  if((loadCount / imgLength) * 100 == 100){
  clearInterval(timer);
  
  $(".md-loading").delay(200).animate({
  "opacity": 0
  }, 200,function(){$('.md-overlay').fadeOut(200);});
  
  }
  
  }, 5);
  
});

})(jQuery);