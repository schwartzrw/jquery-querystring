/*
 * jQuery QueryString Plugin
 * Author: Ryan Schwartz
 * Version: 1.0 (22-FEB-2014)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-3.0-standalone.html
 */
	
		
// Initiate the QueryString handler
$(function() {
	QueryString();
});

(function($){

	// Declare function
	QueryString = function(){
	};
	
	// Declare sub-function for getting a specific query string
	QueryString.get = function(q){
			
	    s = window.location.search;
	    s = s.replace(/\+/g, ' ');
		var re = new RegExp("(\\?|&){1}"+q+"=([^&#]*)",'i');
		var val = re.exec(s);
		val = (val) ? val[2] : "";
		return val;
	}
	
	// Declare sub-function for getting an object of all query strings
	QueryString.get_all = function(){
		
	    var url = location.href;
	    var result = {}
	    if(url.indexOf('?') >= 0){
		 	    var qs = url.substring(url.indexOf('?') + 1).split('&');
			    for(var i = 0; i < qs.length; i++){
			        qs[i] = qs[i].split('=');
			        result[qs[i][0]] = decodeURIComponent(qs[i][1]);
			    }   
	    }
	    
	    return result;
	}
	
})(jQuery);

