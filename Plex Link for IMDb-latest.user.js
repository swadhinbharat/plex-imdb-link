// ==UserScript==
// @name         Plex Link for IMDb
// @namespace    http://swadh.in/
// @version      0.1
// @description  Make the IMDb ranking a button with a link
// @author       Swadhin Patel
// @match        http*://raspberrypi.local:32400/web/*
// @match        https://app.plex.tv/desktop/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=plex.tv
// @grant        GM_addStyle
// @require      https://code.jquery.com/jquery-latest.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/arrive/2.4.1/arrive.min.js
// ==/UserScript==

(function() {
    'use strict';

    document.arrive('div[data-testid="metadata-ratings"]', function (el) {
        const title = document.querySelector('h1[data-testid="metadata-title"]').textContent
        const year = document.querySelector('span[data-testid="metadata-line1"]').textContent.split("    ")[0]
        el.addEventListener('click', (e)=>{
            window.open("https://www.google.com/search?q=" + title + ' ' + year,"_blank");
        })
        el.style.cursor = 'pointer';
    });
})();