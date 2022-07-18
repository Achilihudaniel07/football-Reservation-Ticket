  // //  To add new values to the li in the reservation form

  // var butt = document.getElementById("enter")
  // var input = document.getElementById("userinput")
  // var ul= document.querySelector("ul")

  // butt.addEventListener("click",function(){
  // var x= document.createElement("li")

  // x.appendChild(document.createTextNode(input.value))

  // ul.appendChild(x)
  // });


// ******************************************************************************************************************


  // // To trigger the button and enter keyboard key

  var butt = document.getElementById   ("enter")
  var day= document.querySelector("ul")

  butt.addEventListener("click",function(event){


  if(addMatchDay.value !== "")
  // if (addMatchDay.value == "null")
  {
  var xday= document.createElement("li")
  xday.appendChild(document.createTextNode(addMatchDay.value))

  day.appendChild(xday)
  addMatchDay.value = ""
  }
  else if (addMatchDay.value !== "null")
  {alert ("input value")}
  }
  );

  var addMatchDay = document.getElementById("userinput")
  var day= document.querySelector("ul")

  addMatchDay.addEventListener("keypress",function(event){

  // if (event.key==="Enter")
  if (addMatchDay.value === "null")
  {
  if(addMatchDay.value !== ""){

  var xday= document.createElement("li")
  xday.appendChild(document.createTextNode(addMatchDay.value))

  day.appendChild(xday)
  addMatchDay.value = ""
  }

  else if (addMatchDay.value !== "null")
  {alert ("input value")};
  }
  });

  
// ******************************************************************************************************************

  // // To trigger the button and enter keyboard key using chacode

  // InputDeviceInfo.addEventListener("keypress",function(lab){

  //   if(input)
  // }
  // )

// ******************************************************************************************************************


  //  // To click button and submit
  var button = document.getElementById("submit");
  button.addEventListener("click", function(){
  alert("Congratulations your ticket is booked")
  });

// ##################################################################################################################