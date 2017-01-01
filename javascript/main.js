
// Capture the value from the input box
document.querySelector('.js-go').addEventListener('click', function(e){
  var input = document.querySelector("input").value;
  inputinUrl(input);
});

document.querySelector('.js-go').addEventListener('keyup', function(e){
  var input = document.querySelector("input").value;
  if (e.which === 13)
  {
    console.log("I am input", input);
  inputinUrl(input);
  }
});
//Get the data from API
function inputinUrl(input){
var url = "http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=dc6zaTOxFJmzC";
var xmlhttpObject = new XMLHttpRequest();
xmlhttpObject.open('GET', url);
xmlhttpObject.send();
xmlhttpObject.addEventListener('load', function(e){
  var input = e.target.response;
pushtoDom(input);
});
}

//Show the values in the container
function pushtoDom(input){
  var response = JSON.parse(input);
  console.log(response.data);
  //For loop
  // for (var i = 0; i < response.data.length; i++) {
  //   data = response.data[i].images.fixed_height.url;
  //   var jai = "<img + src=" + data + ">";
  //   document.querySelector('.js-container').innerHTML += jai;
  // }
//forEach loop
  imagesUrls = response.data;
  imagesUrls.forEach(function(image){
    src = image.images.fixed_height.url;
    var jai = "<img  src=" + src + ">";
    document.querySelector('.js-container').innerHTML += jai;
  });

}
