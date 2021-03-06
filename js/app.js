function getHeight() {
	var height = $('.promo, .promo-video').height();
	$('#overlay').css({'height': height + 'px'})
}

$(function () {
	window.setTimeout('getHeight()',100);
	$('#gallery a').on('click', function () {
		var image = $(this).find('img').attr('src');
		var imageSelected = image.split('thumbnail');
		var fullPath = imageSelected[0] + 'fullsize' + imageSelected[1];

		$('#galleryModal #imageContainer').attr('src', fullPath);
	})
})

$(window).resize(function() {
	getHeight();
});

$(document).foundation();
