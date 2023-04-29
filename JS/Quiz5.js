const url = "https://api.coincap.io/v2/assets/?ids=bitcoin,ethereum,tether,binance-coin,usd-coin";

let numAttempts = 0;

const getHighestPrice = () => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let assets = data.data;
      let maxPrice = 0;
      let highestPriceAsset = "";
      assets.forEach(asset => {
        if (parseFloat(asset.priceUsd) > maxPrice) {
          maxPrice = parseFloat(asset.priceUsd);
          highestPriceAsset = asset.name;
        }
      });
      let resultMessage = `The highest price is for ${highestPriceAsset} at $${maxPrice.toFixed(2)}`;
      // document.getElementById("result").innerHTML = resultMessage;
      // Add event listeners to answer cards
      let answerCards = document.querySelectorAll(".stock");
      answerCards.forEach(card => {
        card.addEventListener("click", () => {
          let selectedAnswer = card.querySelector(".name").textContent;
          if (selectedAnswer === highestPriceAsset) {
            alert(`Congratulations, you selected the correct answer!\n\n${resultMessage}`);
            // Redirect to new page
            window.location.href = "Cong.html";
          } else {
            numAttempts++;
            alert(`Sorry, that is incorrect. Please try again.`);
          }
        });
      });
    })
    .catch(error => console.log(error));
};

getHighestPrice();
