export const mainBannerDocComponent = () => {
    const newElement = document.createElement('section');

    newElement.className = "main-banner theme-change light-theme";
    newElement.innerHTML = `
    <div class="mbcontainer">
    <div class="text-container">
        <h2 class="titleMB theme-change dark-theme">Everyone's <span class="color-change">Favorite</span> DEX</h2>
        <h4>Trade, earn, and own crypto on the all-in-one multichain DEX</h4>
        <button class="btn-main-blue btn-expanded theme-change light-theme" id="btn-banner">Connect Wallet</button>
        <button class="btn-sec-mb btn-expanded-mb theme-change light-theme" id=""><a href="https://pancakeswap.finance/swap">Trade Now</a></button>
     </div>
<div class="mbimg">
    <img src="assets/main-banner-img.png" id="main-banner-img">
</div>
</div>
    
    
    `


    document.getElementById('main-banner').appendChild(newElement)
}

