///sidebaar
(function($) {
        $(document).ready(function() {
          $.slidebars();
        });
      }) (jQuery);
///////popup modal
$(document).ready(function(){
  $('#my_login').popup();
  $('#my_register').popup();


	});
/**
     * Tabs.
     */
    $( ".tabs-links a" ).on( "click", function( e ) {
        e.preventDefault();

        // Get the target tab.
        var newTab = $( this ).attr( "href" );

        // Show the targeted tab content while hiding the rest.
        $( newTab ).show().siblings().hide();

        // Add the active class to the parent list item while removing it from the rest.
        $( this ).parent( "li" ).addClass( "active" ).siblings().removeClass( "active" );
    } );


  /**
     * Tabs.
     */
    $( ".tabs-creator a" ).on( "click", function( e ) {
        e.preventDefault();

        // Get the target tab.
        var newTab = $( this ).attr( "href" );

        // Show the targeted tab content while hiding the rest.
        $( newTab ).show().siblings().hide();

        // Add the active class to the parent list item while removing it from the rest.
        $( this ).parent( "li" ).addClass( "active" ).siblings().removeClass( "active" );
    } );


////////bxslider



/////header scroll
 $(window).scroll(function() {
            if ($("header").offset().top > 500) {
                $(".left i").css('color','#000');
                $(".left span").css('color','#000');
                $(".login span").css('color','#000');
                $(".login i").css('color','#000');
                $(".search span").css('color','#000');
                $(".search i").css('color','#000');
                $(".login a").css('color','#000');
               
            } else {
                $(".left i").css('color','#fff');
                $(".left span").css('color','#fff');
                $(".login span").css('color','#fff');
                $(".login i").css('color','#fff');
                $(".search span").css('color','#fff');
                $(".search i").css('color','#fff');
                $(".login a").css('color','#fff');
            }
        });

$(document).ready(function()
      {
      $(".user-avatar").click(function()
      {
      $("#notificationContainer").fadeToggle(300);
      $(".bublex").fadeOut("slow");
      return false;
      });

      //Document Click
      $(document).click(function()
      {
      $("#notificationContainer").hide();
      });
      //Popup Click
      $("#notificationContainer").click(function()
      {
      return false
      });

      });



//////slick slider

 
