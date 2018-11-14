// Try loading as if we are in node.js ..
try{
	eval('import DataFrame from "dataframe-js"');

}
// Otherwise, use methods apropos of execution in a browser
catch(e){

	console.log("loading Dataset.js dependencies");

	// Load dependencies as script element
	[
	  "../lib/dataframe-min.js"
	].forEach(function(src) {
	  var script = document.createElement('script');
	  script.src = src;
	  document.head.appendChild(script);
	});


}

// Wrap all declarations with a "sleep"
// This allows the dependencies to be loaded and executed
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
(async function(){ await sleep(100); 

	// "Sacarify" some of the references to make them simpler
	DataFrame = dfjs.DataFrame;


/**
 * The MyData class is used to hold a "transparent" dataset that is accessible by a user
*/
class MyData extends DataFrame {
// need to be able to filter
// since DFs are immutable, MyData will need a contained dataframe that is the working dataframe
}


/**
 * The EnsembleData class is used to hold an "opaque" dataset that is not accessible by the user
*/
class EnsembleData extends DataFrame {
}


// Do not remove this weird little doohickey ..
// it keeps us within the deferred execution scope required to let async code to settle in ..
})();

