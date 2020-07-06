// PRELOADER SETTINGS 
	
var preloader = (function(){
	
	var countNumber = 0;

setInterval( function(){
	if(countNumber < 100){
	countNumber++ ;
	document.getElementById('preloader__countdown').textContent = countNumber + ' %';
}
} ,40);
	
})();
    
var preloaderDisplay = (function(){
	setTimeout(function(){
		document.querySelector('.landing__preloader').style.transform = 'translateY(-800px)';
	} ,5000);
})();

setTimeout(function(){window.location.href='index2.html'},5100);










































