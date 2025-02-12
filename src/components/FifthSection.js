import '../style/fifthSection.css';
import '../style/section.css';

function FifthSection() {
    return (
        <section className="sectionFive">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-12">
                    <h1>Frequently Asked Questions</h1>
                </div>
            </div>

            <div className="row d-flex justify-content-center">
                <div className="col-sm-8 accordians">
                    <div className="accordion accordion-flush accordianContainer" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    What is Netflix?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    Netflix is a streaming service that offers a wide variety of award-winning TV shows,
                                    movies, anime, documentaries and more - on thousands of internet-connected devices.

                                    You can watch as much as you want, whenever you want, without a single ad - all for one
                                    low monthly price. There's always something new to discover, and new TV shows and movies
                                    are added every week!
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                    How much does Netflix cost?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for
                                    one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no
                                    contracts.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    Where can I watch?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web
                                    at netflix.com from your personal computer or on any internet-connected device that
                                    offers the Netflix app, including smart TVs, smartphones, tablets, streaming media
                                    players and game consoles.

                                    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use
                                    downloads to watch while you're on the go and without an internet connection. Take
                                    Netflix with you anywhere.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFour" aria-expanded="false"
                                    aria-controls="flush-collapseFour">
                                    How do I cancel?
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    Netflix is flexible. There are no annoying contracts and no commitments. You can easily
                                    cancel your account online in two clicks. There are no cancellation fees - start or stop
                                    your account anytime
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFive" aria-expanded="false"
                                    aria-controls="flush-collapseFive">
                                    What can I watch on Netflix?
                                </button>
                            </h2>
                            <div id="flush-collapseFive" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    Netflix has an extensive library of feature films, documentaries, TV shows, anime,
                                    award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingSix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseSix" aria-expanded="false"
                                    aria-controls="flush-collapseSix">
                                    Is Netflix good for kids?
                                </button>
                            </h2>
                            <div id="flush-collapseSix" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    The Netflix Kids experience is included in your membership to give parents control while
                                    kids enjoy family-friendly TV shows and films in their own space.

                                    Kids profiles come with PIN-protected parental controls that let you restrict the
                                    maturity rating of content kids can watch and block specific titles you don’t want kids
                                    to see.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

            <div className="sectionFiveInput row justify-content-center">
                <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email address" aria-label="Recipient's username"
                        aria-describedby="basic-addon2" />
                    <span className="input-group-text" id="basic-addon2">Get Started&nbsp;
                        <svg width="20" height="20" viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 0.61 1.312 l 0.78 -0.624 L 5.64 6 l -4.25 5.312 l -0.78 -0.624 L 4.36 6 Z"
                                fill="white" />
                        </svg>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default FifthSection;