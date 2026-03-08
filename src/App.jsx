import { useMemo, useState } from 'react';

const serviceContent = {
  commercial: {
    title: 'Commercial',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  residential: {
    title: 'Residential',
    text:
      'Curabitur a lacus vitae nibh malesuada luctus. Donec eleifend, odio nec pulvinar tristique, mi justo convallis justo, in tempus elit ligula vel neque. Integer accumsan sem quis velit aliquet, in posuere leo eleifend.'
  },
  industrial: {
    title: 'Industrial',
    text:
      'Mauris facilisis velit eu dictum bibendum. Proin vitae quam ut augue sollicitudin tempus. Vivamus nec lectus in nisl sagittis pharetra. Sed id nisl et risus pretium volutpat non sit amet lectus.'
  }
};

const testimonialQuote =
  '“We streamlined our NFT drops, reduced manual work, and now collaborate faster with collectors across markets. The platform is stable, clear, and consistently saves our team hours every week.”';

export default function App() {
  const [activeService, setActiveService] = useState('commercial');

  const activeServiceContent = useMemo(
    () => serviceContent[activeService],
    [activeService]
  );

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNavClick = (event, id) => {
    event.preventDefault();
    scrollTo(id);
  };

  return (
    <>
      <header id="home">
        <section className="header_first_sec">
          <div className="header_first_sec_wrapper max_width">
            <p>Opening Hours: 06:00 to 20:00</p>
            <div className="social_links">
              <a
                className="insta"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
              />
              <a
                className="facebook"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="Facebook"
              />
              <a
                className="tweeter"
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                title="X"
              />
              <a
                className="pinterest"
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                title="Pinterest"
              />
            </div>
          </div>
        </section>
        <section className="header_second_sec">
          <div className="header_second_sec_wrapper max_width">
            <h1>
              NextGen<span>NFT</span>s
            </h1>
            <div className="header_contact_info_wrapper">
              <div className="header_contact_info_sec mail">
                <div className="contact_wrapper">
                  <p>Mail Us</p>
                  <a href="mailto:Info@Example.com">Info@Example.com</a>
                </div>
              </div>
              <div className="header_contact_info_sec call">
                <div className="contact_wrapper">
                  <p>Call Us</p>
                  <a href="tel:+01569896654">+01 569 896 654</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <main>
        <section className="first_sec">
          <div className="first_sec_wrapper max_width">
            <div className="first_sec_content">
              <div className="first_sec_heading_wrapper">
                <div className="setting_wrapper">
                  <p>We Provide NFT Services For Industrial Project</p>
                </div>
                <h2 className="first_sec_heading">
                  Experience the Future of Digital Art
                </h2>
              </div>
              <button onClick={() => scrollTo('our-services')}>Our Services</button>
            </div>
          </div>
        </section>
        <section id="about" className="second_sec">
          <div className="second_sec_wrapper max_width">
            <div className="second_sec_img"></div>
            <div className="second_sec_txt_wrapper">
              <div className="second_sec_first_txt_area">
                <div className="second_sec_tag_sec">
                  <div className="second_sec_tag_area">
                    <span>Welcome NextGenNFTs</span>
                  </div>
                  <h2>We Provide Your Future</h2>
                </div>
                <p>
                  "Our mission is to empower artists and collectors in building
                  digital legacies. Our platform offers an easy way to create and
                  share unique NFTs."
                </p>
                <p>
                  In pulvinar viverra diam, nec rutrum mauris maximus non. Aenean
                  sed quam tristique, facilisis est ac, interdum velit.
                </p>
              </div>
              <div className="second_sec_second_txt_area">
                <div className="experience">
                  <span>Years Of Experiance</span>
                </div>
                <div className="second_sec_second_txt_sec">
                  <p>- Sed varius ipsum lacus</p>
                  <p>- Pulvinar tortor dignissim sit amet.</p>
                  <p>- Quisque tristique diam quis placerat</p>
                  <p>- Aliquam id ante suscipi fringilla.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="main-services" className="third_sec">
          <div className="third_sec_wrapper max_width">
            <div className="third_sec_heading_wrapper">
              <div className="third_sec_heading_sec">
                <h2 className="third_sec_heading">Professional Main Services</h2>
                <p>
                  Pellentesque vehicula eros neque, maximus mattis est sagittis
                  Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
                  amet tincidunt.
                </p>
              </div>
              <div className="third_sec_tags_wrapper">
                <button
                  className={`third_sec_tags comercial ${
                    activeService === 'commercial' ? 'is-active' : ''
                  }`}
                  onClick={() => setActiveService('commercial')}
                >
                  Commercial
                </button>
                <button
                  className={`third_sec_tags residental ${
                    activeService === 'residential' ? 'is-active' : ''
                  }`}
                  onClick={() => setActiveService('residential')}
                >
                  Residential
                </button>
                <button
                  className={`third_sec_tags industrial ${
                    activeService === 'industrial' ? 'is-active' : ''
                  }`}
                  onClick={() => setActiveService('industrial')}
                >
                  Industrial
                </button>
              </div>
            </div>
            <div className="comercial_wrapper">
              <div className="comercial_txt_wrapper">
                <div className="comertial_txt_area">
                  <div className="second_sec_tag_area">
                    <span>Welcome NextGenNFTs</span>
                  </div>
                  <div className="comertial_txt_sec">
                    <h3 className="comertial_heading">{activeServiceContent.title}</h3>
                    <p>{activeServiceContent.text}</p>
                  </div>
                </div>
                <button onClick={() => scrollTo('our-services')}>Read more</button>
              </div>
              <div className="third_sec_img"></div>
            </div>
          </div>
        </section>
        <section id="our-services" className="fourth_sec">
          <div className="fourth_sec_wrapper max_width">
            <div className="fourth_sec_first_wrapper">
              <div className="fourth_sec_heading_sec">
                <div className="second_sec_tag_area">
                  <span>Our Services</span>
                </div>
                <h2 className="fourth_sec_heading">Our Services</h2>
              </div>
              <p className="fourth_sec_p">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
                amet tincidunt.
              </p>
            </div>
            <div className="fourth_sec_cards_wrapper">
              <div className="fourth_sec_cards">
                <div className="fourth_sec_cards_first_sec">
                  <img src="/images/airConditioner.png" alt="Icon" />
                  <div className="fourth_sec_cards_txt_wrapper">
                    <h4 className="fourth_sec_cards_heading">Create Your NFT:</h4>
                    <p className="fourth_sec_cards_p">
                      Sagittis Nulla facilisi. In sed pretium metus. Proin pretium
                      Turna sit amet tincidunt.
                    </p>
                  </div>
                </div>
                <span className="read_more">
                  <a href="#about" onClick={(event) => handleNavClick(event, 'about')}>
                    Read More
                  </a>
                </span>
              </div>
              <div className="fourth_sec_cards">
                <div className="fourth_sec_cards_first_sec">
                  <img src="/images/Substation.png" alt="Icon" />
                  <div className="fourth_sec_cards_txt_wrapper">
                    <h4 className="fourth_sec_cards_heading">Sell Effortlessly:</h4>
                    <p className="fourth_sec_cards_p">
                      Sagittis Nulla facilisi. In sed pretium metus. Proin pretium
                      Turna sit amet tincidunt.
                    </p>
                  </div>
                </div>
                <span className="read_more">
                  <a
                    href="#testimonials"
                    onClick={(event) => handleNavClick(event, 'testimonials')}
                  >
                    Read More
                  </a>
                </span>
              </div>
              <div className="fourth_sec_cards">
                <div className="fourth_sec_cards_first_sec">
                  <img src="/images/constructions.png" alt="Icon" />
                  <div className="fourth_sec_cards_txt_wrapper">
                    <h4 className="fourth_sec_cards_heading">
                      Discover Unique Creations:
                    </h4>
                    <p className="fourth_sec_cards_p">
                      Sagittis Nulla facilisi. In sed pretium metus. Proin pretium
                      Turna sit amet tincidunt.
                    </p>
                  </div>
                  <span className="read_more">
                    <a
                      href="#contact"
                      onClick={(event) => handleNavClick(event, 'contact')}
                    >
                      Read More
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="why-us" className="fifth_sec">
          <div className="fifth_sec_wrapper max_width">
            <div className="fifth_sec_txt_wrapper">
              <div className="fifth_sec_first_txt_wrapper">
                <div className="fifth_sec_heading_wrapper">
                  <div className="second_sec_tag_area">
                    <span>Welcome NextGenNFTs</span>
                  </div>
                  <h2 className="fifth_sec_heading">
                    Few Reasons Why You Should Choose Us
                  </h2>
                </div>
                <p className="fifth_sec_p">
                  In pulvinar viverra diam, nec rutrum mauris maximus non. Aenean
                  sed quam tristique, facilisis est ac, interdum velit.
                </p>
              </div>
              <div className="fifth_sec_second_txt_wrapper">
                <div className="fifth_sec_second_txt_wrapper_cards">
                  <div className="fifth_sec_second_txt_wrapper_cards_txt_wrapper">
                    <h4 className="fifth_sec_second_txt_wrapper_cards_txt_wrapper_heading">
                      Innovative Technology
                    </h4>
                    <p className="fifth_sec_second_txt_wrapper_cards_txt_wrapper_p">
                      Our platform uses the latest blockchain technology.
                    </p>
                  </div>
                </div>
                <div className="fifth_sec_second_txt_wrapper_cards">
                  <div className="fifth_sec_second_txt_wrapper_cards_txt_wrapper">
                    <h4 className="fifth_sec_second_txt_wrapper_cards_txt_wrapper_heading">
                      User-Friendly Interface
                    </h4>
                    <p className="fifth_sec_second_txt_wrapper_cards_txt_wrapper_p">
                      Even beginners can easily create NFTs
                    </p>
                  </div>
                </div>
                <div className="fifth_sec_second_txt_wrapper_cards">
                  <div className="fifth_sec_second_txt_wrapper_cards_txt_wrapper">
                    <h4 className="fifth_sec_second_txt_wrapper_cards_txt_wrapper_heading">
                      Global Network:
                    </h4>
                    <p className="fifth_sec_second_txt_wrapper_cards_txt_wrapper_p">
                      Unique buyers and collectors from around the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fifth_sec_img_sec">
              <div className="squidalisa">
                <div className="facts_wrapper">
                  <div className="facts_items first_number">
                    <span>Project Done</span>
                  </div>
                  <div className="facts_items second_number">
                    <span>People Working</span>
                  </div>
                  <div className="facts_items third_number">
                    <span>Business Partner</span>
                  </div>
                  <div className="facts_items fourth_number">
                    <span>Happy Customers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="sixth_sec">
          <div className="sixth_sec_wrapper max_width">
            <div className="sixth_sec_heading_wrapper">
              <h2 className="sixth_sec_heading">Don’t just take our word for it</h2>
              <p className="sixth_sec_p">
                Hear from some of our amazing customers who are automating their
                finances.
              </p>
            </div>
            <div className="sixth_sec_cards_wrapper">
              <div className="sixth_sec_cards">
                <div className="comment_wrapper">
                  <div className="comment_sec">
                    <p className="comment comment_reveal">{testimonialQuote}</p>
                    <div className="comment_sec_wrapper">
                      <div className="comment_heading_wrapper">
                        <div className="star">
                          <div className="star">
                            <div className="star">
                              <div className="star">
                                <div className="star"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h2 className="user_name">Alisa Hester</h2>
                      </div>
                      <div className="profession_wrapper">
                        <p className="proffesion">PM, Hourglass</p>
                        <p className="agency_type">Web Design Agency</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sixth_sec_cards">
                <div className="comment_wrapper">
                  <div className="comment_sec">
                    <p className="comment comment_reveal">{testimonialQuote}</p>
                    <div className="comment_sec_wrapper">
                      <div className="comment_heading_wrapper">
                        <div className="star">
                          <div className="star">
                            <div className="star">
                              <div className="star">
                                <div className="star"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h2 className="user_name">Alisa Hester</h2>
                      </div>
                      <div className="profession_wrapper">
                        <p className="proffesion">PM, Hourglass</p>
                        <p className="agency_type">Web Design Agency</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sixth_sec_cards">
                <div className="comment_wrapper">
                  <div className="comment_sec">
                    <p className="comment comment_reveal">{testimonialQuote}</p>
                    <div className="comment_sec_wrapper">
                      <div className="comment_heading_wrapper">
                        <div className="star">
                          <div className="star">
                            <div className="star">
                              <div className="star">
                                <div className="star"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h2 className="user_name">Alisa Hester</h2>
                      </div>
                      <div className="profession_wrapper">
                        <p className="proffesion">PM, Hourglass</p>
                        <p className="agency_type">Web Design Agency</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact">
        <section className="footer_first_sec">
          <div className="footer_first_sec_wrapper max_width">
            <h2 className="footer_logo">
              NextGen<span>NFT</span>s
            </h2>
            <div className="header_contact_info_wrapper">
              <div className="header_contact_info_sec call">
                <div className="contact_wrapper">
                  <p>Call Us</p>
                  <a href="tel:+01569896654">+01 569 896 654</a>
                </div>
              </div>
              <div className="header_contact_info_sec call">
                <div className="contact_wrapper">
                  <p>Location</p>
                  <span>Amsterdam, 109-74</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer_second_sec">
          <div className="footer_second_sec_wrapper max_width">
            <div className="footer_top_wrapper">
              <div className="footer_desc_wrapper">
              <p className="footer_desc">
                Denouncing pleasure and praising pain was born and I will givg
                you a coghmplete acchount of the system, and expound the actual
              </p>
              <div className="footer_social_links">
                <a
                  className="blue_insta"
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                />
                <a
                  className="blue_facebook"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                />
                <a
                  className="combo"
                  href="https://x.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  title="X"
                />
                <a
                  className="combo blue_pinterest"
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Pinterest"
                  title="Pinterest"
                />
              </div>
            </div>
              <div className="footer_middle_nav_wrapper">
                <nav className="footer_nav">
                  <p>Explore</p>
                  <div>
                    <span>
                      <a href="#about" onClick={(event) => handleNavClick(event, 'about')}>
                        About Us
                      </a>
                    </span>
                    <span>
                      <a
                        href="#testimonials"
                        onClick={(event) => handleNavClick(event, 'testimonials')}
                      >
                        Gallery
                      </a>
                    </span>
                    <span>
                      <a
                        href="#main-services"
                        onClick={(event) => handleNavClick(event, 'main-services')}
                      >
                        Offers
                      </a>
                    </span>
                    <span>
                      <a
                        href="#our-services"
                        onClick={(event) => handleNavClick(event, 'our-services')}
                      >
                        Pricing
                      </a>
                    </span>
                    <span>
                      <a href="#why-us" onClick={(event) => handleNavClick(event, 'why-us')}>
                        FAQ
                      </a>
                    </span>
                  </div>
                </nav>
                <nav className="footer_nav">
                  <p>Quick Links</p>
                  <div>
                    <span>
                      <a
                        href="#our-services"
                        onClick={(event) => handleNavClick(event, 'our-services')}
                      >
                        Services
                      </a>
                    </span>
                    <span>
                      <a
                        href="#testimonials"
                        onClick={(event) => handleNavClick(event, 'testimonials')}
                      >
                        Blog
                      </a>
                    </span>
                    <span>
                      <a href="#contact" onClick={(event) => handleNavClick(event, 'contact')}>
                        Contact Us
                      </a>
                    </span>
                    <span>
                      <a
                        href="#main-services"
                        onClick={(event) => handleNavClick(event, 'main-services')}
                      >
                        Service Request
                      </a>
                    </span>
                    <span>
                      <a href="#about" onClick={(event) => handleNavClick(event, 'about')}>
                        Estimation Calculator
                      </a>
                    </span>
                  </div>
                </nav>
              </div>
              <nav className="footer_nav">
                <p>Uitility Pages</p>
                <div>
                  <span>
                    <a href="#home" onClick={(event) => handleNavClick(event, 'home')}>
                      Style Guide
                    </a>
                  </span>
                  <span>
                    <a
                      href="#main-services"
                      onClick={(event) => handleNavClick(event, 'main-services')}
                    >
                      Changelog
                    </a>
                  </span>
                  <span>
                    <a href="#why-us" onClick={(event) => handleNavClick(event, 'why-us')}>
                      Licenses
                    </a>
                  </span>
                  <span>
                    <a href="#contact" onClick={(event) => handleNavClick(event, 'contact')}>
                      Protected Page
                    </a>
                  </span>
                  <span>
                    <a
                      href="#testimonials"
                      onClick={(event) => handleNavClick(event, 'testimonials')}
                    >
                      404 Page
                    </a>
                  </span>
                </div>
              </nav>
            </div>
            <div className="copyright_wrapper">
              <p>
                Copyright © BlueCollar | Designed by VictorFlow Templates - Powered
                by Webflow
              </p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
