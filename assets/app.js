$('.sidebar-icon').on('click',function(){
    $('.dashboard-sidebar-col').css('display','block');
    $('.dashboard-sidebar-col').css('position','absolute');
    $('.dashboard-sidebar-col').css('top','0px');
    $('.dashboard-sidebar-col').css('right','0');
    $('.dashboard-body').css('overflow','hidden');
    $('.backdrop').css('display','block');
});
$('.cross-sidebar').on('click',function(){
    $('.dashboard-sidebar-col').css('display','none');
    $('.dashboard-body').css('overflow','auto');
    $('.backdrop').css('display','none');
})
// ==================================owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1.8
        },
        330:{
            items:2.2
        },
        420:{
            items:2.9
        },
        767:{
            items:3.7
        },
        900:{
            items:4.4
        },
        1000:{
            items:4.8
        },
        1100:{
            items:5.8
        },
        1200:{
            items:4.8
        },
        1600:{
            items:5.5
        }
    }
})
// ==============================================tabs
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active-tab";
  }
  document.getElementById("defaultOpenTab").click();