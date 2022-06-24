// 角色
export type allowedRole = 'GUEST' | 'USER' | 'ADMIN';

// 角色对象
export const role: {
	GUEST: 'GUEST';
	USER: 'USER';
	ADMIN: 'ADMIN';

	// 所有角色
	all: () => ['GUEST', 'USER', 'ADMIN'];
} = {
	GUEST: 'GUEST',
	USER: 'USER',
	ADMIN: 'ADMIN',

	// 所有角色
	all() {
		return ['GUEST', 'USER', 'ADMIN'];
	},
};
