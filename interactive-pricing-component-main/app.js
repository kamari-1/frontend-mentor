/**
 * - 10K pageviews / $8 per month
 * - 50K pageviews / $12 per month
 * - 100K pageviews / $16 per month
 * - 500k pageviews / $24 per month
 * - 1M pageviews / $36 per month
 */

const rangePrices = {
  1: {
    views: "10k",
    price: 8.0,
  },
  2: {
    views: "50k",
    price: 12.0,
  },
  3: {
    views: "100k",
    price: 16.0,
  },
  4: {
    views: "500k",
    price: 24.0,
  },
  5: {
    views: "1M",
    price: 36.0,
  },
};
// -------------------------------------------------------------

// ---------- VARIABLES ----------
const slider = document.getElementById("slider");
var price_amt = document.getElementById("price__amt");
var views = document.getElementById("views");
const checkbox = document.getElementById("billing__checkbox");
var discount = document.getElementsByClassName("discount__percent");
// -------------------------------------------------------------
// -------------------------------------------------------------

function showPrice(value) {
  let currentPrice = rangePrices[value].price;
  let price = checkbox.checked
    ? currentPrice - currentPrice * 0.25
    : currentPrice;

  price_amt.innerHTML = price.toFixed(2);
  views.innerHTML = rangePrices[value].views;
}

// -------------------------------------------------------------

slider.onchange = () => {
  showPrice(slider.value);
};

// -------------------------------------------------------------

checkbox.onchange = () => {
  showPrice(slider.value);
};

// -------------------------------------------------------------
showPrice(slider.value);
