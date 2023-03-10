/* eslint-disable */

import Box from '@mui/material/Box';
import sty from "./css/styles.css";
import { Mobile, Pc } from './responsive';

export default function About({children}) {
    return (
    <>
        <Pc><Box sx={{marginTop: 10,}}>
            <html lang="en">
                <head>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="description" content="" />
                    <meta name="author" content="" />
                    <title>Dollido - about</title>
                    <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
                    <link href={sty} rel="stylesheet" />
                </head>
                <body className="d-flex flex-column">
                    <main className="flex-shrink-0">
                        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className="container px-5">
                                <a className="navbar-brand" href="index.html">Dollido</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item dropdown">
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                                                <li><a className="dropdown-item" href="portfolio-overview.html">Portfolio Overview</a></li>
                                                <li><a className="dropdown-item" href="portfolio-item.html">Portfolio Item</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav> */}
                        <header className="py-5">
                            <div className="container px-5">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8 col-xxl-6">
                                        <div className="text-center my-5">
                                            <img className="img-fluid rounded mb-5 mb-lg-0" src="assets/logo.png" alt="..." />
                                            <p className="lead fw-normal text-muted mb-4">?????? ????????? ?????? ???????????? ???????????? ???????????? ????????? ??????????????? ???????????? ???????????? ???????????? ????????????, ???????????? ????????? ????????? ?????? ???????????? ??????????????? ??? ???????????? ???????????? ???????????????. </p>
                                            <a className="btn btn-primary btn-lg" href="#scroll-target">Read our story</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <section className="py-5 bg-light" id="scroll-target">
                            <div className="container px-5 my-5">
                                <div className="row gx-5 align-items-center">
                                    <div className="col-lg-6"><img className="img-fluid rounded mb-5 mb-lg-0" src="assets/lost112.png" alt="..." /></div>
                                    <div className="col-lg-6">  
                                        <h2 className="fw-bolder">?????? ?????? ?????? - lost112</h2>
                                        <p className="lead fw-normal text-muted mb-0">1. ???????????? ?????? ???????????? ????????? ??????????????? ???????????? ?????? ??????.</p>
                                        <p className="lead fw-normal text-muted mb-0">2. ??????????????? ???????????? ?????? ??????, ???????????? ?????? ????????? ??????????????? ????????? ??? ??????.</p>
                                        <p className="lead fw-normal text-muted mb-0">3. ???????????? ???????????? ?????? ?????? ??????, ???????????? ?????? ????????? ??????????????? ???????????? ?????????.</p>
                                        <p className="lead fw-normal text-muted mb-0">4. ?????????, ???????????? ????????? ?????????.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="py-5">
                            <div className="container px-5 my-5">
                                <div className="row gx-5 align-items-center">
                                    <div className="col-lg-6 order-first order-lg-last"><img className="img-fluid rounded mb-5 mb-lg-0" src="assets/dollido.png" alt="..." /></div>
                                    <div className="col-lg-6">
                                        <h2 className="fw-bolder">?????? ??????</h2>
                                        <p className="lead fw-normal text-muted mb-0">1. ?????? ?????? ?????? ???????????? ????????? ????????? ?????? ????????? ?????? ??? ??????, ??????, ????????? ????????????.</p>
                                        <p className="lead fw-normal text-muted mb-0">2. ???????????? ?????? ???????????? ?????? ????????? ?????? ??? ????????? ?????? ?????? ??????</p>
                                        <p className="lead fw-normal text-muted mb-0">3. ??? ???????????? ?????? AI ????????? ???????????? ?????? ??????????????? ????????? ??????????????????, ????????? ????????? ???????????? ???????????? ?????? ????????? ?????? ??? ??????.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="py-5 bg-light">
                            <div className="container px-5 my-5">
                                <div className="text-center">
                                    <h2 className="fw-bolder">Our team</h2>
                                    <p className="lead fw-normal text-muted mb-5">??????-?????? 14??? - Dollido</p>
                                </div>
                                <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                                    <div className="col mb-5 mb-5 mb-xl-0">
                                        <div className="text-center">
                                            <img className="img-fluid rounded-circle mb-4 px-4" src="assets/?????????.jpg" width = "200px" height = "200px" alt="..." />
                                            <h5 className="fw-bolder">?????????</h5>
                                            <div className="fst-italic text-muted">FE &amp; ??????</div>
                                        </div>
                                    </div>
                                    <div className="col mb-5 mb-5 mb-xl-0">
                                        <div className="text-center">
                                            <img className="img-fluid rounded-circle mb-4 px-4" src="assets/?????????.jpg" width = "200px" height = "200px" alt="..." />
                                            <h5 className="fw-bolder">?????????</h5>
                                            <div className="fst-italic text-muted">BE &amp; Modelling</div>
                                        </div>
                                    </div>
                                    <div className="col mb-5 mb-5 mb-sm-0">
                                        <div className="text-center">
                                            <img className="img-fluid rounded-circle mb-4 px-4" src="assets/?????????.jpg" width = "200px" height = "200px" alt="..." />
                                            <h5 className="fw-bolder">?????????</h5>
                                            <div className="fst-italic text-muted">BE &amp; FE</div>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div className="text-center">
                                            <img className="img-fluid rounded-circle mb-4 px-4" src="assets/?????????.jpg" width = "200px" height = "200px" alt="..." />
                                            <h5 className="fw-bolder">?????????</h5>
                                            <div className="fst-italic text-muted">BE &amp; Modelling</div>
                                        </div>
                                    </div>
                                    <div className="col mb-5 mb-5 mb-xl-0">
                                        <div className="text-center">
                                            <img className="img-fluid rounded-circle mb-4 px-4" src="assets/?????????.jpg" width = "200px" height = "200px" alt="..." />
                                            <h5 className="fw-bolder">?????????</h5>
                                            <div className="fst-italic text-muted">FE</div>
                                        </div>
                                    </div>
                                    <div className="col mb-5 mb-5 mb-xl-0">
                                        <div className="text-center">
                                            <img className="img-fluid rounded-circle mb-4 px-4" src="assets/?????????.png" width = "200px" height = "200px" alt="..." />
                                            <h5 className="fw-bolder">?????????</h5>
                                            <div className="fst-italic text-muted">Modelling</div>
                                        </div>
                                    </div>
                                    <div className="col mb-5 mb-5 mb-xl-0">
                                        <div className="text-center">
                                            <img className="img-fluid rounded-circle mb-4 px-4" src="assets/?????????.jpg" width = "200px" height = "200px" alt="..." />
                                            <h5 className="fw-bolder">?????????</h5>
                                            <div className="fst-italic text-muted">BE</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                    <footer className="bg-dark py-4 mt-auto">
                        <div className="container px-5">
                            <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                                <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; Your Website 2022</div></div>
                                <div className="col-auto">
                                    <a className="link-light small" href="#!">Privacy</a>
                                    <span className="text-white mx-1">&middot;</span>
                                    <a className="link-light small" href="#!">Terms</a>
                                    <span className="text-white mx-1">&middot;</span>
                                    <a className="link-light small" href="#!">Contact</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script> */}
                    {/* <script src="{% static 'js/scripts.js' %}"></script> */}
                </body>
            </html>
            </Box></Pc>

            <Mobile><Box sx={{marginTop: -5,}}>
            <html lang="en">
                <head>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="description" content="" />
                    <meta name="author" content="" />
                    <title>Dollido - about</title>
                    <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
                    <link href={sty} rel="stylesheet" />
                </head>
                <body className="d-flex flex-column">
                    <main className="flex-shrink-0">
                        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className="container px-5">
                                <a className="navbar-brand" href="index.html">Dollido</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item dropdown">
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                                                <li><a className="dropdown-item" href="portfolio-overview.html">Portfolio Overview</a></li>
                                                <li><a className="dropdown-item" href="portfolio-item.html">Portfolio Item</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav> */}
                        <header className="py-5">
                            <div className="container px-5">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8 col-xxl-6">
                                        <div className="text-center my-5">
                                            <img className="img-fluid rounded mb-5 mb-lg-0" src="assets/logo.png" alt="..." />
                                            <p className="lead fw-normal text-muted mb-4">?????? ????????? ?????? ???????????? ???????????? ???????????? ????????? ??????????????? ???????????? ???????????? ???????????? ????????????, ???????????? ????????? ????????? ?????? ???????????? ??????????????? ??? ???????????? ???????????? ???????????????. </p>
                                            <a className="btn btn-primary btn-lg" href="#scroll-target">Read our story</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <section className="py-5 bg-light" id="scroll-target">
                            <div className="container px-5 my-5">
                                <div className="row gx-5 align-items-center">
                                    <div className="col-lg-6"><img className="img-fluid rounded mb-5 mb-lg-0" src="assets/lost112.png" alt="..." /></div>
                                    <div className="col-lg-6">  
                                        <h2 className="fw-bolder">?????? ?????? ?????? - lost112</h2>
                                        <p className="lead fw-normal text-muted mb-0">1. ???????????? ?????? ???????????? ????????? ??????????????? ???????????? ?????? ??????.</p>
                                        <p className="lead fw-normal text-muted mb-0">2. ??????????????? ???????????? ?????? ??????, ???????????? ?????? ????????? ??????????????? ????????? ??? ??????.</p>
                                        <p className="lead fw-normal text-muted mb-0">3. ???????????? ???????????? ?????? ?????? ??????, ???????????? ?????? ????????? ??????????????? ???????????? ?????????.</p>
                                        <p className="lead fw-normal text-muted mb-0">4. ?????????, ???????????? ????????? ?????????.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="py-5">
                            <div className="container px-5 my-5">
                                <div className="row gx-5 align-items-center">
                                    <div className="col-lg-6 order-first order-lg-last"><img className="img-fluid rounded mb-5 mb-lg-0" src="assets/dollido.png" alt="..." /></div>
                                    <div className="col-lg-6">
                                        <h2 className="fw-bolder">?????? ??????</h2>
                                        <p className="lead fw-normal text-muted mb-0">1. ?????? ?????? ?????? ???????????? ????????? ????????? ?????? ????????? ?????? ??? ??????, ??????, ????????? ????????????.</p>
                                        <p className="lead fw-normal text-muted mb-0">2. ???????????? ?????? ???????????? ?????? ????????? ?????? ??? ????????? ?????? ?????? ??????</p>
                                        <p className="lead fw-normal text-muted mb-0">3. ??? ???????????? ?????? AI ????????? ???????????? ?????? ??????????????? ????????? ??????????????????, ????????? ????????? ???????????? ???????????? ?????? ????????? ?????? ??? ??????.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="py-5 bg-light">
                            <div className="container px-5 my-5">
                                <div className="text-center">
                                    <h2 className="fw-bolder">Our team</h2>
                                    <p className="lead fw-normal text-muted mb-5">??????-?????? 14??? - Dollido</p>
                                </div>
                                <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                                    <div className="col mb-5 mb-5 mb-xl-0">
                                        <div className="text-center">
                                            <img className="img-fluid rounded-circle mb-4 px-4" src="assets/?????????.jpg" width = "200px" height = "200px" alt="..." />
                                            <h5 className="fw-bolder">?????????</h5>
                                            <div className="fst-italic text-muted">FE &amp; ??????</div>
                                        </div>
                                    </div>
                                    <div className="col mb-5 mb-5 mb-xl-0">
                                        <div className="text-center">
                                            <img className="img-fluid rounded-circle mb-4 px-4" src="assets/?????????.jpg" width = "200px" height = "200px" alt="..." />
                                            <h5 className="fw-bolder">?????????</h5>
                                            <div className="fst-italic text-muted">BE &amp; Modelling</div>
                                        </div>
                                    </div>
                                    <div className="col mb-5 mb-5 mb-sm-0">
                                        <div className="text-center">
                                            <img className="img-fluid rounded-circle mb-4 px-4" src="assets/?????????.jpg" width = "200px" height = "200px" alt="..." />
                                            <h5 className="fw-bolder">?????????</h5>
                                            <div className="fst-italic text-muted">BE &amp; FE</div>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div className="text-center">
                                            <img className="img-fluid rounded-circle mb-4 px-4" src="assets/?????????.jpg" width = "200px" height = "200px" alt="..." />
                                            <h5 className="fw-bolder">?????????</h5>
                                            <div className="fst-italic text-muted">BE &amp; Modelling</div>
                                        </div>
                                    </div>
                                    <div className="col mb-5 mb-5 mb-xl-0">
                                        <div className="text-center">
                                            <img className="img-fluid rounded-circle mb-4 px-4" src="assets/?????????.jpg" width = "200px" height = "200px" alt="..." />
                                            <h5 className="fw-bolder">?????????</h5>
                                            <div className="fst-italic text-muted">FE</div>
                                        </div>
                                    </div>
                                    <div className="col mb-5 mb-5 mb-xl-0">
                                        <div className="text-center">
                                            <img className="img-fluid rounded-circle mb-4 px-4" src="assets/?????????.png" width = "200px" height = "200px" alt="..." />
                                            <h5 className="fw-bolder">?????????</h5>
                                            <div className="fst-italic text-muted">Modelling</div>
                                        </div>
                                    </div>
                                    <div className="col mb-5 mb-5 mb-xl-0">
                                        <div className="text-center">
                                            <img className="img-fluid rounded-circle mb-4 px-4" src="assets/?????????.jpg" width = "200px" height = "200px" alt="..." />
                                            <h5 className="fw-bolder">?????????</h5>
                                            <div className="fst-italic text-muted">BE</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                    <footer className="bg-dark py-4 mt-auto">
                        <div className="container px-5">
                            <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                                <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; Your Website 2022</div></div>
                                <div className="col-auto">
                                    <a className="link-light small" href="#!">Privacy</a>
                                    <span className="text-white mx-1">&middot;</span>
                                    <a className="link-light small" href="#!">Terms</a>
                                    <span className="text-white mx-1">&middot;</span>
                                    <a className="link-light small" href="#!">Contact</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script> */}
                    {/* <script src="{% static 'js/scripts.js' %}"></script> */}
                </body>
            </html>
            </Box></Mobile>
        </>
    );
}
