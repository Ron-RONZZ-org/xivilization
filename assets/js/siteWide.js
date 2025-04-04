
function includeHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = data;
            } else {
                console.error(`Element with ID '${elementId}' not found.`);
            }
        })
        .catch(error => console.error('Erreur de chargement du fichier:', error));
}

// chargeur header, footer
document.addEventListener("DOMContentLoaded", function () {
    includeHTML("header.html", "navbar");
    includeHTML("footer.html", "footer");
});

// chargeur id=gallery
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel-images");
    const images = document.querySelectorAll(".carousel-images img");
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const nextBtn = document.querySelector(".carousel-btn.next");

    let index = 0;

    const updateCarousel = () => {
        const width = images[0].clientWidth;
        carousel.style.transform = `translateX(${-index * width}px)`;
    };

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % images.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    });

    window.addEventListener("resize", updateCarousel);
});

// chargeur id=news

document.addEventListener("DOMContentLoaded", () => {
    const articles = [
        {
            title: "小学博士是如何炼成的",
            cover: "assets/images/daocteurXi.jpeg",
            link: "daocteurXi.html"
        },
        {
            title: "维尼语录库",
            cover: "assets/images/loosenClothes.jpeg",
            link: "speech.html"
        },
        {
            title: "认真聊聊维尼国（English）",
            cover: "assets/images/hongguangBridge.jpg",
            link: "https://ronzz.org/china/"
        }
    ];

    const newsSection = document.querySelector("#news");

    articles.forEach(article => {
        const card = document.createElement("div");
        card.className = "news-card";
        card.innerHTML = `
            <a href="${article.link}">
                <img src="${article.cover}" alt="img:${article.title}">
                <h3>${article.title}</h3>
            </a>
        `;
        newsSection.appendChild(card);
    });
});