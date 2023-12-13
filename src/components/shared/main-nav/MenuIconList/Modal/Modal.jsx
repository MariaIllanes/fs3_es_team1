const Modal = ({}) => {
    return (
        <>
        <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content theme-change light-theme">
                <div class="modal-header theme-change light-theme">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Settings
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      color="#1FC7D7"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      class="sc-bcPKhP bIlHZF"
                    >
                      <path
                        fill="currentColor"
                        d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div class="modal-body">
                  <h5 class="modal-subtitle">GLOBAL</h5>
                  <div class="toggle-list">
                    <div class="text-toggle">
                      Dark mode
                      <label class="switch">
                        <input type="checkbox" id="main" />
                        <span class="slider round">
                          <div class="slider-images">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="icon-ligth theme-change light-theme"
                              id="icon-sun"
                              width="25"
                              height="25"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="#27262c"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
                              <path d="M6.343 17.657l-1.414 1.414" />
                              <path d="M6.343 6.343l-1.414 -1.414" />
                              <path d="M17.657 6.343l1.414 -1.414" />
                              <path d="M17.657 17.657l1.414 1.414" />
                              <path d="M4 12h-2" />
                              <path d="M12 4v-2" />
                              <path d="M20 12h2" />
                              <path d="M12 20v2" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="icon-light theme-change light-theme"
                              id="icon-moon"
                              width="25"
                              height="25"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="#9a6aff"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" fill="" />
                              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                            </svg>
                          </div>
                        </span>
                      </label>
                    </div>
                    <div class="text-toggle">
                      Subgraph Health Indicator{" "}
                      <span class="toggle-modal light-theme theme-change">
                        {" "}
                        <label class="switch-generic light-theme theme-change">
                          <input type="checkbox" checked />
                          <span class="slider-generic round light-theme theme-change"></span>
                        </label>
                      </span>
                    </div>
                    <div class="text-toggle">
                      <span>
                        Show username{" "}
                        <svg
                          viewBox="0 0 24 24"
                          width="16px"
                          xmlns="http://www.w3.org/2000/svg"
                          class="sc-bcPKhP Eouil text-toggle-icon"
                          color=""
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04"
                            fill="#afa4c7 !important"
                          ></path>
                        </svg>
                      </span>{" "}
                      <span class="toggle-modal light-theme theme-change">
                        {" "}
                        <label class="switch-generic light-theme theme-change">
                          <input type="checkbox" checked />
                          <span class="slider-generic round light-theme theme-change"></span>
                        </label>
                      </span>
                    </div>
                    <div class="text-toggle">
                      <span>
                        Token Risk Scanning{" "}
                        <svg
                          viewBox="0 0 24 24"
                          width="16px"
                          xmlns="http://www.w3.org/2000/svg"
                          class="sc-bcPKhP Eouil text-toggle-icon"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04"
                            fill="#afa4c7 !important"
                          ></path>
                        </svg>{" "}
                      </span>{" "}
                      <span class="toggle-modal light-theme theme-change">
                        {" "}
                        <label class="switch-generic light-theme theme-change">
                          <input type="checkbox" checked />
                          <span class="slider-generic round light-theme theme-change"></span>
                        </label>
                      </span>
                    </div>
                    <div class="text-toggle">
                      <span>
                        Default Transaction Speed (GWEI){" "}
                        <svg
                          viewBox="0 0 24 24"
                          width="16px"
                          xmlns="http://www.w3.org/2000/svg"
                          class="sc-bcPKhP Eouil text-toggle-icon"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04"
                            fill="#afa4c7 !important"
                          ></path>
                        </svg>{" "}
                      </span>{" "}
                      <span class="toggle"></span>
                    </div>
                  </div>
                  <div class="transaction-speed-container">
                    <button
                      id="speedBtn1"
                      class="transaction-speed-btn selected theme-change light-theme"
                      onclick="selectTransactionSpeed(1)"
                    >
                      Default
                    </button>
                    <button
                      id="speedBtn2"
                      class="transaction-speed-btn theme-change light-theme"
                      onclick="selectTransactionSpeed(2)"
                    >
                      Standard (3)
                    </button>
                    <button
                      id="speedBtn3"
                      class="transaction-speed-btn theme-change light-theme"
                      onclick="selectTransactionSpeed(3)"
                    >
                      Fast (4)
                    </button>
                    <button
                      id="speedBtn4"
                      class="transaction-speed-btn theme-change light-theme"
                      onclick="selectTransactionSpeed(4)"
                    >
                      Instant (5)
                    </button>
                  </div>
                </div>
                <div class="modal-footer"></div>
              </div>
            </div>
          </div>
      </>
    );
  };
  
  export default Modal;