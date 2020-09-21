on(window,'load',function(){

   

	webgazer.params.showVideoPreview = true;
	webgazer.setRegression('ridge')
		.setGazeListener(function(data, clock) {
		}).begin();
		webgazer.showPredictionPoints(false);
	var setup = function() {
		var canvas = document.getElementById("plotting_canvas");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		canvas.style.position = 'fixed';
	};
	setup();
});
var $ = jQuery.noConflict();
window.applyKalmanFilter = true;
window.saveDataAcrossSessions = true;
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
/*
 * Sets store_points to true, so all the occuring prediction
 * points are stored
 */
function store_points_variable(){
  webgazer.params.storingPoints = true;
}

/*
 * Sets store_points to false, so prediction points aren't
 * stored any more
 */
function stop_storing_points_variable(){
  webgazer.params.storingPoints = false;
}
function calculate(arr){
	var tmp = [];
	var ratio = 0.2;
	var height = $(window).height();
	var p = height*ratio;
	for(var i=0;i<30;i++){
		if(arr[1][i]<=p){
			tmp.push(1);
		}else{
			tmp.push(0);
		}
	}
	return tmp;
}
var data = [];
function record(){
	  store_points_variable();
	  sleep(5000).then(() => {
		stop_storing_points_variable();
		data.push(calculate(webgazer.getStoredPoints()));
	  });
}
var notify_close = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var notify=["Flat Bush toddler death","Flat Bush toddler death","Flat Bush toddler death","Flat Bush toddler death","Flat Bush toddler death","Flat Bush toddler death","Flat Bush toddler death","Flat Bush toddler death","Flat Bush toddler death","Flat Bush toddler death","Flat Bush toddler death","Flat Bush toddler death","Flat Bush toddler death","Flat Bush toddler death","Flat Bush toddler death","Flat Bush toddler death","Flat Bush toddler death","Flat Bush toddler death","Flat Bush toddler death","Flat Bush toddler death","Flat Bush toddler death","Flat Bush toddler death",];
var notify_index = 0;
function showNotify(){
	$('#msg').text(notify[notify_index]);
	record();
	$('.notification').slideDown();
	sleep(3000).then(() => {
		$('.notification').slideUp();
		notify_index+=1;
	});

}
var notification_timer;
$(document).ready(function(){
$('.notification').slideUp();
$('.close_video').click(function(){
		$('#webgazerVideoFeed').hide();
		$('#webgazerVideoCanvas').hide();
		$('#webgazerFaceOverlay').hide();
		$('#webgazerFaceFeedbackBox').hide();
		$('.close_video').hide();
		$('#plotting_canvas').hide();
	 	var game = new Game();
		game.setup();
    	event(game);
		notification_timer = setInterval(showNotify, 40000);
	});
});
$('#close').click(function(){
	notify_close[notify_index] = 1;
	$('.notification').slideUp();
});