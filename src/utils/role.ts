export interface RoleProperties {
	guest: string;
	user: string;
	admin: string;
	all: Function;
}

export const Role: RoleProperties = {
	guest: 'guest',
	user: 'user',
	admin: 'admin',
	all(): string[] {
		return [this.guest, this.user, this.admin];
	},
};
