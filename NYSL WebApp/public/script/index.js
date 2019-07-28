
var app=new Vue({
    el:"#app",
    data:{
        section_show:{
                        shome:true,
                        sschedule:false,
                        sstandings:false,
                        slocations:false,
                        sgallery:false,
                        scontact:false
                    },
        weather:[],
        stats:[
                        {team:"U1",
                        pos:"1",
                        points:35,
                        w:10,
                        d:5,
                        l:5},
                        {team:"U2",
                        pos:"2",
                        points:32,
                        w:9,
                        d:6,
                        l:5},
                        {team:"U3",
                        pos:"3",
                        points:30,
                        w:8,
                        d:6,
                        l:6},
                        {team:"U4",
                        pos:"4",
                        points:28,
                        w:7,
                        d:7,
                        l:6},
                        {team:"U5",
                        pos:"5",
                        points:25,
                        w:6,
                        d:7,
                        l:7},
                        {team:"U6",
                        pos:"6",
                        points:23,
                        w:5,
                        d:8,
                        l:7}
            ],
        match_time:{
            first:"9:30 Hs",
            second:"13:00 Hs"
        }
    },
created: function(){
    var darksky = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';
    var key = '8e4d119c29d3e1bfd93715ff8e78025c';
    var lat = 41.9142;
    var lng = -87.6378;
    var uri = darksky + key + '/' + lat +','+ lng;
    console.log(uri);
    uri = uri.concat('?exclude=minutely,hourly,daily,flags');


    fetch(uri)
        .then(response=> response.json())
        .then(data=>{
            this.weather=data.currently;
            app.calculate()
            
            })
        .catch(error => console.error(error))
},
    methods: {
           
            calculate:function(){
            app.weather.temperature=(app.weather.temperature).toFixed(0) + "°"+"F";
        }   
        },
        
});
function show(){
        var image=new Image();
        image.src="images/cloudy.png"
        image.style.height = '60px';
        
        var img=document.getElementById("cloudy");
        img.appendChild(image);
    };
show();

$("#menu a").bind('click', function(e) {
 e.preventDefault();
 var nextPage = $(e.target.hash);
 $("#pages .current").removeClass("current");
 nextPage.addClass("current");
});


var w = window.innerWidth;
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("customnav").style.top = "0";
  } else if (prevScrollpos < currentScrollPos && w<600){
    document.getElementById("customnav").style.top = "-80px";
  }
  else{
    document.getElementById("customnav").style.top = "-110px";
  }
  prevScrollpos = currentScrollPos;
}

$(function(){ 
     var navMain = $("#navbarSupportedContent");
     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
 });


function toggleSignIn() {
        var email = document.getElementById('inEmail').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
      }
function goToLoc(){
  var element = document.getElementById("locations");
  element.classList.add("current");
  var element2 = document.getElementById("schedule");
  element2.classList.remove("current");
}