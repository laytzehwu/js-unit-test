$(document).ready(function () {
	var $form = $('form#login');
	var $login = $form.find('input[name="login"]');
	var $password = $form.find('input[name="password"]');
	var $btnSubmit = $form.find('button[type="submit"]');
	var updateSubmit = function () {
		var allowSubmit = true;
		if ($login.val().length === 0) {
			allowSubmit = false;
		}
		if ($password.val().length === 0) {
			allowSubmit = false;
		}
		if (allowSubmit) {
			console.log('Allow submit');
			$btnSubmit.removeAttr('disabled');
		} else {
			console.log('Can not submit');
			$btnSubmit.attr('disabled', true);
		}
	}
	updateSubmit();
	$login.on('keyup', updateSubmit);
	$password.on('keyup', updateSubmit);
});