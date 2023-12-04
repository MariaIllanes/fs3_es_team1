import BunnyButton from "../sharedComponents/BunnyButton"
import StandardButton from "../sharedComponents/StandarButton"
import './FooterStyle.css'
import LanguageMenu from "./LanguageMenu";

const SecondaryFooter = () => {
    

    return (
        <div className="secondary-footer">
            <div className="footer-buttons">
                <div className="footer-left">
                    <LanguageMenu />
                </div>
                <div className="footer-rigth">
                    <BunnyButton />
                    <StandardButton href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56" text="Buy CAKE →" />
                </div>
            </div>
        </div>
    );
};

export default SecondaryFooter;
