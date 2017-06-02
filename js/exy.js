window.onload=function(){
  var mobileBtn = document.querySelector("header div.exy-header__mobile-menu a.exy-header__mobile-btn");
  mobileBtn.addEventListener("click", function () {

    var mobileNav = document.querySelector("ul.exy-header__mobile-nav");
    mobileNav.style.display = "block";

    var mobileNavFlex = document.querySelector("ul.exy-header__mobile-nav.exy-header__oneline-mobile");
    mobileNavFlex.style.display = "flex";

  });

  var mobileClose = document.querySelector("ul.exy-header__mobile-nav a.exy-header__close-mobile");
  mobileClose.addEventListener("click", function () {

    var mobileNav = document.querySelector("ul.exy-header__mobile-nav");
    mobileNav.style.display = "none";

  });

  var switchFr = document.getElementById('switch-fr');
  switchFr.addEventListener("click", function () {
      
    localStorage.setItem('language', "fr");
    location.reload();

  });
  var switchEn = document.getElementById('switch-en');
  switchEn.addEventListener("click", function () {
      
    localStorage.setItem('language', "en");
    location.reload();

  });
  var switchEs = document.getElementById('switch-es');
  switchEs.addEventListener("click", function () {
      
    localStorage.setItem('language', "es");
    location.reload();

  });
}
function tradPage (array) {
        
  document.getElementById("trad-mainTitle").innerHTML += array['mainTitle'];
  document.getElementById("trad-description").innerHTML += array['description'];
  document.getElementById("trad-home").innerHTML += array['home'];
  document.getElementById("trad-projects").innerHTML += array['projects'];
  document.getElementById("trad-social").innerHTML += array['social'];
  document.getElementById("trad-about").innerHTML += array['about'];
  document.getElementById("trad-home-2").innerHTML += array['home'];
  document.getElementById("trad-projects-2").innerHTML += array['projects'];
  document.getElementById("trad-social-2").innerHTML += array['social'];
  document.getElementById("trad-about-2").innerHTML += array['about'];
  document.getElementById("trad-discover").innerHTML += array['discover'];
  document.getElementById("trad-discoverDesc").innerHTML += array['discoverDesc'];
  document.getElementById("trad-openSource").innerHTML += array['openSource'];
  document.getElementById("trad-openSourceDesc").innerHTML += array['openSourceDesc'];
  document.getElementById("trad-simple").innerHTML += array['simple'];
  document.getElementById("trad-simpleDesc").innerHTML += array['simpleDesc'];
  document.getElementById("trad-useful").innerHTML += array['useful'];
  document.getElementById("trad-usefulDesc").innerHTML += array['usefulDesc'];
  document.getElementById("trad-gotoProjects").innerHTML += array['gotoProjects'];
  document.getElementById("trad-news").innerHTML += array['news'];
  document.getElementById("trad-newsDesc").innerHTML += array['newsDesc'];
  document.getElementById("trad-twitter").innerHTML += array['twitter'];
  document.getElementById("trad-twitterDesc").innerHTML += array['twitterDesc'];
  document.getElementById("trad-discord").innerHTML += array['discord'];
  document.getElementById("trad-discordDesc").innerHTML += array['discordDesc'];
  document.getElementById("trad-bop").innerHTML += array['bop'];
  document.getElementById("trad-bopDesc").innerHTML += array['bopDesc'];
  document.getElementById("trad-contact").innerHTML += array['contact'];
  document.getElementById("trad-sitemap").innerHTML += array['sitemap'];
  document.getElementById("trad-translate").innerHTML += array['translate'];
  document.getElementById("trad-translateDesc").innerHTML += array['translateDesc'];
}

if ('language' in localStorage) {

    if (localStorage.getItem('language') == "fr") {
      $.getScript('https://exybore.github.io/exy-trad-platform/french.js', function() {
  
        tradPage(exybore);
      });
    }
    else if (localStorage.getItem('language') == "es") {
      $.getScript('https://exybore.github.io/exy-trad-platform/spanish.js', function() {
  
        tradPage(exybore);
      });
    }
    else if (localStorage.getItem('language') == "en") {
      $.getScript('https://exybore.github.io/exy-trad-platform/english.js', function() {
  
        tradPage(exybore);
      });
    }
    else {
      $.getScript('https://exybore.github.io/exy-trad-platform/english.js', function() {
  
        tradPage(exybore);
    });
  }
}
else {
  localStorage.setItem("language", "en");
}


