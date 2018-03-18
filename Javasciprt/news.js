// var marks = "hello sanjay"; // string 
// alert(typeof marks); 	


// var marks = 1000; // number 
// alert(typeof marks); 


// var marks = 10 + 10 + "10"; // number 
// alert(marks); 	


// var marks = true; // boolean  
// alert(typeof marks); 	


// if (10 == 9) {   // if else condition 
//  alert("yes");

// } else {

// alert('no');

// }


// var age = 80; // aadition

// if (age<=80) {

// 	alert("yes");

// } 


// var age = 25; // aadition

// if (age<=20 && age>=30) {

// 	alert("yes");

// }

function toggle() {

	// var ele = document.getElementById("toggleText");
	// var text = document.getElementById("displayText");
	 
	//  if(ele.style.display == "block" ) {
 //    		ele.style.display = "none";
	// 	    text.innerHTML = "show";
 //  	}
	// else {
	// 	ele.style.display = "block";
	// 	text.innerHTML = "hide";
	// }


 var ele = document.getElementById("toggleText")
 var text = document.getElementById("displayText")

 if(ele.style.display == "block") {
     	ele.style.display = "none";
     	text.innerHTML = "hide";
} else {
  	ele.style.display = "block"
  	text.innerHTML = "show";
  }

} 





