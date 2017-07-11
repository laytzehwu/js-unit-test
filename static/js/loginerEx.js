'use strict';

class LoginerEx {
	constructor(form) {
		this._$form = $(form);
		this._$loginID = this._$form.find('input[name="login"]');
		this._$password = this._$form.find('input[name="password"]');
		this._$btnSubmit = this._$form.find('button[type="submit"]');
		this._bind();
	}
	
	getLoginID() {
		return this._$loginID.val();
	}
	
	getPassword() {
		return this._$password.val();
	}
	
	get allowLogin() {
		if (_.isEmpty(this.getLoginID())) {
			return false;
		}
		if (_.isEmpty(this.getPassword())) {
			return false;
		}
		return true;
	}
	
	disableSubmitButton() {
		this._$btnSubmit.attr('disabled', true);
	}
	
	enableSubmitButton() {
		this._$btnSubmit.removeAttr('disabled');
	}
	
	updateLoginButton() {
		if (this.allowLogin) {
			this.enableSubmitButton();
		} else {
			this.disableSubmitButton();
		}
	}
	
	_bind() {
		const updateButton = function () {this.updateLoginButton();}
		this._$loginID.change(updateButton);
		this._$password.change(updateButton);
	}
}