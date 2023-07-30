


const Contact = () => {
  return (
    <section id="contact" className="bg-slate-100 py-16">
      <div className="container mx-auto">
        <div className="section-header font-bold text-gray-700 text-5xl text-center mb-10">
          <h3 className="font-poppins">Contact Us</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="col-lg-6">
            <div className="map mb-4 mb-lg-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4410136005313!2d72.81818181433687!3d19.04433805791724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9410830616d%3A0x111b63353dbbce01!2sFr.%20Conceicao%20Rodrigues%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1660900113753!5m2!1sen!2sin"
                width="100%"
                height="345px"
                style={{ border: '0' }}
                allowFullScreen=""
                frameBorder="0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="grid grid-cols-2 gap-6 text-gray-700">
              <div className="info">
                
                <p>Fr. CRCE, Bandra, Mumbai-400051</p>
              </div>
              <div className="info">
                
                <p>crcegdsc@gmail.com</p>
              </div>
              <div className="info">
                
                <p>+91 8652486718</p>
              </div>
            </div>

            <div className="form mt-8">
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage"></div>
              <form action="https://formsubmit.co/crcegdsc@gmail.com" method="POST" role="form" className="contactForm" id="contactForm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="fname"
                      placeholder="Full Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                      required
                      autoComplete="off"
                    />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                    required
                    autoComplete="off"
                  />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                    required
                  ></textarea>
                  <div className="validation"></div>
                </div>
                <div className="text-center mt-2">
                  <button type="submit" title="Send Message" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                    Send Message
                  </button>
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://crce-gdsc.github.io/index.html" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
