// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import TranslateMd from './translate';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "markdown-translate" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('extension.helloWorld', () => {
			// The code you place here will be executed every time your command is executed

			// Display a message box to the user
			vscode.window.showInformationMessage('Hello World!');
		}),
		vscode.commands.registerCommand('extension.demo.testMenuShow', () => {
			const tmd =  new TranslateMd();
			tmd.launch();
			console.log('123');
			vscode.window.showInformationMessage('Hello World!'+'111');
		})
	);
}

// this method is called when your extension is deactivated
export function deactivate() {}
