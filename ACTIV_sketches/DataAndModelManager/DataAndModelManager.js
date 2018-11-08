// Try loading as if we are in node.js ..
try{
	eval('import DataFrame from "Dataset.js"');

}
// Otherwise, use methods apropos of execution in a browser
catch{

	console.log("loading DataAndModelManager.js dependencies");

	// Load dependencies as script element
	[
	  "../Dataset/Dataset.js"
	].forEach(function(src) {
	  var script = document.createElement('script');
	  script.src = src;
	  document.head.appendChild(script);
	});


}

// Wrap all declarations with a "sleep"
// This allows the dependencies to be loaded and executed
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
(async function(){ await sleep(15); 



/**
 * The DataAndModelManager class is used to filter the Datasets and Models that a user is allowed to load, based on their credentials
 * It also enforces concordance betwees Datasets and Models
*/
class DataAndModelManager {

}


// Do not remove this weird little doohickey ..
// it keeps us within the deferred execution scope required to let async code to settle in ..
})();

