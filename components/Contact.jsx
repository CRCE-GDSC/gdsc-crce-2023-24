


const Contact = () => {
  return (

    <section className="bg-white">
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-full justify-center items-center justify-items-center text-center">
        <div className="justify-center items-center justify-items-center text-center mx-auto">
        <h2 className="mb-6 text-4xl tracking-tight font-semibold text-center text-gray-900 font-poppins">Contact Us</h2>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-full mx-4">
<div className="left">
        <div className="map mb-4 mb-lg-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4410136005313!2d72.81818181433687!3d19.04433805791724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9410830616d%3A0x111b63353dbbce01!2sFr.%20Conceicao%20Rodrigues%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1660900113753!5m2!1sen!2sin"
            width="100%" height="345px"  allowfullscreen="" frameborder="0" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
</div>

<div className="right">
<form action="#" className="space-y-8">
    
    <div className="">
        <input type="text" id="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Full name" required />
    </div>
    <div className="flex">
        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-primary-500 focus:border-primary-500 block w-full p-3 mr-2" placeholder="Email" required />
        <input type="number" id="number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-primary-500 focus:border-primary-500 block w-full p-3 " placeholder="Phone number" required />
    </div>
    <div className="">
        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 mb-2" placeholder="Subject" required />
        <textarea id="message" rows="6" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-3xl shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..."></textarea>
    </div>
    <div className="text-center">
      <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
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
