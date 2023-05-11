export class User {
	readonly uuid: string;
	readonly email: string;
	readonly password: string;

	constructor({ uuid, email, password}: { uuid: string; email: string; password: string }) {
		this.uuid = uuid;
		this.email = email;
		this.password = password;
	}
}
