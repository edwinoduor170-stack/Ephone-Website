function Contact() {
    return (
        <section className="container mx-auto p-4 ">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative">

                <div className="hidden lg:block">
                    <img src="/Product 5.jpg" alt="Contact Us" className="mx-auto z-20 w-120 h-120" />
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-9 text-white">Put power in your hands<br /> ePhon Empowering Your Hands</h2>
                    <p className="text-lg text-gray-100 mb-12">Simply enjoy quality life by getting in touch with us.</p>

                    <div className="flex ">
                        <form action="#">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-3 bg-white rounded-md w-64 mr-6 focus:outline-none  "
                            />
                            <button
                                type="submit"
                                className="bg-gray-500 text-white p-3 rounded-md cursor-pointer hover:bg-gray-700 transition-colors"
                            >
                                Schedule Now
                            </button>
                        </form>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contact;