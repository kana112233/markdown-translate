// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import TranslateMd from './translate';
import Preview from './preview';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "markdown-translate" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('extension.ppy.showTextarea', () => {
			// The code you place here will be executed every time your command is executed
			let panel = vscode.window.createWebviewPanel(
				"textarea", // viewType
				"空白页面", // 视图标题
				vscode.ViewColumn.Three, // 显示在编辑器的哪个部位
				{
				  enableScripts: true, // 启用JS，默认禁用
				},
			  );
			panel.webview.html = `<textarea rows="100" cols="100" > </textarea>`;


			// Display a message box to the user
			// vscode.window.showInformationMessage('Hello World!');
		}),
		vscode.commands.registerCommand('extension.ppy.translate', () => {
			const tmd =  new TranslateMd();
			tmd.launch();
		}),
		vscode.commands.registerCommand('extension.ppy.preview', () => {
			const preview =  new Preview();
			preview.launch();
		})
	);
}

// this method is called when your extension is deactivated
export function deactivate() {}
