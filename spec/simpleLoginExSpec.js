describe('Simple login form', function () {
	it('Ensure loginer existed', function () {
		expect(LoginerEx).not.toBeUndefined();;
	});
	it('Ensure login button disable defaultly', function () {
		var loginer = new LoginerEx('form');
		expect(loginer.allowLogin).not.toBeUndefined();;
		expect(loginer.allowLogin).toBeFalsy();
	});
	it('Ensure login button enable when both login ID and password entered', function () {
		var loginer = new LoginerEx('form');
		spyOn(loginer, 'getLoginID').and.returnValues('ABC123');
		spyOn(loginer, 'getPassword').and.returnValues('123456');
		expect(loginer.allowLogin).toBeTruthy();
		expect(loginer.getLoginID).toHaveBeenCalled();
		expect(loginer.getPassword).toHaveBeenCalled();
	});
	it('login button still disable after login id entered but password is empty', function () {
		var loginer = new LoginerEx('form');
		spyOn(loginer, 'getLoginID').and.returnValues('ABC123');
		expect(loginer.allowLogin).toBeFalsy();
		expect(loginer.getLoginID).toHaveBeenCalled();
	});
});