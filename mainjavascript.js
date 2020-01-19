import { addJob } from 'db-control.js';
import { peekJob } from 'db-control.js';

function submitEmployerData()
  {
      var inputs = document.getElementById ("employerForm");
      addJob(inputs[0], inputs[1], inputs[2], inputs[3], inputs[4]);
      /*for (var i = 0; i < inputs.length - 1; i++) //
      {
        //document.write(inputs[i].value);
      }*/
      alert("Job posting submitted successfully.");
    }

function  linkToApplication(){
  window.open("https://google.com", "_blank"); // replace with database gathering
  document.getElementById("titleText").innerHTML = peekJob();
  document.getElementById("companyText").innerHTML = "company changed!";
  document.getElementById("descriptionText").innerHTML = "Description changed!";
  document.getElementById("requiredSkillsText").innerHTML = "skills changed!";
}
