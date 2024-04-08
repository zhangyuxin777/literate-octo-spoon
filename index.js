// 检测 MetaMask 是否安装和已连接到以太坊网络
window.addEventListener('load', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            // 请求用户授权连接 MetaMask
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            document.getElementById('status').innerText = 'MetaMask已连接！';
        } catch (error) {
            console.error(error);
            document.getElementById('status').innerText = '连接请求被拒绝！';
        }
    } else {
        document.getElementById('status').innerText = 'MetaMask未安装！';
    }
});

// 按钮点击事件，触发连接操作
document.getElementById('connectButton').addEventListener('click', async () => {
    try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        document.getElementById('status').innerText = 'MetaMask已连接！';
    } catch (error) {
        console.error(error);
        document.getElementById('status').innerText = '连接请求被拒绝！';
    }
});