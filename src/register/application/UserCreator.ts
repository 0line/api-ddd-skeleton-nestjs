import { User } from '../domain/user';
import { UserRepository } from '../domain/userRepository';

export class UserCreator {
	private readonly repository: UserRepository;

	constructor(repository: UserRepository) {
		this.repository = repository;
	}

	async run(uuid: string, email: string, password: string): Promise<void> {
		const user = new User({ uuid, email, password });
		return this.repository.save(user);
	}	
}
