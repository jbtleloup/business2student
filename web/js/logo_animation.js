
	$("#B-letter-home").delay(1000).animate({
		left: "0%"
	}, {
		duration: 1000
	});
	$("#S-letter-home").delay(1000).animate({
		right: "0%",
		bottom: "0px"
	}, {
		duration: 1000
	});
	$("#usiness-home").delay(2000).toggle(2000); 
	$("#to-home").delay(2000).toggle(2000);
	$("#tudents-home").delay(2000).toggle(2000);

	$("#bienvenue").delay(4000).queue(function (next) { 
    	$(this).css('visibility', 'visible'); 
    	next(); 
  	});

  	$("#slogan").delay(4000).queue(function (next) { 
    	$(this).css('visibility', 'visible'); 
    	next(); 
  	});
	

	$("#bienvenue").delay(0).fadeOut(0); 
	$("#bienvenue").delay(0).fadeIn(2000); 
	$("#border_top").delay(4000).fadeIn(2000); 
	$("#border_bottom").delay(4000).fadeIn(2000);
	$("#slogan").delay(0).fadeOut(0); 
	$("#slogan").delay(0).fadeIn(2000); 
