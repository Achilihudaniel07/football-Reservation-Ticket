  // JAVA RESERVATION FORM

  // To change fullname to caps
  function myFunction() {
  var fname = document.getElementById("fullname");
  fname.value = fname.value.toUpperCase();
  };


  // // ******************************************************************************


  // // To add a new club
  var addClub = document.createElement("option");
  var node = document.createTextNode("Wesbrom FC");
  addClub.appendChild(node);
  var element = document.getElementById("eplclubs");
  element.appendChild(addClub);


  // // ******************************************************************************

  // To add the club ontop
  var ontop = document.getElementById("manu");
  element.insertBefore(addClub,ontop);


  // // ******************************************************************************


  // To change eplclubs background
  var epl = document.querySelectorAll("option")[5].parentElement;
  epl.addEventListener("click", function(){
  document.querySelector("form").style.background="url('epl.jpeg')";
  document.querySelector("form").style.fontSize="1.2rem"; 
  document.querySelector("form").style.color="red"
  });


  // // ****************************************************************************************


  // To change tornament background
  var epl = document.querySelectorAll("input")[4]
  epl.addEventListener("click", function(){
  document.querySelector("form").style.backgroundImage="url('epl2.jpeg')";
  document.querySelector("b")[6].style.backgroundColor="yellow";
  document.querySelector("form").style.color="black";
  document.querySelector("form").style.fontSize="1.2rem";
  });


  var cl = document.querySelectorAll("input")[5];
  cl.addEventListener("click", function(){
  document.querySelector("form").style.backgroundImage="url('cl2.jpeg')";
  document.querySelectorAll("b")[6].style.backgroundColor="blue"
  document.querySelector("form").style.color="white"
  document.querySelector("form").style.fontSize="1.2rem"
  });


  var fa = document.querySelectorAll("input")[6]
  fa.addEventListener("click", function(){
  document.querySelector("form").style.backgroundImage="url('facup2.jpeg')";
  document.querySelectorAll("b")[6].style.backgroundColor="blue"
  document.querySelector("form").style.color="white"
  document.querySelector("form").style.fontSize="1.2rem"
  });


  var carl = document.querySelectorAll("input")[7]
  carl.addEventListener("click", function(){
  document.querySelector("form").style.backgroundImage="url('carl.jpeg')";
  document.querySelectorAll("b")[6].style.backgroundColor="black"
  document.querySelector("form").style.color="gold"
  document.querySelector("form").style.fontSize="1.2rem"
  });


  // // ******************************************************************************************


  //  To change button effect
  var button = document.getElementById("matchday");
  button.addEventListener("mouseenter", function(){
  document.querySelector("form").style.background="blue"
  document.querySelector("form").style.border="15px dotted black"
  document.querySelector("form").style.borderRadius="15rem"
  document.querySelector("button").style.borderRadius="35rem"
  document.querySelector("button").style.backgroundColor="red"
  });

  var button = document.getElementById("matchday");
  button.addEventListener("mouseleave", function(){
  document.querySelector("form").style.background="gold"
  document.querySelector("form").style.border="15px solid black"
  document.querySelector("form").style.borderRadius="0"
  document.querySelector("button").style.backgroundColor="whitesmoke"
  });
   
  // #################################################################################################################