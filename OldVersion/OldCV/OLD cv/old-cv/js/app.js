var app = angular.module('myApp', ['firebase']).config(function($sceProvider) {
  $sceProvider.enabled(false);
});;
var FIREBASE_URL = "https://levantam.firebaseio.com/";
app.controller("HomeCtrl", ['$scope', '$firebaseObject', function($scope, $firebaseObject){
	var firebaseRef = new Firebase(FIREBASE_URL + "information");
	var information = $firebaseObject(firebaseRef);
	$scope.information = information;
}]);

app.controller("ProjectCtrl", ['$scope', '$firebaseArray', function($scope, $firebaseArray){
	
	$(document).ready(function(){
		var firebaseRef = new Firebase(FIREBASE_URL + "projects");
		var projects = $firebaseArray(firebaseRef);
		$scope.projects = projects;
	});

}]);

app.controller("BlogCtrl", ['$scope', '$firebaseArray', function($scope, $firebaseArray){
	

	var firebaseRef = new Firebase(FIREBASE_URL + "Blogs");
	var blogs = $firebaseArray(firebaseRef);
	$scope.blogs = blogs;
	$scope.showBlog = function(blog){
		$('.modal-cover').attr("src", blog.Cover);
		$('.modal-meta').html("Meta:" + blog.Meta);
		$('.modal-body').html(blog.Content);
		$('.modal-name').html(blog.Name);
		$('.modal').modal();

		window.location.hash = blog.$id;
	};
}]);


function displayLoadding(){
	var isLoad = false;
	var myInterval = window.setInterval(function () {
		//isLoad = true;
		$('#loadding').hide("slow");
	},1000);

	window.setTimeout(function () {
		if(isLoad)
	  		clearInterval(myInterval);
	},1000);
}
function delay(){
	var isLoad = false;
	var myInterval1 = window.setInterval(function () {
		try {
		    new CBPGridGallery( document.getElementById( 'grid-gallery' ) );
		    $('body').css({"width":"100%", "height":"100%"});
		}
		catch(err) {}
	  
	  isLoad = true;

	},2000);

	window.setTimeout(function () {
		if(isLoad)
	  	clearInterval(myInterval1);
	},2000);
}
delay();
displayLoadding();