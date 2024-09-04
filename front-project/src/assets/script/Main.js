// src/script/Main.js

document.addEventListener('DOMContentLoaded', () => {
   const script = document.createElement('script');
   script.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
   script.async = true;
   document.head.appendChild(script);

   const menuBg = document.querySelector('.bg_gnb');
   const menuLi = document.querySelectorAll('.gnb li');
   const depth1Li = document.querySelectorAll('.gnb > li');
   const depth2 = document.querySelectorAll('.gnb > li > div');
   const logo = document.querySelector('h1');
   const lang = document.querySelector('.lang');

   if (menuLi.length) {
       menuLi.forEach((li) => li.addEventListener('mouseenter', showMenu));
       menuLi.forEach((li) => li.addEventListener('mouseleave', hideMenu));
   }

   if (depth1Li.length) {
       depth1Li.forEach((li) => li.addEventListener('focusin', (e) => {
           const eachBg = e.currentTarget.lastElementChild;
           showMenu();
           depth2.forEach((div) => {
               div.style.background = 'none';
           });
           eachBg.style.background = '#fff';
       }));
   }

   if (logo) {
       logo.addEventListener('focusin', hideMenu);
   }

   if (lang) {
       lang.addEventListener('focusin', hideMenu);
   }

   function showMenu() {
       let hig = 0;
       depth2.forEach((div) => {
           div.style.display = 'block';
           if (div.getAttribute('style')) {
               let divHig = div.clientHeight;
               if (hig <= divHig) hig = divHig;
           }
       });

       depth2.forEach((div) => {
           div.style.height = `${hig}px`;
       });
       if (menuBg) {
           menuBg.style.display = 'block';
           menuBg.style.height = `${hig}px`;
       }
   }

   function hideMenu() {
       depth2.forEach((div) => div.style.display = 'none');
       if (menuBg) {
           menuBg.style.display = 'none';
       }
   }
});