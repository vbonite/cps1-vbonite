

$(document).ready(function(){

  // nav-scrolling
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    
    if (scrollTop >= 50) {
      $('.navbar').addClass('scrolled-navbar');
    } else if (scrollTop < 50) {
      $('.navbar').removeClass('scrolled-navbar');
    } 
  }); 

  // Cache selectors
  var lastId,
      topMenu = $(".nav"),
      topMenuHeight = topMenu.outerHeight()+15,
      // All list items
      menuItems = topMenu.find("a"),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
  });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({ 
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;
   
    // Get id of current scroll item
    var cur = scrollItems.map(function(){
      if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
   
    if (lastId !== id) {
        lastId = id;
         // Set/remove active class
        menuItems
          .parent().removeClass("active")
          .end().filter("[href='#"+id+"']").parent().addClass("active");
        }                   
    });


  // nav active switching
  // $('.nav li').click(function(e) {
  //     $('.nav li.active').removeClass('active');
  //     var $this = $(this);
  //     if (!$this.hasClass('active')) {
  //         $this.addClass('active');
  //     }
  // });  

  // Hide all elements with class="expandedImg" (images), except for the one that matches the clickable grid image
});

    function openImg(imgName) {
    var i, x;
    x = document.getElementsByClassName("expandedImg");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(imgName).style.display = "block";
}

