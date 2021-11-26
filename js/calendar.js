const calendar = document.querySelector("h3#calendar");

function getCalendar() {
    const date = new Date();
    const years = String(date.getFullYear()).padStart(4,"0");
    const months = String(date.getMonth() + 1).padStart(2,"0");
    const dates = String(date.getDate()).padStart(2,"0");

    const daysArray = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    const days = daysArray[date.getDay()];
    
    calendar.innerText = `${years}년 ${months}월 ${dates}일 ${days}`;
}

getCalendar();