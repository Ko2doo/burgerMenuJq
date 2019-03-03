$(document).ready(function() {

	// бургер
	$('.burger').click(function(burgerMenu){
		burgerMenu.preventDefault();
		$('.menu').removeClass('close').addClass('active');
	});

	$('.btn-close').click(function(burgerMenu){
		$('.menu.active').removeClass('active').addClass('close');

			//Добавим удаление класса 'close' через определенное время,
			//тем самым полностью скрыв объект т.к. класс '.menu' имеет свойство display:none;
			setTimeout(function(burgerMenu){
				$('.menu').removeClass('close');
			}, 1000);
	});

});