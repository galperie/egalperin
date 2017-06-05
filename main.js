var clipboard = new Clipboard('.btn');


clipboard.on('success', function(e) {
    var tooltip = document.getElementById("copied");
    // console.log(tooltip);
    tooltip.style.display = '';
    console.log(`Success! Copied: ${e}`);
});

clipboard.on('error', function(e) {
    var tooltip = document.getElementById("copied");
    tooltip.style.display = 'none';
    console.log(`Yikes, ${e}`);
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
