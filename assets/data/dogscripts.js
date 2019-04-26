//fetch json data
fetch('assets/data/dogs.json')
	.then(response => {
		return response.json()
	})
	.then(data => {

		for (var i = 0; i < data.dogs.length; i++) {
			var elem = document.createElement("img");
			var doglist = document.getElementById("dog-list");
			elem.src = "." + data.dogs[i].image;
			elem.onclick = open_click;

			//add 1 to get images as index starts at 0, but images start at 1
			var index = (i + 1);

			//append images to div and id corresponding to each image name
			doglist.appendChild(elem).setAttribute("id", "dogimg-" + index);

			/*possible below to use as lazy load, but cors restriction
		var elemdata = data.dogs[i].source;
		document.getElementById("dogimg-"+index).setAttribute("data-src", elemdata);
			function init() {
			 var imgDefer = document.getElementsByTagName('img');
			 for (var i=0; i<imgDefer.length; i++) {
			if(imgDefer[i].getAttribute('data-src')) {
					imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
			}
			 }
			  }
			window.onload = init;
			*/


			//add class to each image
			document.getElementById("dogimg-" + index).classList.add(index);

		}
	})


//overlay open and close for larger image
var dogoverlay = document.getElementById("dog-overlay");
var dogclose = document.getElementsByClassName('close')[0];

var open_click = function () {

	dogoverlay.classList.add('overlay');

	var elem2 = document.createElement("img");
	elem2.src = "./assets/images/raw/" + this.className + ".jpeg";

	//append image to the overlay
	dogoverlay.appendChild(elem2);
	dogclose.style.display = 'block';

	//slow down the speed of image appearing
	setTimeout(function () {
		dogoverlay.style.opacity = 1;
	}, 100);


}

var close_click = function () {
	dogoverlay.style.opacity = 0;
	dogoverlay.classList.remove('overlay');
	dogoverlay.innerHTML = "";
	dogclose.style.display = 'none';
}

dogclose.onclick = close_click;

//get header and footer snippets
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("header").innerHTML = xhttp.responseText;
	}
};
xhttp.open("GET", "assets/snippets/header.html", true);
xhttp.send();

var xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("footer").innerHTML = xhttp2.responseText;
	}
};
xhttp2.open("GET", "assets/snippets/footer.html", true);
xhttp2.send();