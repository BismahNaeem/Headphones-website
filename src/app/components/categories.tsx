import Image from "next/image";
export default function CardsSection() {
    const cards = [
      {
        id: 1,
        Image: "/images/img1.png",
        title: "Headphones",
        price: "$89.99",
        description: "Experience top-notch sound with these Headphones.",
      },
      {
        id: 2,
        Image: "/images/img2.png",
        title: "Headphone Max",
        price: "$599.99",
        description: "High-quality audio with comfortable over-ear design.",
      },
      {
        id: 3,
        Image: "/images/img3.png",
        title: "Bose BT Earphones",
        price: "$159.99",
        description: "Premium Bluetooth earphones with superior sound quality.",
      },
      {
        id: 4,
        Image: "/images/img4.png",
        title: "VIVEFOX Headphones",
        price: "$39.99",
        description: "Affordable and stylish headphones for everyday use.",
      },
    ];
  
    return (
      <section className="bg-gray-100  py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-pink-700 text-center mb-8">
            EXPLORE CATEGORIES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={card.Image}
                  alt={card.title}
                  className="w-full h-48 object-contain bg-gray-200"
                  height={500} width={500}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{card.description}</p>
                  <p className="text-lg font-bold text-pink-600 mt-4">{card.price}</p>
                  <button className="mt-4 px-4 py-2 bg-pink-500 text-white text-sm rounded-lg hover:bg-green-700 w-full">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }