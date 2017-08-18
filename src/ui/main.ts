import * as monacoloader from 'monaco-loader';

class Main {
    public editor;

    constructor() {
        monacoloader().then((monaco) => {
            this.loadeditor(monaco);
        });
    }

    public loadeditor(monaco) {
        this.editor = monaco.editor.create(document.querySelector
            ("#container"), {
                language: "javascript",
                theme: "vs-dark",
                automaticLayout: "true"
        })
    }
}

new Main();