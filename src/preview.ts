import * as vscode from "vscode";

const md = require('markdown-it')();

export default class Preview {
  private disposables: vscode.Disposable[] = [];
  private panel: vscode.WebviewPanel | null;

  constructor() {
    this.panel = null;
  }

  public async launch() {
    const editor: any = vscode.window.activeTextEditor;
    if (editor) {
      const document: any = editor.document;
      if (document) {
        const selectedText: any = document.getText();

        this.panel = vscode.window.createWebviewPanel(
          "preview", // 
          "预览页面", // 
          vscode.ViewColumn.Two, // 显示在编辑器的哪个部位
          {
            enableScripts: true, // 启用JS，默认禁用
          },
        );
        
        const rendererResult = md.render(selectedText)
     
        this.panel.webview.html = rendererResult;
        
        this.panel.webview.onDidReceiveMessage(
          (message) => {},
          null,
          this.disposables,
        );
      }
    }
  }
}
