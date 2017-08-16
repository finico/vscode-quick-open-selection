'use strict';

const vscode = require('vscode');

function activate(context) {
    vscode.commands.registerCommand('quickOpenSelection.quickOpenSelection', () => {
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            vscode.commands.executeCommand(
                'workbench.action.quickOpen',
                editor.document.getText(editor.selection)
            );
        }
    });
}

exports.activate = activate;
