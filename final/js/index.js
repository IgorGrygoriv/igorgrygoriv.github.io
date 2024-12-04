let dataObj = {};
window.onload = async function handleApi() {
  const apiKey = "CG-Eqd7N9RCLUV68tt4MtmHkjdh";
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1?x_cg_demo_api_key=" +
    apiKey;
  const options = {
    method: "GET",
  };

  const response = await fetch(url, options);
  const result = await response.text();
  const myObj = JSON.parse(result);

  dataObj = myObj;

  for (let i = 0; i < myObj.length; i++) {
    const crypto = myObj[i];
    const img = crypto.image;
    const button = document.getElementById(crypto.name);

    if (button) {
      if (crypto.price_change_percentage_24h >= 0) {
        button.innerHTML =
          "<div class='row'><div class='col-md-4'><img src=" +
          img +
          " style='width: 25px; height: 25px' class='m-2'>" +
          crypto.name +
          " (" +
          crypto.symbol +
          ")</div><div class='col-md-4'>$" +
          crypto.current_price.toFixed(2) +
          "</div><div class='col-md-4 text-success'>" +
          crypto.price_change_percentage_24h.toFixed(2) +
          "%</div></div> ";
      } else {
        button.innerHTML =
          "<div class='row'><div class='col-md-4'><img src=" +
          img +
          " style='width: 25px; height: 25px' class='m-2'>" +
          crypto.name +
          " (" +
          crypto.symbol +
          ")</div><div class='col-md-4'>$" +
          crypto.current_price.toFixed(2) +
          "</div><div class='col-md-4 text-danger'>" +
          crypto.price_change_percentage_24h.toFixed(2) +
          "%</div></div> ";
      }
    }
  }
};

function filterByPriceDescending() {
  document.getElementById("buttons").innerHTML = "";
  const sortedData = dataObj.sort((a, b) => b.current_price - a.current_price);

  for (let i = 0; i < sortedData.length; i++) {
    const crypto = sortedData[i];
    const img = crypto.image;
    if(crypto.price_change_percentage_24h > 0){ 
    document.getElementById("buttons").innerHTML +=
      "<a href='./coinsHtml/" +
      crypto.name +
      ".html' class='btn btn-sm btn-hover' style=' background-color: #4a5568; color: #cbd5e0; text-align: left;'><div class='row'><div class='col-md-4'><img src=" +
      img +
      " style='width: 25px; height: 25px' class='m-2'>" +
      crypto.name +
      " (" +
      crypto.symbol +
      ")</div><div class='col-md-4'>$" +
      crypto.current_price.toFixed(2) +
      "</div><div class='col-md-4 text-success'>" +
      crypto.price_change_percentage_24h.toFixed(2) +
      "%</div></div></a> "; }
      else {
        document.getElementById("buttons").innerHTML +=
      "<a href='./coinsHtml/" +
      crypto.name +
      ".html' class='btn btn-sm btn-hover' style=' background-color: #4a5568; color: #cbd5e0; text-align: left;'><div class='row'><div class='col-md-4'><img src=" +
      img +
      " style='width: 25px; height: 25px' class='m-2'>" +
      crypto.name +
      " (" +
      crypto.symbol +
      ")</div><div class='col-md-4'>$" +
      crypto.current_price.toFixed(2) +
      "</div><div class='col-md-4 text-danger'>" +
      crypto.price_change_percentage_24h.toFixed(2) +
      "%</div></div></a> ";
      }
  }
};

function filterByPriceAscending() {
  document.getElementById("buttons").innerHTML = "";
  const sortedData = dataObj.sort((a, b) => a.current_price - b.current_price);

  for (let i = 0; i < sortedData.length; i++) {
    const crypto = sortedData[i];
    const img = crypto.image;
    if(crypto.price_change_percentage_24h > 0){ 
    document.getElementById("buttons").innerHTML +=
      "<a href='./coinsHtml/" +
      crypto.name +
      ".html' class='btn btn-sm btn-hover' style=' background-color: #4a5568; color: #cbd5e0; text-align: left;'><div class='row'><div class='col-md-4'><img src=" +
      img +
      " style='width: 25px; height: 25px' class='m-2'>" +
      crypto.name +
      " (" +
      crypto.symbol +
      ")</div><div class='col-md-4'>$" +
      crypto.current_price.toFixed(2) +
      "</div><div class='col-md-4 text-success'>" +
      crypto.price_change_percentage_24h.toFixed(2) +
      "%</div></div></a> "; }
      else {
        document.getElementById("buttons").innerHTML +=
      "<a href='./coinsHtml/" +
      crypto.name +
      ".html' class='btn btn-sm btn-hover' style=' background-color: #4a5568; color: #cbd5e0; text-align: left;'><div class='row'><div class='col-md-4'><img src=" +
      img +
      " style='width: 25px; height: 25px' class='m-2'>" +
      crypto.name +
      " (" +
      crypto.symbol +
      ")</div><div class='col-md-4'>$" +
      crypto.current_price.toFixed(2) +
      "</div><div class='col-md-4 text-danger'>" +
      crypto.price_change_percentage_24h.toFixed(2) +
      "%</div></div></a> ";
      }
  }
};

function filterByPercentAscending() {
  document.getElementById("buttons").innerHTML = "";
  const sortedData = dataObj.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h);

  for (let i = 0; i < sortedData.length; i++) {
    const crypto = sortedData[i];
    const img = crypto.image;
    if(crypto.price_change_percentage_24h > 0){ 
    document.getElementById("buttons").innerHTML +=
      "<a href='./coinsHtml/" +
      crypto.name +
      ".html' class='btn btn-sm btn-hover' style=' background-color: #4a5568; color: #cbd5e0; text-align: left;'><div class='row'><div class='col-md-4'><img src=" +
      img +
      " style='width: 25px; height: 25px' class='m-2'>" +
      crypto.name +
      " (" +
      crypto.symbol +
      ")</div><div class='col-md-4'>$" +
      crypto.current_price.toFixed(2) +
      "</div><div class='col-md-4 text-success'>" +
      crypto.price_change_percentage_24h.toFixed(2) +
      "%</div></div></a> "; }
      else {
        document.getElementById("buttons").innerHTML +=
      "<a href='./coinsHtml/" +
      crypto.name +
      ".html' class='btn btn-sm btn-hover' style=' background-color: #4a5568; color: #cbd5e0; text-align: left;'><div class='row'><div class='col-md-4'><img src=" +
      img +
      " style='width: 25px; height: 25px' class='m-2'>" +
      crypto.name +
      " (" +
      crypto.symbol +
      ")</div><div class='col-md-4'>$" +
      crypto.current_price.toFixed(2) +
      "</div><div class='col-md-4 text-danger'>" +
      crypto.price_change_percentage_24h.toFixed(2) +
      "%</div></div></a> ";
      }
  }
};

function filterByPercentDescending() {
  document.getElementById("buttons").innerHTML = "";
  const sortedData = dataObj.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);

  for (let i = 0; i < sortedData.length; i++) {
    const crypto = sortedData[i];
    const img = crypto.image;
    if(crypto.price_change_percentage_24h > 0){ 
    document.getElementById("buttons").innerHTML +=
      "<a href='./coinsHtml/" +
      crypto.name +
      ".html' class='btn btn-sm btn-hover' style=' background-color: #4a5568; color: #cbd5e0; text-align: left;'><div class='row'><div class='col-md-4'><img src=" +
      img +
      " style='width: 25px; height: 25px' class='m-2'>" +
      crypto.name +
      " (" +
      crypto.symbol +
      ")</div><div class='col-md-4'>$" +
      crypto.current_price.toFixed(2) +
      "</div><div class='col-md-4 text-success'>" +
      crypto.price_change_percentage_24h.toFixed(2) +
      "%</div></div></a> "; }
      else {
        document.getElementById("buttons").innerHTML +=
      "<a href='./coinsHtml/" +
      crypto.name +
      ".html' class='btn btn-sm btn-hover' style=' background-color: #4a5568; color: #cbd5e0; text-align: left;'><div class='row'><div class='col-md-4'><img src=" +
      img +
      " style='width: 25px; height: 25px' class='m-2'>" +
      crypto.name +
      " (" +
      crypto.symbol +
      ")</div><div class='col-md-4'>$" +
      crypto.current_price.toFixed(2) +
      "</div><div class='col-md-4 text-danger'>" +
      crypto.price_change_percentage_24h.toFixed(2) +
      "%</div></div></a> ";
      }
  }
};
