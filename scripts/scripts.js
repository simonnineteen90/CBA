

$(document).ready(function() {


  

    //owl carousel
    $("#owl-demo").owlCarousel({
   
       
        autoplay :  true ,
        loop : true ,
        autoplayHoverPause : false ,
        autoplaySpeed : 1500 , // speed of transitions between slides
        autoplayTimeout : 7000 , // time spent on each slide before changing
   
        
   
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
   
    });
   
  });



  $( "#mobileMenu" ).click(function() {
    classToggle()
  });


  // sticky nav
  // When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function classToggle() {
  const navs = document.querySelectorAll('.main-nav-item')

  navs.forEach(nav => nav.classList.toggle ('nav-toggle'));
}




function goToByScroll(id){
  // Reove "link" from the ID
  // Scroll
$('html,body').animate({
    scrollTop: $(id).offset().top-50},
    1000);
}

$(".main-nav-item , .main-nav-logo").click(function(e) { 
  // Prevent a page reload when a link is pressed
e.preventDefault(); 
  // Call the scroll function
goToByScroll($(this).find('a').attr('href'));
/* goToByScroll('#services');     */  
});



  
  //This function is called when the page is ready. Its simply
  //calls the 'loadCbaData' below.
  loadCbaData();
 



function loadCbaData(){
  $.ajax({
    type:"GET",
    url:"https://cbaapi.azurewebsites.net/api/cba/getcbadata",
    success: function(data) {
      


      
      //This is the 'success' function of the API call. Simply
      //If the API URL above was called this code wil be called.
      //'data' is just a generic variable name for the returned 
      //JSON from the endpoint. There is a property on the
      //returned JSON  called 'Title' here we simply set it
      //through jQuery to the UI element specified. In  this
      //case it is a <p> element with the ID of 'webTitle'.

      /* $('#webtitle').text(data.Title);
      
      $('#projectOne').text(data.Projects[0]);
      $('#projectTwo').text(data.Projects[1]);
      $('#projectThree').text(data.Projects[2]);
      
      $('#ourWork').text(data.OurWork);
      
      $('#about').text(data.About);
      
      $('#contactEmail').text(data.Contact[0].email);
      
      $('#address').text(data.Address); */
    }
  });
}




// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 52.574420, lng: -0.249659}; 
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('contact-map'), {zoom: 14, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}