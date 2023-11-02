import NFTImage from "./assets/images/image-equilibrium.jpg";
import Avatar from "./assets/images/image-avatar.png";
import EthIcon from "./assets/images/icon-ethereum.svg";
import ClockIcon from "./assets/images/icon-clock.svg";
import EyeIcon from "./assets/images/icon-view.svg";
import "./App.scss";
function App() {
    return (
        <main className="container">
            <div className="card-container">
                <div className="image-container">
                    <img
                        src={NFTImage}
                        alt="Equilibrium"
                        className="nft-image"
                    />
                    <img src={EyeIcon} alt="" className="icon" />
                </div>
                <h1 className="title">Equilibrium #3429</h1>
                <h2 className="description">
                    Our Equilibrium collection promotes balance and calm.
                </h2>
                <div className="details">
                    <h3 className="price">
                        {" "}
                        <img src={EthIcon} alt="" className="icon" /> 0.041 ETH
                    </h3>
                    <h3 className="time-stamp">
                        {" "}
                        <img src={ClockIcon} alt="" className="icon" /> 3 days
                        left
                    </h3>
                </div>
                <div className="author">
                    <img src={Avatar} alt="" />
                    <p>
                        Creation of <span>Jules Wyvern</span>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default App;
