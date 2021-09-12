import { useEffect } from 'react'
import './hader.css'
import img1 from '../../../assets/hero-1.jpg'
import img2 from '../../../assets/hero-2.jpg'
import img3 from '../../../assets/hero-3.jpg'

const Hader = () => {

    let index = 1
    const pushSlide = (n) => {
        showSlide(index += n)
    }

    const showSlide = (n) => {
        let i;
        let slides = document.getElementsByClassName("slides")
        if (n > slides.length) { index = 1 }
        if (n < 1) { index = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none'
        }
        slides[index - 1].style.display = "block"
    }


    useEffect(() => {
        const timer = setTimeout(() => {
            let slides = document.getElementsByClassName("slides")
            slides[index - 1].style.display = "block"
        }, 500)
        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <div className="home-hader" >
            <div className="home-header-container">
                <div className="home-header-row">
                    <div className="header-left col-lg-6">
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
                            <li className="border-right ">
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
                    <div className="header-right col-lg-6">
                        <div className="slideshow-container">
                            <div className="slides slide-fade " >
                                <img className="slide-img" src={img1} alt="Food" />
                            </div>
                            <div className="slides slide-fade " >
                                <img className="slide-img" src={img2} alt="Food" />
                            </div>
                            <div className="slides slide-fade " >
                                <img className="slide-img" src={img3} alt="Food" />
                            </div>
                            <a className="prev" onClick={() => pushSlide(-1)}>&#10094;</a>
                            <a className="next" onClick={() => pushSlide(-1)} >&#10095;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hader;
