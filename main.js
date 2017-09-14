$(function(){
  console.log(`%c _____________________________
< welcome to my site - Ellen >
------------------------------
       \\   ^__^
        \\  (oo)\\_______
           (__)\\       )\\/\\
               ||----w |
               ||     ||`, "font-family:monospace")
});


var clipboard = new Clipboard('.btn');

clipboard.on('success', function(e) {
    var copiedMessage = document.getElementById("copied");
    setTimeout(function(){
      copiedMessage.innerHTML = "";
    }, 1000);
    copiedMessage.innerHTML = "Copied!";
});

clipboard.on('error', function(e) {
    document.getElementById("copied").innerHTML = "";
    console.log(`Yikes, looks like something went wrong while trying to get my email. It's 11galpel@gmail.com, if you're curious`);
});


$(function() {
	$('a[href*=#]').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
       scrollTop: $(
         $(this).attr('href')
       ).offset().top
     }, 500, 'linear');
	});
});
