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
		$('#loadding').hide("slow");
	},700);

	window.setTimeout(function () {
		if(isLoad)
	  	clearInterval(myInterval);
	},700);
}
function delay(){
	var isLoad = false;
	var myInterval = window.setInterval(function () {
		try {
		    new CBPGridGallery( document.getElementById( 'grid-gallery' ) );
		}
		catch(err) {
		   
		}
	  
	  isLoad = true;

	},2000);

	window.setTimeout(function () {
		if(isLoad)
	  	clearInterval(myInterval);
	},2000);
}
delay();
displayLoadding();