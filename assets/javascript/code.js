const apiKey = "Z2ms36QqkedOO3zk3BNdoVBFpm5adrAp";
const baseUrl = "http://api.giphy.com/v1/gifs/search?";
const limit = 10;
let queryUrl = "";
let topics = ["Jake+Peralta","Captain+Holt","Rosa+Diaz","Gina+Linetti","Terry+Jeffords","Amy+Santiago"];

$(document).ready(function(){
  $("#search").on("click", function(){
    let queryTerm = $("#term").val().trim();
    createButton(queryTerm);
    // queryUrl = giphy.queryBuilder(queryTerm);
    // giphy.query(queryUrl);
  })
});
//if (results[i].rating !== "r" && results[i].rating !== "pg-13")
const queryBuilder = function(queryTerm) {
  return `${baseUrl}q=${queryTerm}&limit=${limit}&api_key=${apiKey}`
};
const query = function(queryUrl) {
  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function(response){
    console.log(response)
  })
};

const createButton = function(queryTerm) {
  $("#btn-container").append(
    `<button class="waves-effect waves-light btn green lighten-4">${queryTerm}</button>`
  )
};