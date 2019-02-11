function loadscroler(){
	
}
$(document).on('ready',function(){ 
	"use strict";
	loadscroler();
	
		
	/*slideshow script code start here*/
	$('.slideshow').owlCarousel({
		items: 1,
		autoPlay: 5000,
		singleItem: true,
		navigation: true,
		navigationText: ['<i class="fa fa-long-arrow-left fa1"></i>', '<i class="fa fa-long-arrow-right fa2"></i>'],
		pagination: false,
	});
	/*slideshow script code end here*/
	
	/*slideshow1 script code start here*/
	$('.slideshow1').owlCarousel({
		items: 1,
		autoPlay: 5000,
		singleItem: true,
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left fa1"></i>', '<i class="fa fa-angle-right fa2"></i>'],
		pagination: true,
	});
	/*slideshow1 script code end here*/
	
	/*slideshow2 script code start here*/
	$('.slideshow2').owlCarousel({
		items: 1,
		autoPlay: 5000,
		singleItem: true,
		navigation: false,
		navigationText: ['<i class="fa fa-angle-left fa1"></i>', '<i class="fa fa-angle-right fa2"></i>'],
		pagination: false,
	});
	/*slideshow2 script code end here*/
	
	/*deal script code start here*/
	$('.deal').owlCarousel({
		items: 2,
		itemsDesktop : [1199, 2],
		itemsDesktopSmall : [979, 1],
		itemsTablet : [768, 1],
		itemsMobile : [479, 1],
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : false,
		navigationText: ['<i class="fa fa-long-arrow-left fa1"></i>', '<i class="fa fa-long-arrow-right fa2"></i>'],
		pagination: false,
	});
	/*deal script code end here*/
	
	/*vegetables script code start here*/
	$('.vegetables').owlCarousel({
		items: 2,
		itemsDesktop : [1199, 2],
		itemsDesktopSmall : [979, 1],
		itemsTablet : [768, 1],
		itemsMobile : [479, 1],
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : false,
		navigationText: ['<i class="fa fa-long-arrow-left fa1"></i>', '<i class="fa fa-long-arrow-right fa2"></i>'],
		pagination: false,
	});
	/*vegetables script code end here*/
	
	/*fruits script code start here*/
	$('.fruits').owlCarousel({
		items: 2,
		itemsDesktop : [1199, 2],
		itemsDesktopSmall : [979, 1],
		itemsTablet : [768, 1],
		itemsMobile : [479, 1],
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : false,
		navigationText: ['<i class="fa fa-long-arrow-left fa1"></i>', '<i class="fa fa-long-arrow-right fa2"></i>'],
		pagination: false,
	});
	/*fruits script code end here*/
	
	/*testimonail script code start here*/
	$('.testimonail').owlCarousel({
		items: 1,
		itemsDesktop : [1199, 1],
		itemsDesktopSmall : [979, 1],
		itemsTablet : [768, 1],
		itemsMobile : [479, 1],
		navigation : true,
		slideSpeed : 300,
		autoPlay: false,
		paginationSpeed : 400,
		singleItem : false,
		navigationText: ['<i class="fa fa-long-arrow-left fa1"></i>', '<i class="fa fa-long-arrow-right fa2"></i>'],
		pagination: false,
	});
	/*testimonail script code end here*/
	
	/*testimonail1 script code start here*/
	$('.testimonail1').owlCarousel({
		items: 2,
		itemsDesktop : [1199, 1],
		itemsDesktopSmall : [979, 1],
		itemsTablet : [768, 1],
		itemsMobile : [479, 1],
		navigation : true,
		slideSpeed : 300,
		autoPlay: false,
		paginationSpeed : 400,
		singleItem : false,
		navigationText: ['<i class="fa fa-long-arrow-left fa1"></i>', '<i class="fa fa-long-arrow-right fa2"></i>'],
		pagination: false,
	});
	/*testimonail1 script code end here*/
		
	/*testimonail3 script code start here*/
	$('.testimonail3').owlCarousel({
		items: 1,
		itemsDesktop : [1199, 1],
		itemsDesktopSmall : [979, 1],
		itemsTablet : [768, 1],
		itemsMobile : [479, 1],
		navigation : true,
		slideSpeed : 300,
		autoPlay: false,
		paginationSpeed : 400,
		singleItem : false,
		navigationText: ['<i class="fa fa-angle-left fa1"></i>', '<i class="fa fa-angle-right fa2"></i>'],
		pagination: false,
	});
	/*testimonail3 script code end here*/
	
	/*testimonail4 script code start here*/
	$('.testimonail4').owlCarousel({
		items: 2,
		itemsDesktop : [1199, 2],
		itemsDesktopSmall : [979, 2],
		itemsTablet : [768, 1],
		itemsMobile : [479, 1],
		navigation : false,
		slideSpeed : 300,
		autoPlay: false,
		paginationSpeed : 400,
		singleItem : false,
		navigationText: ['<i class="fa fa-angle-left fa1"></i>', '<i class="fa fa-angle-right fa2"></i>'],
		pagination: false,
	});
	/*testimonail4 script code end here*/
		
	/*abtestimonail script code start here*/
	$('.abtestimonail').owlCarousel({
		items: 2,
		itemsDesktop : [1199, 2],
		itemsDesktopSmall : [979, 2],
		itemsTablet : [768, 1],
		itemsMobile : [479, 1],
		navigation : false,
		slideSpeed : 300,
		autoPlay: false,
		paginationSpeed : 400,
		singleItem : false,
		navigationText: ['<i class="fa fa-angle-left fa1"></i>', '<i class="fa fa-angle-right fa2"></i>'],
		pagination: false,
	});
	/*abtestimonail script code end here*/
		
	/*carousel10 script code start here*/
	$('#carousel10').owlCarousel({
		items: 5,
		itemsDesktop : [1199, 4],
		itemsDesktopSmall : [979, 3],
		itemsTablet : [768, 2],
		itemsMobile : [479, 1],
		navigation : false,
		slideSpeed : 300,
		autoPlay: false,
		paginationSpeed : 400,
		singleItem : false,
		navigationText: ['<i class="fa fa-angle-left fa1"></i>', '<i class="fa fa-angle-right fa2"></i>'],
		pagination: false,
	});
	/*carousel10 script code end here*/

	/*season script code start here*/
	$('#season').owlCarousel({
		items: 1,
		itemsDesktop : [1199, 1],
		itemsDesktopSmall : [979, 1],
		itemsTablet : [768, 1],
		itemsMobile : [479, 1],
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : false,
		navigationText: ['<i class="fa fa-long-arrow-left fa1"></i>', '<i class="fa fa-long-arrow-right fa2"></i>'],
		pagination: false,
	});
	/*season script code end here*/
	
	//quantity code
	$(function () {
		$('.add').on('click',function(){
			var $qty=$(this).closest('p').find('.qty');
			var currentVal = parseInt($qty.val());
				$qty.val(currentVal + 1);
		});
		$('.minus').on('click',function(){
			var $qty=$(this).closest('p').find('.qty');
			var currentVal = parseInt($qty.val());
			$qty.val(currentVal - 1);					
		});
	});	
	
		
	// Product Grid
	$('#grid-view').on('click',function(){
		$('.product-list').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12');
		localStorage.setItem('display', 'grid');
	});
	$('#list-view').on('click',function(){
		$('.product-grid').attr('class', 'product-layout product-list col-xs-12');
		localStorage.setItem('display', 'list');
	});
	
	
	// Product Grid
	$('#grid-view1').on('click',function(){
		$('.product-list').attr('class', 'product-layout product-grid col-lg-3 col-md-3 col-sm-4 col-xs-12');
		localStorage.setItem('display', 'grid');
	});
	$('#list-view1').on('click',function(){
		$('.product-grid').attr('class', 'product-layout product-list col-xs-12');
		localStorage.setItem('display', 'list');
	});
	
 
    			
});


