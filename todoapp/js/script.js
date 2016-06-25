$(document).ready(function(){
	$('#addButton').click(function(){
		$input=$('input[name=TodoText]').val();
		if($input!=""){
			$('.list').append("<div class='todoList'>"+$input+"</div>")
		}
	});
	$(document).on('click','.todoList',function(){
		$(this).fadeOut('slow');
		$(this).remove();
	});
});
