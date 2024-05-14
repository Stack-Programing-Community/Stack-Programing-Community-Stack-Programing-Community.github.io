import init, { run_stack } from './pkg/web_stack.js';

init().then(() => {
    window.run_stack = run_stack;
    
    const stackElements = document.getElementsByClassName("stack");

    for (let i = 0; i < stackElements.length; i++) {
        const stackElement = stackElements[i];
        const code = stackElement.innerText.trim(); 
        const result = run_stack(code).output(); 
        stackElement.innerHTML = result; 
    }
});
