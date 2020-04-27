"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);



const list = document.querySelector('.projects__list--js')
fetch('https://api.github.com/users/kwiatkowski1981/repos?sort=updated&direction=asc')
    .then(resp => resp.json())
    .then(resp => {
        const repos = resp;
        console.log(repos);
        for (const repo of repos) {
            const {description, name, html_url, download_html, } = repo

            list.innerHTML += 
            `<li class="projects__list--element">
                    <a href="${html_url}" class="projects__nav--list"> ${name}</a> 
                                         &nbsp  &nbsp &nbsp  
                     <a href="${html_url}/archive/master.zip" class="projects__nav--download"> download </a> 
                     <div style="clear: both;"> </br>
                     <p>${description}</p>
             </li>`
            console.log(`it's done`);
        }
    })
    .catch(err => {
        console.log(err);
    })


