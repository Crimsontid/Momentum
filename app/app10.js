const title = document.querySelector(".hello:first-child h1");



function handleTitleClick() {
    title.style.color = "red";/* h1의 css style을 JS로 변경 가능 */
}

function handleMouseEnter() {
    title.innerText = "Mouse is Here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is Gone!";
}




title.addEventListener("click", handleTitleClick);  /* "click" event 발생시 handleTitleClick 함수 호출*/
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);