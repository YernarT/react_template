interface RoleProps {
	guest: string;
	user: string;
	admin: string;
	all: Function;
}

const Role: RoleProps = {
	guest: 'guest',
	user: 'user',
	admin: 'admin',
	all(): Array<string> {
		return [this.guest, this.user, this.admin];
	},
};

export default Role;
