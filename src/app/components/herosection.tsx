export default function HeroSection() {
    return (
      <section className="bg-gray-100">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Grab Upto <span className="text-pink-400">50% Off</span> On Selected Headphones
            </h1>
            <p className="mt-4 text-gray-600">
              Explore our wide range of headphones and experience the best audio quality at unbeatable prices.
            </p>
            <button className="mt-6 px-6 py-2 bg-pink-400 text-white text-lg rounded-lg shadow-lg hover:bg-green-700">
              Buy Now
            </button>
          </div>
  
          {/* Image Section */}
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="images/img.png" 
              alt="Headphones"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
    );
  }