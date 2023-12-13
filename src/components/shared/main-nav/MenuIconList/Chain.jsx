const Chain = () => {
    return (
      <>
        <div class="chain">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-danger dropdown-toggle theme-change light-theme"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="chain-btn"
            >
              <img
                src="src/assets/bnb.png"
                class="dropdown-img-btn"
                id="chain-img-btn"
              />
              BNB Smart Chain
            </button>
            <ul
              class="chain-menu dropdown-menu theme-change light-theme"
              id="chain-select"
            >
              <li>
                <h6 class="chain-item dropdown-header theme-change light-theme">
                  Select a Network
                </h6>
              </li>
              <li>
                <hr class="chain-item dropdown-divider theme-change light-theme" />
              </li>
              <li>
                <a
                  class="chain-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <img src="src/assets/bnb.png" class="dropdown-img" /> BNB
                  Smart Chain
                </a>
              </li>
              <li>
                <a
                  class="chain-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <img src="src/assets/eth.png" class="dropdown-img" />
                  Ethereum
                </a>
              </li>
              <li>
                <a
                  class="chain-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <img src="src/assets/pol.png" class="dropdown-img" />
                  Polygon
                </a>
              </li>
              <li>
                <a
                  class="chain-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <img src="src/assets/zKsync.png" class="dropdown-img" />
                  zKsync
                </a>
              </li>
              <li>
                <a
                  class="chain-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <img src="src/assets/Arbitrum.png" class="dropdown-img" />
                  Arbitrum
                </a>
              </li>
              <li>
                <a
                  class="chain-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <img src="src/assets/Linea.png" class="dropdown-img" />
                  Linea Mainnet
                </a>
              </li>
              <li>
                <a
                  class="chain-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <img src="src/assets/Base.png" class="dropdown-img" />
                  Base
                </a>
              </li>
              <li>
                <a
                  class="chain-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <img src="src/assets/bnb.png" class="dropdown-img" />
                  opBNB Mainnet
                </a>
              </li>
              <li>
                <a
                  class="chain-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <img src="src/assets/aptos.png" class="dropdown-img" />
                  Aptos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  };
  
  export default Chain;
  


