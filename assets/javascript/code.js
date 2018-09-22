const apiKey = "Z2ms36QqkedOO3zk3BNdoVBFpm5adrAp";
const baseUrl = "http://api.giphy.com/v1/gifs/search?";
const limit = 10;
let topics = ["Jake+Peralta","Captain+Holt","Rosa+Diaz","Gina+Linetti","Terry+Jeffords","Amy+Santiago"];

$(document).ready(function(){
  $("#search").on("click", function(){
    let queryTerm = $("#term").val().trim();
    topics.push(queryTerm);
    createButtons();
    // queryUrl = giphy.queryBuilder(queryTerm);
    // giphy.query(queryUrl);
  })
});
//if (results[i].rating !== "r" && results[i].rating !== "pg-13")
const queryBuilder = function(queryTerm) {
  return `${baseUrl}q=${queryTerm}&limit=${limit}&api_key=${apiKey}`
};
const query = function(queryTerm) {
  let queryUrl = queryBuilder(queryTerm);
  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function(response){
    console.log(response)
  })
};

const createButtons = function() {
  $("#btn-container").empty();
  topics.forEach( ()=>{
    $("#btn-container").append(
      `<button class="waves-effect waves-light btn green lighten-2 giphy">${queryTerm}</button>`
    ).attr("value",queryTerm.replace(" ","+"))
  });
  $(document).on("click",".giphy",query())
};