const date = new Date();
const rendercalendar = () => {
    const monthdays = document.querySelector(".days");
    date.setDate(1);
    const lastday = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();
    const prevday = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();
    const firstdayin = date.getDay();
    const lastDayin = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();
    const nextday = 7 - lastDayin - 1;
    const months = [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık",
    ];
    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    document.querySelector(".date p").innerHTML = new Date().toDateString();

    let days = "";
    for (var y = firstdayin; y > 0; y--) {
        days += `<div class="prev-date">${prevday-y+1}</div>`;
    }
    for (var i = 1; i <= lastday; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }
    for (var k = 1; k <= nextday; k++) {
        days += `<div class="next-date">${k}</div>`;
        monthdays.innerHTML = days;
    }
}
document.querySelector(".prev").addEventListener('click', function geri() {
    date.setMonth(date.getMonth() - 1)
    rendercalendar();
});
document.querySelector(".next").addEventListener('click', function ileri() {
    date.setMonth(date.getMonth() + 1)
    rendercalendar();
});
rendercalendar();