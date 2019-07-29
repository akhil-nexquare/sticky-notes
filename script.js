$("#newNote").click(function() {
	console.log('clicked');
	$("#notes").append("<li class='color-switch'>" + 
  	"<textarea class='note-title' placeholder='Enter title' maxlength='15'/>" + 
	  "<textarea class='note-content' placeholder='Enter note here'/>" + 
	  "<div class ='main-div'>"+
	  "<div class='delete'><img class='close' src='images/delete.png'/></div>" + 
	  "<div class='color-comb'><img class='' src='images/color.png'/> <div class='color-container'><div class='color light-brown' data-value='#f5742a'></div>"+
	 "<div class='color yellow' data-value='#ecef44'></div>"+
	"<div class='color blue' data-value='#c8fdfd'></div>"+
	 "<div class='color light -yellow' data-value='#f8c058'></div>"+
	  "<div class='color sky-blue' data-value='#58ebcb'></div>"+
	   "<div class='color pink' data-value='pink'></div></div>"+

  "</div>"+"</div>"+"</li>");

  	$(".close").click(function() {
	console.log('clicked close button');
	$(this).closest('li').css('display', 'none');
	});

	$(".color").click(function(){
		var color = $(this).attr("data-value");
    $(this).closest('li').css("background-color", color);
	});
});

///jkshdjksda




