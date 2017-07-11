'use strict';

class LoginerEx {
	constructor(form) {
		this._$form = $(form);
		this._$loginID = this._$form.find('input[name="login"]');
		this._$password = this._$form.find('input[name="password"]');
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
}