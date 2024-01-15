export const adCarousselDocComponent = () => {
    const newElement = document.createElement('section');

    newElement.className = "ad-caroussel theme-change light-theme";
    newElement.innerHTML = `
    <div class="caroussel-card" >
      <div class="carousel slide" id="carouselExampleIndicators">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" id="carousel-item1">
      <div class="cardAC" id="card1">
        <div class="text-container">
          <div class="logoCont">
            <img
              src="/assets/Ad-caroussel/bunnylogo.png"
              alt="PancakeSwap"
              id="bunny-logo"
            />
            |
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 16"
              fill="none"
              width="60"
              height="18"
              color="text"
              class="sc-bcPKhP cvmRst"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.8379 7.91893C15.8379 12.2924 12.2862 15.8379 7.90511 15.8379C3.74856 15.8379 0.338654 12.6466 0 8.58458H10.4853V7.25327H0C0.338654 3.19126 3.74856 0 7.90511 0C12.2862 0 15.8379 3.54542 15.8379 7.91893ZM45.2475 14.4031C47.9962 14.4031 49.799 12.9217 49.799 10.6906C49.799 8.62009 48.4424 7.6384 46.3899 7.29927L44.5692 6.99583C43.1771 6.7638 42.2488 6.15692 42.2488 4.81825C42.2488 3.46173 43.2842 2.42649 45.2475 2.42649C47.1573 2.42649 48.139 3.39033 48.2461 4.7647H49.6205C49.5134 2.94411 48.1211 1.31985 45.2653 1.31985C42.4452 1.31985 40.8924 2.9084 40.8924 4.8718C40.8924 6.96013 42.3024 7.92398 44.2301 8.24526L46.0686 8.53085C47.6035 8.79858 48.4602 9.42329 48.4602 10.7441C48.4602 12.297 47.193 13.2965 45.2653 13.2965C43.2663 13.2965 42.0168 12.3327 41.9097 10.6906H40.5533C40.6604 12.8325 42.3024 14.4031 45.2475 14.4031ZM24.9836 14.1533H19.9858V1.58759H24.8051C26.9291 1.58759 28.4105 2.83701 28.4105 4.83611C28.4105 6.28187 27.5895 7.24571 26.2688 7.56699V7.62055C27.8394 7.92398 28.8032 8.99492 28.8032 10.6727C28.8032 12.8325 27.2147 14.1533 24.9836 14.1533ZM24.6266 7.10293C26.1438 7.10293 27.0719 6.28187 27.0719 4.99674V4.81825C27.0719 3.53313 26.1438 2.72992 24.6266 2.72992H21.3246V7.10293H24.6266ZM24.7872 13.0109C26.4472 13.0109 27.4646 12.1006 27.4646 10.7084V10.5299C27.4646 9.08416 26.4294 8.20957 24.7694 8.20957H21.3246V13.0109H24.7872ZM39.6135 14.1533H38.1855L37.1146 10.7441H32.1169L31.046 14.1533H29.6894L33.8126 1.58759H35.4368L39.6135 14.1533ZM34.6871 2.96196H34.5801L32.4738 9.61964H36.7755L34.6871 2.96196ZM51.8096 14.1533V1.58759H59.8774V2.74777H53.1484V7.06723H59.342V8.20957H53.1484V12.9931H59.8774V14.1533H51.8096Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <div class="titleAC"><h3>PancakeSwap Now Live on Base!</h3></div>
          <div class="subtitleAC">
            <h4>Swap and provide liquidity now</h4>
          </div>
          <div class="CTA">
            <button class="btn-sec" id="">Get Started</button>
          </div>
        </div>
        <div class="caroussel-img">
          <img
            src="/assets/Ad-caroussel/blue-card-1/base-bunny.webp"
            id="base-bunny1"
          />
          <img
            src="/assets/Ad-caroussel/blue-card-1/bunnybgblue2.webp"
            id="bunny-bg1"
          />
          <img
            src="/assets/Ad-caroussel/blue-card-1/cloudbunny1.webp"
            id="bunny-cloud1"
          />
          <img
            src="/assets/Ad-caroussel/blue-card-1/bunny1bg2.webp"
            id="bunny-bg1-2"
          />
          <img
            src="/assets/Ad-caroussel/blue-card-1/altbgbunny1.webp"
            id="bunny-altbg1"
          />
        </div>
      </div>
      </div>
      <div class="carousel-item" id="carousel-item2">
      <div class="card2AC" id="card2">
        <div class="text-container">
          <div class="logoCont">
            <img
              src="/assets/Ad-caroussel/bunnylogo.png"
              alt="PancakeSwap"
              id="bunny-logo2"
            />
            |
            <img
              src="/assets/Navbar/bnb.png"
              alt="PancakeSwap"
              id="bnb-logo2"
            />
          </div>
          <div class="titleAC2"><h3>PancakeSwap Now Live on opBNB!</h3></div>
          <div class="subtitleAC2">
            <h4>Swap and provide liquidity now</h4>
          </div>
          <div class="CTA2">
            <button class="btn-sec" id="main">Get Started</button>
          </div>
        </div>
        <div class="caroussel-img">
          <img
          src="/assets/Ad-caroussel/card2/opbnb-bunny.webp"
          id="base-bunny2"
        />
        </div>
      </div>
    </div>
    <div class="carousel-item" id="carousel-item3">
      <div class="card3AC" id="card3">
        <div class="text-container">
          <div class="logoCont">
            <img
              src="https://assets.pancakeswap.finance/web/banners/liquidStakingTitle.png"
              alt="PancakeSwap"
              id="bunny-logo3"
            />
          </div>
          <div class="titleAC3">
            <h3>Liquid Staking Integration for WBETH</h3>
          </div>
          <div class="subtitleAC3">
            <h4>ETH to WBETH conversion and earn ETH staking rewards</h4>
          </div>
          <div class="CTA3">
            <button class="btn-sec" id="">Get Started</button>
          </div>
        </div>
        <div class="caroussel-img">
          <img
          src="/assets/Ad-caroussel/card3/liquidStakingBunnyimg.png"
          id="base-bunny3"
        />
        <img
        src="/assets/Ad-caroussel/card3/alt-bunny.png"
        id="base-bunny3-alt"
      />
        <img
        src="/assets/Ad-caroussel/card3/liquidStakingBunnyBg1.png"
        id="bunny-bg3"
      />
      <img
      src="/assets/Ad-caroussel/card3/liquidStakingBunnyBg2.png"
      id="bunny-bg3-2"
    />
        </div>
      </div>
      </div>
      <div class="carousel-item " id="carousel-item5">
        <div class="card5AC" id="card5">
          <div class="text-container">
            <div class="subtitleAC5">
              <h4>Perpetual Futures</h4>
            </div>
            <div class="titleAC5">
              <h3>UP TO 100X LEVERAGE</h3>
            </div>
            <div class="CTA5">
              <button class="btn-main-blue theme-change light-theme" id="">Trade Now</button>
            </div>
          </div>
          <div class="caroussel-img">
            <img
            src="/assets/Ad-caroussel/card5/perpetualimg.webp"
            id="base-bunny5"
          />
          </div>
        </div>
      </div>
      <div class="carousel-item" id="carousel-item6">
        <div class="card6AC" id="card6">
          <div class="text-container">
            <div class="subtitleAC6">
              <h4>Trade to earn rewards</h4>
            </div>
            <div class="titleAC6">
              <h3>10% trading rebates to be earned</h3>
            </div>
            <div class="CTA6">
              <button class="btn-main-blue theme-change light-theme" id="">Trade Now</button>
              <button class="btn-main-white" id="">Learn more</button>
            </div>
          </div>
          <div class="caroussel-img">
            <img
            src="/assets/Ad-caroussel/card6/trading-reward-bunny.webp"
            id="base-bunny6"
          />
          <img
          src="/assets/Ad-caroussel/card6/butterbg.webp"
          id="bunny-bg6"
        />
        <img
          src="/assets/Ad-caroussel/card6/love-butterbg.webp"
          id="bunny-bg6-2"
        />
        <img
          src="/assets/Ad-caroussel/card6/butterbg.webp"
          id="bunny-bg6-3"
        />
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>

    `


    document.getElementById('ad-caroussel').appendChild(newElement)
}


/*  <div class="carousel-item " id="carousel-item4">
        <div class="card4AC" id="card4">
          <div class="text-container">
            <div class="logoCont">
              <img
                src="https://assets.pancakeswap.finance/web/banners/liquidStakingTitle.png"
                alt="PancakeSwap"
                id="bunny-logo4"
              />
            </div>
            <div class="titleAC4">
              <h3>Traverse the Treasure Islands on Galxe now!</h3>
            </div>
            <div class="subtitleAC4">
              <h4>Exclusive NFTs and treasures await!</h4>
            </div>
            <div class="CTA4">
              <button class="btn-main-blue theme-change light-theme" id="">Get Started</button>
            </div>
          </div>
          <div class="caroussel-img">
            <img
            src="/assets/Ad-caroussel/card4/"
            id="base-bunny4"
          />
          <img
          src="/assets/Ad-caroussel/card4/"
          id="base-bunny4-alt"
        />
          <img
          src="/assets/Ad-caroussel/card4/"
          id="bunny-bg4"
        />
        <img
        src="/assets/Ad-caroussel/card4"
        id="bunny-bg4-2"
      />
          </div>
        </div>
      </div>

      */