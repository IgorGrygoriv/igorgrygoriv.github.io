window.onload = async function handleApi() {
    const url =
      "https://api.coingecko.com/api/v3/coins/binancecoin?x_cg_demo_api_key="
    const options = {
      method: "GET",
    };

    const response = await fetch(url, options);
    const result = await response.text();
    const myObj = JSON.parse(result);

    document.getElementById("coin-title").innerHTML += myObj.name;
    document.getElementById("coin-name").innerHTML = myObj.name;

    document.getElementById("coin-logo").src = myObj.image.large;
    if (myObj.market_data.current_price.usd >= 0) {
      document.getElementById("coin-price").className = "text-success";
      document.getElementById("coin-price").innerHTML =
        "$" + myObj.market_data.current_price.usd;
    } else {
      document.getElementById("coin-price").className = "text-danger";
      document.getElementById("coin-price").innerHTML =
        myObj.market_data.current_price.usd;
    }

    document.getElementById("coin-market-cap").innerHTML +=
      '$' + myObj.market_data.market_cap.usd;
    document.getElementById("coin-volume").innerHTML =
      myObj.market_data.total_volume.usd;
    document.getElementById("coin-supply").innerHTML =
      myObj.market_data.circulating_supply;

    if (myObj.market_data.price_change_percentage_24h >= 0) {
      document.getElementById("coin-price-change-percentage").className =
        "text-success";
      document.getElementById("coin-price-change-percentage").innerHTML =
      myObj.market_data.price_change_percentage_24h.toFixed(2) + "%";
    } else {
      document.getElementById("coin-price-change-percentage").className =
        "text-danger";
      document.getElementById("coin-price-change-percentage").innerHTML =
        myObj.market_data.price_change_percentage_24h.toFixed(2) + "%";
    }

    if (myObj.market_data.price_change_24h_in_currency.usd >= 0) {
      document.getElementById("coin-price-change").className =
        "text-success";
      document.getElementById("coin-price-change").innerHTML =
        "$" + myObj.market_data.price_change_24h_in_currency.usd.toFixed(2);
    } else {
      document.getElementById("coin-price-change").className =
        "text-danger";
      document.getElementById("coin-price-change").innerHTML =
        "$" + myObj.market_data.price_change_24h_in_currency.usd.toFixed(2);
    }

    document.getElementById("coin-ath").innerHTML +=
      "$" + myObj.market_data.ath.usd;
    document.getElementById("coin-atl").innerHTML +=
      "$" + myObj.market_data.atl.usd;

    if (myObj.market_data.price_change_percentage_7d >= 0) {
      document.getElementById("coin-price-change-7d").className =
        "text-success";
      document.getElementById("coin-price-change-7d").innerHTML =
        myObj.market_data.price_change_percentage_7d.toFixed(2) + "%";
    } else {
      document.getElementById("coin-price-change-7d").className =
        "text-danger";
      document.getElementById("coin-price-change-7d").innerHTML =
        myObj.market_data.price_change_percentage_7d.toFixed(2) + "%";
    }

    document.getElementById("coin-total-supply").innerHTML =
      myObj.market_data.total_supply;
    document.getElementById("coin-last-updated").innerHTML =
      myObj.market_data.last_updated;
    document.getElementById("coin-symbol").innerHTML = myObj.symbol;
    document.getElementById("coin-hashing-algorithm").innerHTML =
      myObj.hashing_algorithm;
    document.getElementById("coin-genesis-date").innerHTML =
      myObj.genesis_date;
    document.getElementById("coin-overview").innerHTML =
      myObj.description.en;
    document.getElementById("coin-homepage").innerHTML =
      myObj.links.homepage;
    document.getElementById("coin-homepage").href = myObj.links.homepage[0];

    document.getElementById("coin-github").innerHTML =
      myObj.links.repos_url.github[0];
    document.getElementById("coin-github").href =
      myObj.links.repos_url.github[0];

    document.getElementById("coin-explorer").href =
      myObj.links.blockchain_site[0];
    document.getElementById("coin-explorer").innerHTML =
      myObj.links.blockchain_site[0];

    document.getElementById("coin-homepage").innerHTML =
      myObj.links.homepage;
  };
