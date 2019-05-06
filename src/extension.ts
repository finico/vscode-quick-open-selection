import { commands, window } from 'vscode';

export function activate() {
    commands.registerCommand('quickOpenSelection.quickOpenSelection', () => {
        const editor = window.activeTextEditor;

        if (editor) {
            commands.executeCommand(
                'workbench.action.quickOpen',
                editor.document.getText(editor.selection)
            );
        }
    });
}
