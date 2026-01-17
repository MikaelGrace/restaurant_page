export function InitialPageLoad() {
    const divContent = document.querySelector("#content");
    const introDiv = document.createElement("div");
    const imgSection = document.createElement("div");
    const image1 = document.createElement("img");
    const image2 = document.createElement("img");
    const image3 = document.createElement("img");
    const image4 = document.createElement("img");
    const image5 = document.createElement("img");
    const image6 = document.createElement("img");
    const makeOrderButton = document.createElement("button");


    introDiv.setAttribute("class", "intro");
    introDiv.textContent = "Welcome to the home of savory dishes that make you feel like a kid again...";

    imgSection.setAttribute("class", "image-section");

    image1.src = "https://lh5.googleusercontent.com/-boaKIdgEQqZWLAxqcub1MxHx1DR-SkkK7f4iBCSTUaQiEtVqHWZuuf12uxVOmRkrg1z3jee280oaE1hmbQs7aX0NpDgoT_Uvnke7E3Rljg7ZSY-KzC3VHsQbNm1X2MvZbUSl4Hsdo-d69Sy4YiPkd0";
    image2.src = "https://lh6.googleusercontent.com/Do6DtXylFh6Hud7cm94kt2CtlKXh7DrNT4vO8KF7E2bl0W9pxhiLMxCo8NTp72CjoTeewywDwc4Aqekb7XCNJmhD2Qc2rjz4rJ_aO9ljfHHa2Y9Tk9SMvWWLpVtn0iv8sTi8k0znPGZNIAn_kGS03h8";
    image3.src = "https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill";
    image4.src = "https://www.thefoodpocketguide.com/wp-content/uploads/sandra-wei-pgMKhgvf1O4-unsplash.jpg";
    image5.src = "https://cdn.shopify.com/s/files/1/0067/1576/8885/files/nigerian-wedding-dishes-how-to-choose-the-best-dishes-for-your-reception-party_1024x1024.jpg?v=1710256684";
    image6.src = "https://pan-african.net/wp-content/uploads/2021/03/Buka-stew.jpg";

    makeOrderButton.textContent = "Make Your Order";

    imgSection.appendChild(image1);
    imgSection.appendChild(image2);
    imgSection.appendChild(image3);
    imgSection.appendChild(image4);
    imgSection.appendChild(image5);
    imgSection.appendChild(image6);



    divContent.appendChild(introDiv);
    divContent.appendChild(imgSection);
    divContent.appendChild(makeOrderButton);


}