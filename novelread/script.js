document.getElementById("search-bar").addEventListener("input", function () {
    let searchText = this.value.toLowerCase(); // รับค่าที่พิมพ์และแปลงเป็นตัวพิมพ์เล็ก
    let novels = document.querySelectorAll(".novel");

    novels.forEach(novel => {
        let title = novel.querySelector("h3").innerText.toLowerCase();
        if (title.includes(searchText)) {
            novel.style.display = "block";
        } else {
            novel.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let novels = JSON.parse(localStorage.getItem("novels")) || [
        { img: "1.jpg", title: "ดอกไม้เน่า", link: "novel1.html" },
        { img: "2.jpg", title: "วัยว้าวุ่น", link: "novel2.html" },
        { img: "3.jpg", title: "นนท์ เกย์", link: "novel3.html" }
    ];

    const container = document.getElementById("novel-container");

    function renderNovels() {
        container.innerHTML = novels.map(novel => `
            <a href="${novel.link}" class="novel">
                <img src="${novel.img}" alt="${novel.title}">
                <h3>${novel.title}</h3>
            </a>
        `).join('');
    }

    renderNovels();
});