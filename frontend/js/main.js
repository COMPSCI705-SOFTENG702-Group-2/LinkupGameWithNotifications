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
var $jQuery = jQuery.noConflict();
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
	var height = $jQuery(window).height();
	for(var i=0;i<50;i++){
		if(arr[1][i]){
			tmp.push(Number((arr[1][i]/height).toFixed(2)));
		}else{
			tmp.push(-1);
		}
	}
	return tmp;
}

function record(){
	  store_points_variable();
	  sleep(8000).then(() => {
		stop_storing_points_variable();
		eyetrack_data.push(calculate(webgazer.getStoredPoints()));
	  });
}

var notify1=["Sofia was born with hearing loss and has worn hearing aids for most of her life. Sofia’s family immigrated to New Zealand from Mexico in 2014. Sofia had only a little knowledge of the English language. Sofia was granted the right to be funded for cochlear implants.",
	"Grace has physical challenges and uses a wheelchair.",
	"Grace has had multiple surgeries over many years rehabilitating at the Wilson Centre.",
	"In spite of disability Grace passed NCEA 2 endorsed with Excellence overall.",
	"Grace is currently a member of the student Leadership team as the Head of Academic.",
	"Alisha Smith is winner of the 2018 Quota New Zealand Educational Scholarship. Alisha is already a very talented artist and loves web design and animation. Alisha will be enrolling for a Bachelor of Design Innovation in 2019. Alisha hopes to use her artistic skills to help others.",
	"Hamlin was born October 30, 1951, in Pasadena, California.",
	"In early 1991 Hamlin appeared in the music video and sang in the choir on the song \"Voices That Care\".",
	"In June 2010, Hamlin starred in the Hallmark Channel movie You Lucky Dog.",
	"Hamlin reprised the role of Perseus in the 2007 video game God of War II.",
	"Whisper is the Cultural Leader for her school. Whisper volunteers at the Kauri Kids Early Childhood Centre. Whisper has impacted the school with her friendly to younger students. Whisper also looks after her younger and contributes to household chores.",
	"In 2004, Sheridan was cast as Edie Britt in the ABC comedy-drama series Desperate Housewives.",
	"The character was originally written as a recurring role in the series.",
	"In April 2010, Sheridan filed a $20 million lawsuit against Desperate Housewives creator.",
	"By March 19, 2012, the jury had failed to reach a verdict and a mistrial was declared.",
	"Lisa is an American actress, author and television personality. Rinna has written two books: Starlit; The Big Fun Book. Rinna graduated from Medford Senior High School in 1981. In 2014, Rinna joined the cast of The Real Housewives of Beverly Hills.",
	"Wilson's acting career began with the lead role in the short film Bottle Rocket in 1994.",
	"Wilson and brother Owen have co-written a Wright Brothers biopic.",
	"Wilson played the physician beau of a schoolteacher in Rushmore.",
	"In July 2007, Wilson worked on Henry Poole is Here in La Mirada, California, which was released in 2008."];

var notify2=[
	"Grace has physical challenges and uses a wheelchair.",
	"Grace has had multiple surgeries over many years rehabilitating at the Wilson Centre.",
	"In spite of disability Grace passed NCEA 2 endorsed with Excellence overall.",
	"Grace is currently a member of the student Leadership team as the Head of Academic.",
	"Sofia was born with hearing loss and has worn hearing aids for most of her life. Sofia’s family immigrated to New Zealand from Mexico in 2014. Sofia had only a little knowledge of the English language. Sofia was granted the right to be funded for cochlear implants.",
	"Hamlin was born October 30, 1951, in Pasadena, California.",
	"In early 1991 Hamlin appeared in the music video and sang in the choir on the song \"Voices That Care\".",
	"In June 2010, Hamlin starred in the Hallmark Channel movie You Lucky Dog.",
	"Hamlin reprised the role of Perseus in the 2007 video game God of War II.",
	"Alisha Smith is winner of the 2018 Quota New Zealand Educational Scholarship. Alisha is already a very talented artist and loves web design and animation. Alisha will be enrolling for a Bachelor of Design Innovation in 2019. Alisha hopes to use her artistic skills to help others.",
	"In 2004, Sheridan was cast as Edie Britt in the ABC comedy-drama series Desperate Housewives.",
	"The character was originally written as a recurring role in the series.",
	"In April 2010, Sheridan filed a $20 million lawsuit against Desperate Housewives creator.",
	"By March 19, 2012, the jury had failed to reach a verdict and a mistrial was declared.",
	"Whisper is the Cultural Leader for her school. Whisper volunteers at the Kauri Kids Early Childhood Centre. Whisper has impacted the school with her friendly to younger students. Whisper also looks after her younger and contributes to household chores.",
	"Wilson's acting career began with the lead role in the short film Bottle Rocket in 1994.",
	"Wilson and brother Owen have co-written a Wright Brothers biopic.",
	"Wilson played the physician beau of a schoolteacher in Rushmore.",
	"In July 2007, Wilson worked on Henry Poole is Here in La Mirada, California, which was released in 2008.",
	"Lisa is an American actress, author and television personality. Rinna has written two books: Starlit; The Big Fun Book. Rinna graduated from Medford Senior High School in 1981. In 2014, Rinna joined the cast of The Real Housewives of Beverly Hills."];

var notify_index = 0;
var test_group_id
function showNotify(){
	notify = test_group_id == 1 ? notify1 : notify2;
	if(notify_index<notify.length){
		$jQuery('#msg').text(notify[notify_index]);
		record();
		$jQuery('.notification').slideDown();
		sleep(5000).then(() => {
			$jQuery('.notification').slideUp();
			notify_index+=1;
		});
	}
}

function setupGame(test_group_id) {
	$jQuery('#webgazerVideoFeed').hide();
	$jQuery('#webgazerVideoCanvas').hide();
	$jQuery('#webgazerFaceOverlay').hide();
	$jQuery('#webgazerFaceFeedbackBox').hide();
	$jQuery('.close_video').hide();
	$jQuery('#plotting_canvas').hide();
	store_points_variable();
	sleep(10000).then(() => {
		stop_storing_points_variable();
	});
	var game = new Game();
	game.setup();
	event(game);
	notification_timer = setInterval(showNotify, 30000);
}

var notification_timer;
$jQuery(document).ready(function(){
$jQuery('.notification').slideUp();

	$jQuery('#start_game_1').click(function(){
		test_group_id = 1;
		setupGame();
	});
	$jQuery('#start_game_2').click(function(){
		test_group_id = 2;
		setupGame();
	});
});



$jQuery('#close').click(function(){
	notify_close[notify_index] = 1;
	$jQuery('.notification').slideUp();
});
alert("Please wait few seconds and put your face into the square and wait until it detects your face and turn green, then click 'Start Game' button to start the game.");
