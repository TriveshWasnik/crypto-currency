/* 
Get API From CoinGecko Website
*/

const bitcoin = document.querySelector("#bitcoin");
const ethereum = document.querySelector("#ethereum");
const dogecoin = document.querySelector("#dogecoin");

$.ajax({
  method: "GET",
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr",
  dataType: "json",
  contentType: "application/json",
  headers: {},
  data: {},

  success: function (res) {
    bitcoin.innerHTML = res.bitcoin.inr;
    ethereum.innerHTML = res.ethereum.inr;
    dogecoin.innerHTML = res.dogecoin.inr;
  },
  error: function (xhr, status, error) {
    console.log(error);
  },
});

/*
$.ajax({
  url: 'https://api.example.com/data',
  method: 'GET',
  dataType: 'json',
  data: { param1: 'value1', param2: 'value2' },
  success: function(data, status, xhr) {
    console.log(data);
  },
  error: function(xhr, status, error) {
    console.error('Error:', status, error);
  },
  complete: function(xhr, status) {
    console.log('Request complete:', status);
  },
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  },
  contentType: 'application/json',
  timeout: 5000,
  async: true
});

*/
