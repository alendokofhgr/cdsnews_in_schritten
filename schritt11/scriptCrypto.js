async function getCryptoPrice(pairURLCode, pairInJSONCode)
{
  let response=await fetch('https://api.kraken.com/0/public/Ticker?pair='+pairURLCode);
  let jsonOnly=await response.json();
  let btcPriceInEur=extractPrice(jsonOnly,pairInJSONCode);
  return btcPriceInEur;
}

function extractPrice(data, pairInJSONCode){
  let cryptoPriceInEur=parseFloat(data['result'][pairInJSONCode]['a'][0]);
  let result=Number(cryptoPriceInEur).toFixed(2);
  return result;
}

async function getMultipleCryptoPrices(){
  let btcPriceInEur= await getCryptoPrice("XBTEUR","XXBTZEUR");
  let ethPriceInEur= await getCryptoPrice("ETHEUR","XETHZEUR");
  let ltcPriceInEur= await getCryptoPrice("LTCEUR","XLTCZEUR");

  let btcInfo={title:"Bitcoin",price:btcPriceInEur};
  let ethInfo={title:"Ethereum",price:ethPriceInEur};
  let ltcInfo={title:"Litecoin",price:ltcPriceInEur};

  let result=[btcInfo,ethInfo,ltcInfo];
  console.log(result);
  return result;
}

function showCryptoPrices(cryptoPrices) {
  const cryptoContainer = document.getElementById('preise');

  cryptoPrices.forEach(crypto => {
      // Create a new div element for each crpyto
      const cryptoDiv = document.createElement('div');
      cryptoDiv.classList.add('film'); // Fügen Sie eine Klasse hinzu, um das Styling zu erleichtern

      // Create a new <h2> element for the title
      const title = document.createElement('h2');
      title.textContent = crypto.title;
      cryptoDiv.appendChild(title);

      // Create a new <p> element for the price
      const price = document.createElement('p');
      price.textContent = "Preis: " +crypto.price+ " EUR";
      cryptoDiv.appendChild(price);

      // Add the new div element to the filmeContainer
      cryptoContainer.appendChild(cryptoDiv);
  });
}

showCryptoPrices(await getMultipleCryptoPrices());
