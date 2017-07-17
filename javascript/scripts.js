//===============CONSTRUCTOR=====================//
function cards(name, url, description, price) {
    this.Name = name;
    this.Url = url;
    this.Description = description;
    this.Price = price;
}

//===============Object Constructed=====================//
var cardobject = [];
cardobject.push(new cards("a", "images/air-assortment.jpg", "fd", 50));
cardobject.push(new cards("a", "images/jar-in-snow.jpg", "fd", 50));
cardobject.push(new cards("a", "<img src='asdfasdf.png'>", "fd", 50));
cardobject.push(new cards("a", "<img src='asdfasdf.png'>", "fd", 50));
cardobject.push(new cards("a", "<img src='asdfasdf.png'>", "fd", 50));
cardobject.push(new cards("a", "<img src='asdfasdf.png'>", "fd", 50));
cardobject.push(new cards("a", "<img src='asdfasdf.png'>", "fd", 50));
cardobject.push(new cards("a", "<img src='asdfasdf.png'>", "fd", 50));


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
      <a href="${item.Url}"><img src="${item.Url}"></a>
      <p class="caption">${item.Description}</p>
      <p class="price">$${item.Price}</p>
      <button><a>Purchase</a></button>
    </div>`;
  
});



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
  var captionText = $(".caption").html();
  $caption.text(captionText);
});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
});