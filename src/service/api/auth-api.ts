import { apiServerInstance } from '../ajax';

export interface AuthData {
	username: string;
	password: string;
}

// Login
export const reqLogin = (data: AuthData) =>
	apiServerInstance.post('/user/login', data);

// Register
export const reqRegister = (data: AuthData) =>
	apiServerInstance.post('/user/register', data);
