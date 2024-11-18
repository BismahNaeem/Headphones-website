import Image from "next/image"
export default function HeroSection() {
    return (
      <section className="bg-gray-100">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between"> <div className="md:w-1/2 mt-6 md:mt-0">
            <Image
              src="images/img.png" 
              alt="Headphones"
              className="w-full h-auto object-contain"
            />
            </div>
             {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left ml-12 mt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-pink-800">
              About us
            </h1>
            <p className="mt-4 text-gray-600">
            we're driven by a passion for delivering exceptional sound experiences. Our journey began with a simple mission: to create headphones that harmoniously blend style, comfort, and crystal-clear audio.
              Explore our wide range of headphones and experience the best audio quality at unbeatable prices.
            </p>
            <button className="mt-6 px-6 py-2 bg-pink-400 text-white text-lg rounded-lg shadow-lg hover:bg-green-700">
              CONTACT US
            </button>
          </div>
          </div>
          
          
          </section>)}