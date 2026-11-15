// l2d.js - Live2D 终极配置
(function() {
    // 1. 动态加载 oh-my-live2d 脚本，避免 CDN 不稳定
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/oh-my-live2d@0.19.3/dist/index.min.js'; // 锁定稳定版本
    script.onload = function() {
        // 2. 脚本加载成功后，立即初始化模型
        OML2D.loadOml2d({
            models: [
                {
                    // 这是你模型的正确公开地址
                    path: 'https://yueyismile.github.io/live2d/2.model3.json',
                    // 模型位置和缩放，可根据喜好微调
                    position: [0, 60],
                    scale: 0.15,
                    stageLayout: 'left'
                }
            ],
            // 3. 移动端不显示
            mobile: {
                show: false
            }
        });
    };
    script.onerror = function() {
        console.error('Live2D 脚本加载失败！请检查网络或 CDN 链接。');
    };
    // 将脚本标签添加到页面中
    document.head.appendChild(script);
})();