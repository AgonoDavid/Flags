const container = document.getElementById("wrapper");

const details = [
  {
    id: 1,
    name: "Nigeria",
    Country_code: 001,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
  },
  {
    id: 2,
    name: "Spain",
    Country_code: 002,
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png"
  },
  {
    id: 3,
    name: "Australia",
    Country_code: 003,
    img:"https://www.flagsaustralia.com.au/images/Australia-1908-(blue)l.jpg"

}
];

const createCard = (detail) => {
    //we created an empty div
    const cardElement = document.createElement("div")
    cardElement.classList.add("card_container");


    const innerContent = `
        <div class="info">
        <div class="image_container">
        <img src=${detail.img} alt="flag"/>
            <h3> ${detail.name} </h3>
            <p> ${detail.Country_code} </p>
            
        </div>
    `;

    cardElement.innerHTML = innerContent;

    container.appendChild(cardElement);
}


details.map((detail) => {
  return createCard(detail);
});