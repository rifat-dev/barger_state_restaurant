import React from 'react'
import './team.css'
import chef1 from '../../assets/chef-1.jpg'
import chef2 from '../../assets/chef-2.jpg'
import chef3 from '../../assets/chef-3.jpg'

const Team = () => {
    return (
        <section className="team-section">
            <div className="container" >
                <div className="team-header">
                    <h4 className="tag">Specialties</h4>
                    <h2 className="title">Our Team</h2>
                </div>
                <div className="row team-row">
                    <div className="col-lg-4 team-member">
                        <img src={chef1} alt="Chef-1" />
                        <div className="team-about">
                            <h3>Aaron Patel</h3>
                            <h6>CEO</h6>
                            <ul class="list-inline mb-0 team-social-links">
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="fab fa-google-plus-g"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 team-member">
                        <img src={chef2} alt="Chef-2" />
                        <div className="team-about">
                            <h3>Daniel Tebas</h3>
                            <h6>Chef</h6>
                            <ul class="list-inline mb-0 team-social-links">
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="fab fa-google-plus-g"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 team-member">
                        <img src={chef3} alt="Chef-3" />
                        <div className="team-about">
                            <h3>Jon Snow</h3>
                            <h6>Chef</h6>
                            <ul class="list-inline mb-0 team-social-links">
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="fab fa-google-plus-g"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team
