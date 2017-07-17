describe('login form', function () {
	it('Should Test controller is existed', function () {
		const controller = new LoginForm();
		expect(controller).toBeTruthy();
	});
	it('should disable login by default', function (){
		const controller = new LoginForm();
		expect(controller.enableLogin()).toBe(false);
	});
	it('should disable login when login id is empty even password is entered', function (){
		const controller = new LoginForm();
		// How to provide get login and password
		spyOn(controller, 'getLoginID').and.returnValue('');
		spyOn(controller, 'getPassword').and.returnValue('XYZ');
		// Check whether the login button is enable
		expect(controller.enableLogin()).toBe(false);
	});
	it('should disable login button when password is empty even login id is entered', function (){
		const controller = new LoginForm();
		// How to provide get login and password
		spyOn(controller, 'getLoginID').and.returnValue('XYZ');
		spyOn(controller, 'getPassword').and.returnValue('');
		// Check whether the login button is enable
		expect(controller.enableLogin()).toBe(false);
	});
	it('should enable login button when user provides login id and password', function () {
		const controller = new LoginForm();
		// How to provide get login and password
		spyOn(controller, 'getLoginID').and.returnValue('XYZ');
		spyOn(controller, 'getPassword').and.returnValue('ABC');
		// Check whether the login button is enable
		expect(controller.enableLogin()).toBe(true);
	});
	
});
