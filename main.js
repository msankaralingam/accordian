
		
var sasi = document.getElementsByClassName("heading");
var i;

for (i = 0; i < sasi.length; i++) {
  sasi[i].addEventListener("click", function() {
    
    this.classList.toggle("active");

    
 var content = this.nextElementSibling;
    if (content.style.display === "block") {
		
      content.style.display = "none";
	  
    } else {
      content.style.display = "block";
	  
    }
  });

}
