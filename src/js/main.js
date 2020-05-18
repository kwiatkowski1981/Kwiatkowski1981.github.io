"use strict";

// service worker registration - remove if you're not going to use it

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("serviceworker.js").then(
      function(registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function(err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

// place your code below

console.log(`Hi there. It's nice to see You here.`);
//  link do sciagania repo
//  <a href="${html_url}/archive/master.zip" class="projects__nav--download"> download </a>

const list = document.querySelector(".api__list--js");
fetch(
  "https://api.github.com/users/kwiatkowski1981/repos?sort=updated&direction=asc"
)
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;
    for (const repo of repos) {
      const { description, name, html_url, download_html, homepage } = repo;

      list.innerHTML += `<li class="api__list--element api__anime"> 
            <div class="api__main">
            

            <svg  viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="api__logo">
            <path d="M19.9844 2.97925C10.3242 2.97534 2.5 10.7957 2.5 20.448C2.5 28.0808 7.39453 34.5691 14.2109 
            36.9519C15.1289 37.1824 14.9883 36.53 14.9883 36.0847V33.0574C9.6875 33.6785 9.47266 30.1707 9.11719 
            29.5847C8.39844 28.3582 6.69922 28.0457 7.20703 27.4597C8.41406 26.8386 9.64453 27.616 11.0703 29.7214C12.1016 
            31.2488 14.1133 30.991 15.1328 30.7371C15.3555 29.8191 15.832 28.9988 16.4883 28.3621C10.9961 27.3777 8.70703 
            24.0261 8.70703 20.0417C8.70703 18.1082 9.34375 16.3308 10.5938 14.8972C9.79688 12.5339 10.668 10.5105 10.7852 
            10.2097C13.0547 10.0066 15.4141 11.8347 15.5977 11.9793C16.8867 11.6316 18.3594 11.448 20.0078 11.448C21.6641 
            11.448 23.1406 11.6394 24.4414 11.991C24.8828 11.655 27.0703 10.0847 29.1797 10.2761C29.293 10.5769 30.1445 
            12.5535 29.3945 14.8855C30.6602 16.323 31.3047 18.116 31.3047 20.0535C31.3047 24.0457 29 27.4011 23.4922 
            28.3699C23.9639 28.8338 24.3385 29.3871 24.5941 29.9974C24.8496 30.6078 24.981 31.2629 24.9805 
            31.9246V36.3191C25.0117 36.6707 24.9805 37.0183 25.5664 37.0183C32.4844 34.6863 37.4648 28.1511 37.4648 
            20.4519C37.4648 10.7957 29.6367 2.97925 19.9844 2.97925Z" fill="#171F3F"/>
            </svg>



      
            <h4 class="api__heading4"> ${name}</h4>
            <p class="api__paragraph"> ${description}</p>
            </div>
            <div class="api__footer api__anime--footer">
            <a href="${homepage}" class="api__nav--list1"> <p class="api__paragraph--link api__paragraph--link2 api__anime"> 
            <img src="../assets/img/demo1.svg" alt="small pc" class="api__demo"> Demo </p>
            </a>
            <a href="${html_url}" class="api__nav--list2"> <p class="api__paragraph--link api__anime">
            <img src="../assets/img/code1.svg" alt="code icon" class="api__code">  GitHub </p>
            </a> 

               </div>      
             </li>`;
      console.log(`API worked correctly, all jobs are done.`);
    }
  })
  .catch(err => {
    console.log(err);
  });





const arrowup = document.querySelector(".arrowup");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    arrowup.classList.add("arrowup--visible");
    arrowup.classList.remove("arrowup");
  } else {
    arrowup.classList.remove("arrowup--visible");
    arrowup.classList.add("arrowup");
  }
});
console.log(`pozdro dla Matiego (https://maczi01.github.io/) z podziękowaniem za scrolera 😂`)