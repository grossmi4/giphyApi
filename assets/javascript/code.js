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
//if (results[i].rating !== "r" && results[i].rating !== "pg-13")
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
      console.log(returned.images.fixed_height.url);
      newGif = $(`<img src="${returned.images.fixed_height}">`);
      $("#gif-container").append(newGif);
    })
  })
};

const createButtons = function() {
  $("#btn-container").empty();
  topics.forEach( (term)=>{
    console.log(term);
    let newBtn = `<button class="waves-effect waves-light btn green lighten-2 giphy">${term}</button>`
    $(newBtn).attr("data-term",term.replace(" ","+"));
    $("#btn-container").append(newBtn);
    console.log(newBtn);
  });
  $(document).on("click",".giphy",query)
};