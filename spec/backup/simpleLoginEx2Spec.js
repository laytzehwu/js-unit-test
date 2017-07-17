describe('Login form Ex2', function () {
	it('Ensure the controller', function () {
		const control = new LoginFormEx2();
		expect(LoginFormEx2).not.toBeUndefined();
	});
	
	it('disable login button by default', function () {
		const loginForm = new LoginFormEx2();
		expect(loginForm.isLoginButtonDisable()).toBeTruthy();
	});
	
	it('disable login button when login id is empty', function () {
		const loginForm = new LoginFormEx2();
		const loginID = spyOn(loginForm, 'getLoginID');
		const password = spyOn(loginForm, 'getPassword');
		
		loginID.and.returnValue('');
		
		password.and.returnValue('');
		expect(loginForm.isLoginButtonDisable()).toBeTruthy();
		expect(loginForm.getLoginID).toHaveBeenCalled();

		loginForm.getLoginID.calls.reset();
		
		password.and.returnValue('ABC');
		expect(loginForm.isLoginButtonDisable()).toBeTruthy();
		expect(loginForm.getLoginID).toHaveBeenCalled();
	});
	
	it('disable login button when the password is empty', function () {
		
		const loginForm = new LoginFormEx2();
		const loginID = spyOn(loginForm, 'getLoginID');
		const password = spyOn(loginForm, 'getPassword');
		
		password.and.returnValue('');
		
		loginID.and.returnValue('');
		expect(loginForm.isLoginButtonDisable()).toBeTruthy();

		loginID.and.returnValue('ABC');
		expect(loginForm.isLoginButtonDisable()).toBeTruthy();
		expect(loginForm.getPassword).toHaveBeenCalled();
	});
	
	it('enable login button when both login id and password entered', function () {
		const loginForm = new LoginFormEx2();
		const loginID = spyOn(loginForm, 'getLoginID');
		const password = spyOn(loginForm, 'getPassword');
		const agreeTC = spyOn(loginForm, 'isAgreeTC');
		
		loginID.and.returnValue('ABC');
		password.and.returnValue('123');
		agreeTC.and.returnValue(true);
		
		expect(loginForm.isLoginButtonDisable()).toBeFalsy();
	});
	
	it('ensure login button is disable before user check T&C', function () {
		const loginForm = new LoginFormEx2();
		const loginID = spyOn(loginForm, 'getLoginID');
		const password = spyOn(loginForm, 'getPassword');
		const agreeTC = spyOn(loginForm, 'isAgreeTC');
		
		loginID.and.returnValue('ABC');
		password.and.returnValue('123');
		expect(loginForm.isLoginButtonDisable()).toBeTruthy();
		
		agreeTC.and.returnValue(true);
		expect(loginForm.isLoginButtonDisable()).toBeFalsy();
	});
	
	it('ensure login button disable/enable', function () {
		const loginForm = new LoginFormEx2();
		const loginChecker = spyOn(loginForm, 'isLoginButtonDisable');
		const enableLogin = spyOn(loginForm, 'enableLogin');
		const disableLogin = spyOn(loginForm, 'disableLogin');
		
		loginChecker.and.returnValue(true);
		loginForm.updateLoginButtonStatus();
		expect(loginForm.enableLogin).not.toHaveBeenCalled();
		expect(loginForm.disableLogin).toHaveBeenCalled();
		
		loginForm.enableLogin.calls.reset();
		loginForm.disableLogin.calls.reset();
		
		loginChecker.and.returnValue(false);
		loginForm.updateLoginButtonStatus();
		expect(loginForm.enableLogin).toHaveBeenCalled();
		expect(loginForm.disableLogin).not.toHaveBeenCalled();
	})
});