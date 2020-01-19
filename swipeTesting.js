//import { addJob } from 'db-control.js';
//import { peekJob } from 'db-control.js';
//import 'hammer.js';

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
window.addEventListeners('load', function() {
    	var el = document.getElementById("studentPageSwipe")[0];
    	/* var hammertime = new Hammer(myElement, myOptions); */
    	/* var hammertime = Hammer(el, { touchAction: 'none' }); not necessary anymore - see https://github.com/hammerjs/hammer.js/pull/855 */
    	var hammertime = Hammer(el);
    	/* by default only horizontal pan/swipe is fully supported */
    	hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    	/* the magic... */
    	hammertime.on('swipe', function(ev) {
    		var direction = '';
    	    switch(ev.direction) {
    	    	case Hammer.DIRECTION_LEFT:
    	    		direction = 'left';
    	    		break;
    	    	case Hammer.DIRECTION_RIGHT:
    	    		direction = 'right';
    	    		break;
    	    	case Hammer.DIRECTION_UP:
    	    		direction = 'up';
    	    		break;
    	    	case Hammer.DIRECTION_DOWN:
    	    		direction = 'down';
    	    		break;
    	    }
    	    alert(direction);
    	});
    }, false);

function  linkToApplication(){
  window.open("https://google.com", "_blank"); // replace with database gathering
  document.getElementById("titleText").innerHTML = peekJob();
  document.getElementById("companyText").innerHTML = "company changed!";
  document.getElementById("descriptionText").innerHTML = "Description changed!";
  document.getElementById("requiredSkillsText").innerHTML = "skills changed!";
}
