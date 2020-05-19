$(document).ready(function(){

	var elem = document.querySelector('.columns');

	var iso = new Isotope(elem, {
		itemSelector: '.card',
	});

	$('.columns').imagesLoaded(function(){
		var msnry = new Masonry(elem,{
			itemSelector: '.card',
			columnWidth: 375,
			fitWidth: true
		});
  });

	$('.list-group-item').on( 'click', 'button', function() {
		  var filterValue = $( this ).attr('data-sort');

		  iso.arrange({
		  	filter: filterValue,
		  	masonry: {
		  		columnWidth: 375
		  	},
		  	transitionDuration: 0,
		  	hiddenStyle: {
		  		opacity: .2
		  	},
		  	visibleStyle: {
		  		opacity: 1
		  	}

		  });

		  $('.sorts').children().removeClass('active');
		  $('.sorts[data-sort=' + '"' + filterValue + '"' + ']').children().addClass('active');
		});

		$('.nav-item').click(function(){
			$('.nav-item').removeClass('active');
			$(this).addClass('active');
		});


	$(window.location.hash).modal('show');
	 $('button[data-toggle="modal"]').click(function(){
	     window.location.hash = $(this).data('target');
	 });

	 function revertToOriginalURL() {
	     var original = window.location.href.substr(0, window.location.href.indexOf('#'))
	     history.replaceState({}, document.title, original);
	 }
	 $('.modal').on('shown.bs.modal', function(a){
		 	 $('body').addClass('noselect');
			 $(a.currentTarget).addClass('selectme');
	 });
	 $('.modal').on('hidden.bs.modal', function () {
		 	 $('body').removeClass('noselect');
			 $('.modal').removeClass('selectme');
	     revertToOriginalURL();
	 });

	 $("#faith").on('hidden.bs.modal', function (e) {
	    $("#faith iframe").attr("src", $("#faith iframe").attr("src"));
	});

	function newcolorpicker(){
		var rand = Math.floor(Math.random()*360);
		var interval = 360/$('.card').length;
		$('.card').each(function(i){
			$(this).css('border-color','hsl(' + (rand+i*interval)%360 + ',100%,50%)');
			$($(this).data('target')).children().children().css('border-color','hsl(' + (rand+i*interval)%360 + ',100%,50%)');
		});
	}
	newcolorpicker();

	// (function() {
	//   var links = document.links;
	//   for (var i = 0, linksLength = links.length; i < linksLength; i++) {
	//     // can also be
	//     //  links[i].hostname != 'subdomain.example.com'
	//     if (links[i].hostname != window.location.hostname) {
	//       links[i].target = '_blank';
	//       links[i].className += ' externalLink';
	//     }
	//   }
	// })();

});
