// Desktop screen width
if(screen.width > 800 && !document.getElementById("mobile-form").innerHTML === "")
{
	document.getElementById("desktop-form").innerHTML = document.getElementById("mobile-form").innerHTML;
}
// Mobile screen width
else
{
	document.getElementById("mobile-form").innerHTML = document.getElementById("desktop-form").innerHTML;
}



















$( window ).resize(function() {
	// Desktop screen width
	if(screen.width > 800)
	{
		try {
			console.log("Desktop.");
			if(document.getElementById("mobile-form").innerHTML === "")
			{
				console.log("Desktop 1");
			}
			else
			{
				console.log("Desktop 2");
				document.getElementById("desktop-form").innerHTML = document.getElementById("mobile-form").innerHTML;
			}
		}
		catch(err) {
		}
	}
	// Mobile screen width
	else
	{
		try {
			console.log("Mobile.");
			if(document.getElementById("desktop-form").innerHTML === "")
			{
				console.log("Mobile 1");
			}
			else
			{
				console.log("Mobile 2");
				document.getElementById("mobile-form").innerHTML = document.getElementById("desktop-form").innerHTML;
			}
		}
		catch(err) {
		}
	}
});


document.body.innerHTML = "<h1>Test 2</h1>";
document.getElementById("someId");
document.getElementByClassMame("classname");
document.getElementsByTagName("HTML tag");
// Get first element matching specified selectors
document.querySelector(".main-nav a");

// Get all elements matching specified selector(s):
document.querySelectorAll("post.content p");

// Can also do
document.querySelector(".main-title").innerHTML;
document.querySelector(".main-title").outerHTML;

// Change nodes info
document.querySelector(".main-title").innerHTML = "All your headings are belong to us!";
document.querySelector("#showcase").id = "newidname";

// Get properties 
document.querySelector(".masthead").className

document.querySelector(".masthead").classList.add("new-class")
