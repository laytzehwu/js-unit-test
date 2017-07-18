class LoginForm2 {
	constructor(form) {
		const $form = $(form);
		this._$form = $form;
		this._$loginID = $form.find('input[name="login"]');
		this._$password = $form.find('input[name="password"]');
		this._$loginButton = $form.find('button');
		this._$tc = $form.find('input[name="tc"]');
		const me = this;
		const update = function () {
			me.updateLoginButtonStatus();
		}
		this._$loginID.change(update);
		this._$password.change(update);
		this._$tc.change(update);
		this.updateLoginButtonStatus();
	}
	isLoginButtonDisable() {
		if (this.getLoginID() === '') {
			return true;
		}
		if (this.getPassword() === '') {
			return true;
		}
		if (!this.isAgreeTC()) {
			return true;
		}
		return false;
	}
	
	getLoginID() {
		return this._$loginID.length > 0 ? this._$loginID.val() : '';
	}
	
	getPassword() {
		return this._$password.length > 0 ? this._$password.val() : '';
	}
	
	isAgreeTC() {
		return this._$tc.length > 0 ? this._$tc.is(':checked') : false;
	}
	
	enableLogin() {
		this._$loginButton.removeAttr('disabled');
	}
	
	disableLogin() {
		this._$loginButton.attr('disabled', true);
	}
	
	updateLoginButtonStatus() {
		if (this.isLoginButtonDisable()) {
			this.disableLogin();
		} else {
			this.enableLogin();
		}
	}	
}