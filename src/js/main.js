"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);
//  link do sciagania repo
//  <a href="${html_url}/archive/master.zip" class="projects__nav--download"> download </a> 

const list = document.querySelector('.projects__list--js')
fetch('https://api.github.com/users/kwiatkowski1981/repos?sort=updated&direction=asc')
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;
    console.log(repos);
    for (const repo of repos) {
      const { description, name, html_url, download_html, homepage} = repo

      list.innerHTML +=
        `<li class="projects__list--element">
            <div class="api__main">
            <img src="../assets/img/git1.svg" alt="Github logo" class="api__logo">
            <h4 class="api__heading4"> ${name}</h4>
            <p class="api__paragraph"> ${description}</p>
            </div>
            <div class="api__footer">
            <a href="${homepage}" class="projects__nav--list1"> <p class="api__paragraph--link api__paragraph--link2"> 
            <img src="../assets/img/demo1.svg" alt="small pc" class="api__demo"> Demo </p>
            </a>
            <a href="${html_url}" class="projects__nav--list2"> <p class="api__paragraph--link">
            <img src="../assets/img/code1.svg" alt="code icon" class="api__code">  GitHub </p>
            </a> 

               </div>      
             </li>`
      console.log(`it's done`);
    }
  })
  .catch(err => {
    console.log(err);
  })


