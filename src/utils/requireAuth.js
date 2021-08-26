const requireAuth = userType => ({
	auth: [true],
	permission: [userType],
});

export default requireAuth;
