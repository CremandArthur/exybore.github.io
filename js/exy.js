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

  // var images = document.querySelector('img.agrand');
  // images.addEventListener("click", function () {

  //   document.location.href = images.src;
  // });
}


if ('language' in localStorage) {

    if (localStorage.getItem('language') == "fr") {
      $.getScript('https://exybore.github.io/exy-trad-platform/langs/french.js', function() {
  
        trad(exybore.universal);
        
      });
    }
    else if (localStorage.getItem('language') == "es") {
      $.getScript('https://exybore.github.io/exy-trad-platform/langs/spanish.js', function() {
  
        trad(exybore.universal);
      });
    }
    else if (localStorage.getItem('language') == "en") {
      $.getScript('https://exybore.github.io/exy-trad-platform/langs/english.js', function() {
  
        trad(exybore.universal);
      });
    }
    else {
      $.getScript('https://exybore.github.io/exy-trad-platform/langs/english.js', function() {
  
        trad(exybore.universal);
    });

    
  }
}
else {
  localStorage.setItem("language", "en");
  location.reload();
}

