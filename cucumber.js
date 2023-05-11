const common = [
	'test/features/**/*.feature',
	'--require-module ts-node/register', // Load TypeScript module
    '--format progress-bar', // Load custom formatter
];

const usersApi = [
	...common,
	'--require test/step-definitions/**/*.steps.ts',
].join(' ');

module.exports = {
	usersApi
};