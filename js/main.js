!function(I){var g={};function c(n){if(g[n])return g[n].exports;var C=g[n]={i:n,l:!1,exports:{}};return I[n].call(C.exports,C,C.exports,c),C.l=!0,C.exports}c.m=I,c.c=g,c.d=function(I,g,n){c.o(I,g)||Object.defineProperty(I,g,{enumerable:!0,get:n})},c.r=function(I){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(I,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(I,"__esModule",{value:!0})},c.t=function(I,g){if(1&g&&(I=c(I)),8&g)return I;if(4&g&&"object"==typeof I&&I&&I.__esModule)return I;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:I}),2&g&&"string"!=typeof I)for(var C in I)c.d(n,C,function(g){return I[g]}.bind(null,C));return n},c.n=function(I){var g=I&&I.__esModule?function(){return I.default}:function(){return I};return c.d(g,"a",g),g},c.o=function(I,g){return Object.prototype.hasOwnProperty.call(I,g)},c.p="",c(c.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\n\n// service worker registration - remove if you\'re not going to use it\n\nif ("serviceWorker" in navigator) {\n  window.addEventListener("load", function() {\n    navigator.serviceWorker.register("serviceworker.js").then(\n      function(registration) {\n        // Registration was successful\n        console.log(\n          "ServiceWorker registration successful with scope: ",\n          registration.scope\n        );\n      },\n      function(err) {\n        // registration failed :(\n        console.log("ServiceWorker registration failed: ", err);\n      }\n    );\n  });\n}\n\n// place your code below\n\nconsole.log(`Hi there. It\'s nice to see You here.`);\n//  link do sciagania repo\n//  <a href="${html_url}/archive/master.zip" class="projects__nav--download"> download </a>\n\nconst list = document.querySelector(".api__list--js");\nfetch(\n  "https://api.github.com/users/kwiatkowski1981/repos?sort=updated&direction=asc"\n)\n  .then(resp => resp.json())\n  .then(resp => {\n    const repos = resp;\n    for (const repo of repos) {\n      const { description, name, html_url, download_html, homepage } = repo;\n\n      list.innerHTML += `<li class="api__list--element"> \n            <div class="api__main">\n            \n\n            <svg  viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="api__logo">\n            <path d="M19.9844 2.97925C10.3242 2.97534 2.5 10.7957 2.5 20.448C2.5 28.0808 7.39453 34.5691 14.2109 \n            36.9519C15.1289 37.1824 14.9883 36.53 14.9883 36.0847V33.0574C9.6875 33.6785 9.47266 30.1707 9.11719 \n            29.5847C8.39844 28.3582 6.69922 28.0457 7.20703 27.4597C8.41406 26.8386 9.64453 27.616 11.0703 29.7214C12.1016 \n            31.2488 14.1133 30.991 15.1328 30.7371C15.3555 29.8191 15.832 28.9988 16.4883 28.3621C10.9961 27.3777 8.70703 \n            24.0261 8.70703 20.0417C8.70703 18.1082 9.34375 16.3308 10.5938 14.8972C9.79688 12.5339 10.668 10.5105 10.7852 \n            10.2097C13.0547 10.0066 15.4141 11.8347 15.5977 11.9793C16.8867 11.6316 18.3594 11.448 20.0078 11.448C21.6641 \n            11.448 23.1406 11.6394 24.4414 11.991C24.8828 11.655 27.0703 10.0847 29.1797 10.2761C29.293 10.5769 30.1445 \n            12.5535 29.3945 14.8855C30.6602 16.323 31.3047 18.116 31.3047 20.0535C31.3047 24.0457 29 27.4011 23.4922 \n            28.3699C23.9639 28.8338 24.3385 29.3871 24.5941 29.9974C24.8496 30.6078 24.981 31.2629 24.9805 \n            31.9246V36.3191C25.0117 36.6707 24.9805 37.0183 25.5664 37.0183C32.4844 34.6863 37.4648 28.1511 37.4648 \n            20.4519C37.4648 10.7957 29.6367 2.97925 19.9844 2.97925Z" fill="#171F3F"/>\n            </svg>\n\n\n\n      \n            <h4 class="api__heading4"> ${name}</h4>\n            <p class="api__paragraph"> ${description}</p>\n            </div>\n            <div class="api__footer">\n            <a href="${homepage}" class="api__nav--list1"> <p class="api__paragraph--link api__paragraph--link2"> \n            <img src="../assets/img/demo1.svg" alt="small pc" class="api__demo"> Demo </p>\n            </a>\n            <a href="${html_url}" class="api__nav--list2"> <p class="api__paragraph--link">\n            <img src="../assets/img/code1.svg" alt="code icon" class="api__code">  GitHub </p>\n            </a> \n\n               </div>      \n             </li>`;\n      console.log(`API worked correctly, all jobs are done.`);\n    }\n  })\n  .catch(err => {\n    console.log(err);\n  });\n\n\n\n\n\nconst arrowup = document.querySelector(".arrowup");\n\nwindow.addEventListener("scroll", () => {\n  if (window.pageYOffset > 100) {\n    arrowup.classList.add("arrowup--visible");\n    arrowup.classList.remove("arrowup");\n  } else {\n    arrowup.classList.remove("arrowup--visible");\n    arrowup.classList.add("arrowup");\n  }\n});\nconsole.log(`pozdro dla Matiego (https://maczi01.github.io/) z podziękowaniem za scrolera 😂`)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVEQUF1RDs7QUFFcEU7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0EseUNBQXlDLEtBQUs7QUFDOUMseUNBQXlDLFlBQVk7QUFDckQ7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOzs7Ozs7QUFNSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcblxuaWYgKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoXCJzZXJ2aWNld29ya2VyLmpzXCIpLnRoZW4oXG4gICAgICBmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIFwiU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiBcIixcbiAgICAgICAgICByZWdpc3RyYXRpb24uc2NvcGVcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogXCIsIGVycik7XG4gICAgICB9XG4gICAgKTtcbiAgfSk7XG59XG5cbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xuXG5jb25zb2xlLmxvZyhgSGkgdGhlcmUuIEl0J3MgbmljZSB0byBzZWUgWW91IGhlcmUuYCk7XG4vLyAgbGluayBkbyBzY2lhZ2FuaWEgcmVwb1xuLy8gIDxhIGhyZWY9XCIke2h0bWxfdXJsfS9hcmNoaXZlL21hc3Rlci56aXBcIiBjbGFzcz1cInByb2plY3RzX19uYXYtLWRvd25sb2FkXCI+IGRvd25sb2FkIDwvYT5cblxuY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBpX19saXN0LS1qc1wiKTtcbmZldGNoKFxuICBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMva3dpYXRrb3dza2kxOTgxL3JlcG9zP3NvcnQ9dXBkYXRlZCZkaXJlY3Rpb249YXNjXCJcbilcbiAgLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcbiAgLnRoZW4ocmVzcCA9PiB7XG4gICAgY29uc3QgcmVwb3MgPSByZXNwO1xuICAgIGZvciAoY29uc3QgcmVwbyBvZiByZXBvcykge1xuICAgICAgY29uc3QgeyBkZXNjcmlwdGlvbiwgbmFtZSwgaHRtbF91cmwsIGRvd25sb2FkX2h0bWwsIGhvbWVwYWdlIH0gPSByZXBvO1xuXG4gICAgICBsaXN0LmlubmVySFRNTCArPSBgPGxpIGNsYXNzPVwiYXBpX19saXN0LS1lbGVtZW50XCI+IFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFwaV9fbWFpblwiPlxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDxzdmcgIHZpZXdCb3g9XCIwIDAgNDAgNDBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImFwaV9fbG9nb1wiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xOS45ODQ0IDIuOTc5MjVDMTAuMzI0MiAyLjk3NTM0IDIuNSAxMC43OTU3IDIuNSAyMC40NDhDMi41IDI4LjA4MDggNy4zOTQ1MyAzNC41NjkxIDE0LjIxMDkgXG4gICAgICAgICAgICAzNi45NTE5QzE1LjEyODkgMzcuMTgyNCAxNC45ODgzIDM2LjUzIDE0Ljk4ODMgMzYuMDg0N1YzMy4wNTc0QzkuNjg3NSAzMy42Nzg1IDkuNDcyNjYgMzAuMTcwNyA5LjExNzE5IFxuICAgICAgICAgICAgMjkuNTg0N0M4LjM5ODQ0IDI4LjM1ODIgNi42OTkyMiAyOC4wNDU3IDcuMjA3MDMgMjcuNDU5N0M4LjQxNDA2IDI2LjgzODYgOS42NDQ1MyAyNy42MTYgMTEuMDcwMyAyOS43MjE0QzEyLjEwMTYgXG4gICAgICAgICAgICAzMS4yNDg4IDE0LjExMzMgMzAuOTkxIDE1LjEzMjggMzAuNzM3MUMxNS4zNTU1IDI5LjgxOTEgMTUuODMyIDI4Ljk5ODggMTYuNDg4MyAyOC4zNjIxQzEwLjk5NjEgMjcuMzc3NyA4LjcwNzAzIFxuICAgICAgICAgICAgMjQuMDI2MSA4LjcwNzAzIDIwLjA0MTdDOC43MDcwMyAxOC4xMDgyIDkuMzQzNzUgMTYuMzMwOCAxMC41OTM4IDE0Ljg5NzJDOS43OTY4OCAxMi41MzM5IDEwLjY2OCAxMC41MTA1IDEwLjc4NTIgXG4gICAgICAgICAgICAxMC4yMDk3QzEzLjA1NDcgMTAuMDA2NiAxNS40MTQxIDExLjgzNDcgMTUuNTk3NyAxMS45NzkzQzE2Ljg4NjcgMTEuNjMxNiAxOC4zNTk0IDExLjQ0OCAyMC4wMDc4IDExLjQ0OEMyMS42NjQxIFxuICAgICAgICAgICAgMTEuNDQ4IDIzLjE0MDYgMTEuNjM5NCAyNC40NDE0IDExLjk5MUMyNC44ODI4IDExLjY1NSAyNy4wNzAzIDEwLjA4NDcgMjkuMTc5NyAxMC4yNzYxQzI5LjI5MyAxMC41NzY5IDMwLjE0NDUgXG4gICAgICAgICAgICAxMi41NTM1IDI5LjM5NDUgMTQuODg1NUMzMC42NjAyIDE2LjMyMyAzMS4zMDQ3IDE4LjExNiAzMS4zMDQ3IDIwLjA1MzVDMzEuMzA0NyAyNC4wNDU3IDI5IDI3LjQwMTEgMjMuNDkyMiBcbiAgICAgICAgICAgIDI4LjM2OTlDMjMuOTYzOSAyOC44MzM4IDI0LjMzODUgMjkuMzg3MSAyNC41OTQxIDI5Ljk5NzRDMjQuODQ5NiAzMC42MDc4IDI0Ljk4MSAzMS4yNjI5IDI0Ljk4MDUgXG4gICAgICAgICAgICAzMS45MjQ2VjM2LjMxOTFDMjUuMDExNyAzNi42NzA3IDI0Ljk4MDUgMzcuMDE4MyAyNS41NjY0IDM3LjAxODNDMzIuNDg0NCAzNC42ODYzIDM3LjQ2NDggMjguMTUxMSAzNy40NjQ4IFxuICAgICAgICAgICAgMjAuNDUxOUMzNy40NjQ4IDEwLjc5NTcgMjkuNjM2NyAyLjk3OTI1IDE5Ljk4NDQgMi45NzkyNVpcIiBmaWxsPVwiIzE3MUYzRlwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuXG5cblxuICAgICAgXG4gICAgICAgICAgICA8aDQgY2xhc3M9XCJhcGlfX2hlYWRpbmc0XCI+ICR7bmFtZX08L2g0PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJhcGlfX3BhcmFncmFwaFwiPiAke2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFwaV9fZm9vdGVyXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiJHtob21lcGFnZX1cIiBjbGFzcz1cImFwaV9fbmF2LS1saXN0MVwiPiA8cCBjbGFzcz1cImFwaV9fcGFyYWdyYXBoLS1saW5rIGFwaV9fcGFyYWdyYXBoLS1saW5rMlwiPiBcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9kZW1vMS5zdmdcIiBhbHQ9XCJzbWFsbCBwY1wiIGNsYXNzPVwiYXBpX19kZW1vXCI+IERlbW8gPC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiR7aHRtbF91cmx9XCIgY2xhc3M9XCJhcGlfX25hdi0tbGlzdDJcIj4gPHAgY2xhc3M9XCJhcGlfX3BhcmFncmFwaC0tbGlua1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaW1nL2NvZGUxLnN2Z1wiIGFsdD1cImNvZGUgaWNvblwiIGNsYXNzPVwiYXBpX19jb2RlXCI+ICBHaXRIdWIgPC9wPlxuICAgICAgICAgICAgPC9hPiBcblxuICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgXG4gICAgICAgICAgICAgPC9saT5gO1xuICAgICAgY29uc29sZS5sb2coYEFQSSB3b3JrZWQgY29ycmVjdGx5LCBhbGwgam9icyBhcmUgZG9uZS5gKTtcbiAgICB9XG4gIH0pXG4gIC5jYXRjaChlcnIgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH0pO1xuXG5cblxuXG5cbmNvbnN0IGFycm93dXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFycm93dXBcIik7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDEwMCkge1xuICAgIGFycm93dXAuY2xhc3NMaXN0LmFkZChcImFycm93dXAtLXZpc2libGVcIik7XG4gICAgYXJyb3d1cC5jbGFzc0xpc3QucmVtb3ZlKFwiYXJyb3d1cFwiKTtcbiAgfSBlbHNlIHtcbiAgICBhcnJvd3VwLmNsYXNzTGlzdC5yZW1vdmUoXCJhcnJvd3VwLS12aXNpYmxlXCIpO1xuICAgIGFycm93dXAuY2xhc3NMaXN0LmFkZChcImFycm93dXBcIik7XG4gIH1cbn0pO1xuY29uc29sZS5sb2coYHBvemRybyBkbGEgTWF0aWVnbyAoaHR0cHM6Ly9tYWN6aTAxLmdpdGh1Yi5pby8pIHogcG9kemnEmWtvd2FuaWVtIHphIHNjcm9sZXJhIPCfmIJgKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')}]);