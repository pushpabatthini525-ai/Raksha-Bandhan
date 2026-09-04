// Love Button
function showLove() {

    const message = document.getElementById("loveMessage");

    message.innerHTML =
        "❤️ Sending lots of love to every brother and sister! ❤️";

}


// Personalized Message
function generateMessage() {

    const sister =
        document.getElementById("sisterName").value;

    const brother =
        document.getElementById("brotherName").value;

    const result =
        document.getElementById("generatedMessage");


    if (sister === "" || brother === "") {

        result.innerHTML =
            "Please enter both names ❤️";

        return;
    }


    result.innerHTML =
        `Happy Raksha Bandhan, ${sister} & ${brother}! ❤️
        May your beautiful bond always remain strong,
        happy and full of love. 🪢✨`;

}


// Dark Mode
const themeButton =
    document.getElementById("themeBtn");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.innerHTML = "☀️";

    } else {

        themeButton.innerHTML = "🌙";

    }

});


// Countdown
function updateCountdown() {

    const today = new Date();

    let year = today.getFullYear();

    let rakshaBandhan =
        new Date(year, 7, 28, 0, 0, 0);


    if (today > rakshaBandhan) {

        rakshaBandhan =
            new Date(year + 1, 7, 28, 0, 0, 0);

    }


    const difference =
        rakshaBandhan - today;


    const days =
        Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference / (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    document.getElementById("countdown").innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

}


setInterval(updateCountdown, 1000);

updateCountdown();
