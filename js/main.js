$(function(){
	'use strict';
	var winh =$(window).height(),
	upperh=$('.upper-bar').innerHeight(),
	navh=$('.navbar').innerHeight();
	$('.slider , .carousel-item').height(winh-(upperh+navh));
	$('.feature ul li ').on('click',function()
	{
		$(this).addClass('active').siblings().removeClass('active');
		if($(this).data('class') === 'all')
		{
				$('.shuffle-img  .col-sm').css('opacity',1);
		}
		else 
		{
			$('.shuffle-img  .col-sm').css('opacity','.08');
			$($(this).data('class')).parent().css('opacity',1);
		}
	});



});