
vivritiHack.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('home',{
			url: '/home',
			controller : 'vivritiController',
			templateUrl : 'templates/home.html'
		
	});
	
	
	$urlRouterProvider.otherwise('/home');
 });


	$(document).ready(function(){
		$('.userProfile').click(function(){
			$('.arrowBox').slideToggle("slow");
		});
	});

	
