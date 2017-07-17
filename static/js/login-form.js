class LoginForm {
	constructor(){
		this._loginID = '';
		this._password = '';
	}
	
	getLoginID() {
		return this._loginID;
	}
	
	getPassword() {
		return this._password;
	}
	
	enableLogin() {
		if (_.isEmpty(this.getLoginID())) {
			return false;
		}
		if (_.isEmpty(this.getPassword())) {
			return false;
		}
		return true;
	}
	
}