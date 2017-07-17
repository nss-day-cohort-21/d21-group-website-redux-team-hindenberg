//===============CONSTRUCTOR=====================//
function cards(name, url, description, price) {
    this.Name = name;
    this.Url = url;
    this.Description = description;
    this.Price = price;
}

//===============Object Constructed=====================//
var cardobject = [];
cardobject.push(new cards("Air We There Yet", "images/mainjar.png", "Lorem1 ipsum doloe inim vecitation ullamco laboris nisi ut aliquip ollit anim id est laborum.", 500));
cardobject.push(new cards("Air-O-Matic", "images/jar2.png", "Lorem2 ipsum dolor sadiam, quis nostr laboris nisi ut aliquip ex ea commodo conseit in vololore eu fugiat nulla pariatborum.", 600));
cardobject.push(new cards("Bad Air Day", "images/jar3.png", "Lorem3 ipsum dolor s, sed dgna ali quis nostrud exercitation ullamco laboris nisi ut aauten voluptate velit esseExcepteur  mollit anim id est laborum.", 700));
cardobject.push(new cards("Air-O-Space", "images/jar4.png", "Lorem4 ipsum dolor o.boris nisi o consequat. Duis aute irure dolor in reprehenderit in vour. Excepteur sint occaecat cupidatat non proimollit anim id est laborum.", 800));
cardobject.push(new cards("Beach Air", "images/jar2.png", "Lorem5 ipsum dolor sitincididunqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  e eu fuupidatalit anim id est laborum.", 1000));
cardobject.push(new cards("Espresso in the Air", "images/jar4.png", "Lorem6 ipsum dolor sitdo e ut labullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reest laborum.", 1100));
cardobject.push(new cards("Margin of Air-r", "images/jar3.png", "Lorem7 ipsum docididunt ut labo ad minim ve commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit eest laborum.", 1200));
cardobject.push(new cards("Share some Air", "images/mainjar.png", "Lorem8 ipsum dolididunal iquarudabohenderit ite velit esse cillum dolore eu fugiat nulla pariatur. Excepteurit ast laborum.", "All the monies"));

//===============Printing Object to HTML=====================//

/*for (var i = 0; i< cardobject.length;i++) {
	var obj = cardobject[i];
  var x = document.getElementById("cards");
  	for (var prop in obj) {
    	x.innerHTML +=  `<div class="card">
                      ${obj[prop]}<br>
                      </div>`;
    }

}*/

cardobject.forEach(function(item){
  document.getElementById("cards").innerHTML += `<div class="card">
      <h2>${item.Name}</h2>
      <a href="${item.Url}"><img src="${item.Url}" alt="${item.Description}"></a>
      <p class="caption">${item.Description}</p><br>
      <p class="price">$${item.Price}</p>
      <button><a>Purchase</a></button>
    </div>`;
  
});

//===============Making Images Clickable with Overlay=====================//

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//An image to overlay
$overlay.append($image);

//A caption to overlay
$overlay.append($caption);

//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$(".card img").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("src");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  //Show the overlay.
  $overlay.show();
  
  //Get child's title attribute and set caption
  var captionText = $(this).attr("alt");
  $caption.text(captionText);
});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
});