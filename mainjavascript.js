function submitEmployerData()
  {
      var inputs = document.getElementById ("employerForm");
      for (var i = 0; i < inputs.length - 1; i++) //
      {
        //document.write(inputs[i].value);
      }
      alert("Job posting submitted successfully.");
    }

function  linkToApplication(){
  window.open("https://google.com", "_blank"); // replace with database gathering
  document.getElementById("titleText").innerHTML = "text title changed!";
  document.getElementById("descriptionText").innerHTML = "Description changed!";
  document.getElementById("requiredSkillsText").innerHTML = "skills changed!";
}
