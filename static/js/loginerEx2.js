'use strict';

class LoginFormEx2 {
	constructor(form) {
		const $form = $(form);
		this._$form = $form;
		this._$loginID = $form.find('input[name="login"]');
		this._$password = $form.find('input[name="password"]');
		this._$loginButton = $form.find('button');
		const me = this;
		const update = function () {
			me.updateLoginButtonStatus();
		}
		this._$loginID.change(update);
		this._$password.change(update);
		this.updateLoginButtonStatus();
	}
	
	isLoginButtonDisable() {
		if (this.getLoginID() === '') {
			return true;
		}
		if (this.getPassword() === '') {
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
};