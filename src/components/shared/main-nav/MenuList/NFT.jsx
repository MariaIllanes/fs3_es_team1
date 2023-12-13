const NFT = ({ title }) => {
  return (
    <>
      <div class="nft theme-change light-theme">
        <h2>
          <div class="dropdown">
            <a
              class="nft-dropdown btn btn-secondary theme-change light-theme"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="nft-drop"
            >
              {title}
            </a>
            <ul class="dropdown-menu theme-change light-theme" id="nft-menu">
              <li>
                <a
                  class=" nft-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <h2>Overview</h2>
                </a>
              </li>
              <li>
                <a
                  class=" nft-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <h2>Collections</h2>
                </a>
              </li>
              <li>
                <a
                  class=" nft-item dropdown-item theme-change light-theme extra-svg"
                  href="#"
                >
                  <h2>Activity</h2>
                </a>
              </li>
            </ul>
          </div>
        </h2>
      </div>
    </>
  );
};

export default NFT;
