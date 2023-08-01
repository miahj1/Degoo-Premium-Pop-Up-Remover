// ==UserScript==
// @name         Degoo Premium Pop-Up Remover
// @namespace    https://www.jabedmiah.com
// @version      1.0
// @description  Removes the Degoo premium pop that restricts usage of the web application.
// @author       miahj1
// @match        https://app.degoo.com/files/*
// @match        https://app.degoo.com/moments
// @match        https://app.degoo.com/search*
// @match        https://app.degoo.com/albums/*
// @icon         https://www.google.com/s2/favicons?domain=degoo.com
// ==/UserScript==

(new MutationObserver(check)).observe(document, {childList: true, subtree: true});

function check(changes, observer) {
    const popUpElements = {
        elementOne: document.querySelector(".ng-tns-c38-7.ng-star-inserted"),
        elementTwo: document.querySelector(".ng-tns-c38-6.ng-star-inserted"),
        elementThree: document.querySelector(".ng-tns-c38-3.ng-star-inserted"),
        elementFour: document.querySelector(".ng-tns-c38-8.ng-star-inserted")
    };

    if (popUpElements.elementOne) {
        observer.disconnect();
        popUpElements.elementOne.style.display = "none"
    } else if (popUpElements.elementTwo) {
        observer.disconnect();
        popUpElements.elementTwo.style.display = "none"
    } else if (popUpElements.elementThree) {
        observer.disconnect();
        popUpElements.elementThree.style.display = "none"
    } else if (popUpElements.elementFour){
        observer.disconnect();
        popUpElements.elementFour.style.display = "none"
    }

    document.body.style = 'overflow: unset'
};