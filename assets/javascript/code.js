const apiKey = "Z2ms36QqkedOO3zk3BNdoVBFpm5adrAp";
const baseUrl = "http://api.giphy.com/v1/gifs/search?";
const limit = 10;
let topics = ["Jake Peralta","Captain Holt","Rosa Diaz","Gina Linetti","Terry Jeffords","Amy Santiago"];

$(document).ready(function(){
  $("#search").on("click", function(){
    let queryTerm = $("#term").val().trim();
    topics.push(queryTerm);
    createButtons();
  });
  createButtons();
});

const queryBuilder = function(queryTerm) {
  return `${baseUrl}q=${queryTerm}&limit=${limit}&api_key=${apiKey}`
};

const query = function() {
  let queryTerm = $(this).text().replace(" ","+");
  console.log(queryTerm);
  let queryUrl = queryBuilder(queryTerm);
  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(response =>{
    console.log(response);
    response.data.forEach(returned => {
      if (returned.rating !== "r" && returned.rating !== "pg-13") {
        newGif = $(`<img src="${returned.images.fixed_height.url}">`);
        $("#gif-container").prepend(newGif);
      }
    })
  })
};

const createButtons = function() {
  $("#btn-container").empty();
  topics.forEach( (term)=>{
    let newBtn = `<button class="waves-effect waves-light btn-small green lighten-2 giphy">${term}</button>`
    $(newBtn).attr("data-term",term.replace(" ","+"));
    $("#btn-container").append(newBtn);
  });
  $(document).on("click",".giphy",query)
};