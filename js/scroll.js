function slowScroll(id){
    var offset = 50;
    $('body').removeClass('lock');
	$('.header__burger,.header__menu').removeClass('active');
	$('html,body').animate ({
		scrollTop: $(id).offset ().top - offset
	},50);

	return false;
}