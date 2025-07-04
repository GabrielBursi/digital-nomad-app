export default function (plop) {
	plop.setGenerator('screen', {
		description: 'Create a screen',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Nome da página:',
			},
			{
				type: 'confirm',
				name: 'useProps',
				message: 'Vai usar type para as propriedades da página?',
			},
		],
		actions: [
			{
				type: 'add',
				path: '../src/screens/{{pascalCase name}}//{{pascalCase name}}.tsx',
				templateFile: 'templates/screen/index.tsx.hbs',
			},
			{
				type: 'add',
				path: '../src/screens/{{pascalCase name}}//{{pascalCase name}}.types.ts',
				templateFile: 'templates/screen/types.ts.hbs',
			},
		],
	})
}
