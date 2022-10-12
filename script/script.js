$('.slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  
  function move(newIndex) {
    var animateLeft, slideLeft;
    
    advance();
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    
    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    
    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }
  
  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }
  
  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&#9672;</a>');
    
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });
  
  advance();
});

// login & register
$('#open-btn-login').click(function (){
    $('#form').show();
});
$('#close-btn-login').click(function (){
    $('#form').hide();
});
$('#open-btn-login').click(function (){
    $('#form-login').show();
});
$('#open-btn-login').click(function (){
    $('#form-register').hide();
});


// form register
$('#open-btn-register').click(function (){
    $('#form').show();
});
$('#close-btn-register').click(function (){
    $('#form').hide();
});
$('#open-btn-register').click(function (){
    $('#form-register').show();
});
$('#open-btn-register').click(function (){
    $('#form-login').hide();
});
  