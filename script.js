// ================================
// PENGUIN INTERACTIONS
// ================================

document.addEventListener("DOMContentLoaded", () => {

    const penguin = document.querySelector(".penguin");
    const eyes = document.querySelectorAll(".eye");
    const eyelids = document.querySelectorAll(".eye-lid");
    const sun = document.querySelector(".sun");
    const shirtText = document.querySelector(".shirt p");

    // ==========================
    // PISCAR OLHOS
    // ==========================

    function blink() {
        eyelids.forEach(eyelid => {
            eyelid.style.height = "100%";

            setTimeout(() => {
                eyelid.style.height = "";
            }, 150);
        });
    }

    setInterval(() => {
        blink();
    }, Math.random() * 4000 + 2000);

    // ==========================
    // OLHOS SEGUEM O MOUSE
    // ==========================

    document.addEventListener("mousemove", (event) => {

        const x = (event.clientX / window.innerWidth - 0.5) * 8;
        const y = (event.clientY / window.innerHeight - 0.5) * 8;

        eyes.forEach(eye => {
            eye.style.transform =
                `translate(${x}px, ${y}px)`;
        });

    });

    // ==========================
    // MUDAR DIA / NOITE
    // ==========================

    let nightMode = false;

    sun.addEventListener("click", () => {

        if (!nightMode) {

            document.body.style.background =
                "linear-gradient(45deg, #091540, #000000)";

            sun.style.backgroundColor = "#f0f0f0";

            nightMode = true;

        } else {

            document.body.style.background =
                "linear-gradient(45deg, rgb(118, 201, 255), rgb(247, 255, 222))";

            sun.style.backgroundColor = "yellow";

            nightMode = false;
        }

    });

    // ==========================
    // PULO DO PINGUIM
    // ==========================

    penguin.addEventListener("click", () => {

        penguin.animate(
            [
                { transform: "translateY(0px)" },
                { transform: "translateY(-120px)" },
                { transform: "translateY(0px)" }
            ],
            {
                duration: 700,
                easing: "ease-out"
            }
        );

    });

    // ==========================
    // TROCAR FRASE DA CAMISETA
    // ==========================

    const messages = [
        "I CSS",
        "I JS",
        "I HTML",
        "I CODE",
        "I WEB",
        "I LOVE CSS"
    ];

    shirtText.addEventListener("click", () => {

        const random =
            Math.floor(Math.random() * messages.length);

        shirtText.textContent = messages[random];

    });

});
