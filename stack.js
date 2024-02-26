import('./pkg/web_stack.js').then(module => {
    // ページの読み込みが完了したら実行する処理
    // class が stack である要素を全て取得
    const stackElements = document.getElementsByClassName("stack");
    
    // 各要素に対して処理を行う
    for (let i = 0; i < stackElements.length; i++) {
        const stackElement = stackElements[i];
        const code = stackElement.innerText.trim(); // 要素内のテキストを取得し、両端の空白を除去する
        const result = module.run_stack(code).output(); // Stack 言語のコードを実行する
        stackElement.innerHTML = result; // 結果を要素内に表示する
    }
});