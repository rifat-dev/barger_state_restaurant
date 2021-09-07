import './hader.css'

const Hader = () => {
    return (
        <div className="home-hader" >
            {/* <div className="home-hader_inner">
                <h2>Welcome To <span>Burger State</span> </h2>
                <h3>Choose Your Favorite One</h3>
                <h1>Best food waiting for your belly</h1>
            </div> */}

            <div className="home-header-container">
                <div className="home-header-row">
                    <div className="header-left">
                        <h1 className="display-4 mb-5">We Love <br />Delicious Foods!</h1>

                        <div class="mb-2">
                            <a class="btn-grad header-btn" href="#" role="button">Explore Menu</a>
                            <a class="btn-icon btn-lg header-btn-2" href="https://player.vimeo.com/video/33110953" data-featherlight="iframe" data-featherlight-iframe-allowfullscreen="true">
                                <span class="lnr lnr-film-play"></span> Play Video
                            </a>
                        </div>
                        <ul className="hero-info list-unstyled d-flex text-center mb-0">
                            <li className="border-right">
                                <span className="lnr lnr-rocket"></span>
                                <h5>
                                    Fast Delivery
                                </h5>
                            </li>
                            <li className="border-right">
                                <span className="lnr lnr-leaf"></span>
                                <h5>
                                    Fresh Food
                                </h5>
                            </li>
                            <li className="">
                                <span className="lnr lnr-bubble"></span>
                                <h5>
                                    24/7 Support
                                </h5>
                            </li>
                        </ul>
                    </div>
                    <div className="header-right">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hader;
