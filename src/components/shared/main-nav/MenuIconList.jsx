import Exchange from "./MenuIconList/Exchange";
import Language from "./MenuIconList/Language";
import Settings from "./MenuIconList/Modal/Settings";
import Wallet from "./MenuIconList/Wallet";
import Chain from "./MenuIconList/Chain";

const MenuIconList = () => {
  return (
    <>
      <div className="menu-icon-list">
        <Exchange />
        <Language />
        {/* <Settings /> */}
        <Chain />
        <Wallet />
      </div>
    </>
  );
};

export default MenuIconList;
