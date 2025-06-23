// PWA 注册
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/LibreTV/service-worker.js');
    });
}
