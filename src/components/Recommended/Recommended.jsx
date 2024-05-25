import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Rating } from "@smastrom/react-rating";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const products = [
  {
    name: "Laptop",
    category: "Electronics",
    price: 999.99,
    image: "https://i.ibb.co/hgwKntY/laptop.jpg",
    description: "A high-performance laptop suitable for all your needs.",
    recommendedProducts: [2, 3],
  },
  {
    name: "Tablet",
    category: "Electronics",
    price: 499.99,
    image: "https://i.ibb.co/4WDzTkL/tablet.jpg",
    description: "A lightweight tablet perfect for on-the-go use.",
  },
  {
    name: "Chair",
    category: "Home",
    price: 99.99,
    image: "https://i.ibb.co/HVbVcdP/chair.jpg",
    description: "A comfortable and stylish chair for your home.",
  },
  {
    name: "Jeans",
    category: "Fashion",
    price: 49.99,
    image: "https://i.ibb.co/TPkVLhB/jeans.jpg",
    description: "Comfortable and stylish jeans for everyday wear.",
  },
  {
    name: "Samsung S24 ultra",
    category: "Electronics",
    price: 699.99,
    image: "https://i.ibb.co/gJpjZ2m/s24.jpg",
    description: "A sleek smartphone with the latest features.",
  },
  {
    name: "Headphones",
    category: "Electronics",
    price: 199.99,
    image: "https://i.ibb.co/dB80JCT/headphone.jpg",
    description: "Noise-cancelling headphones with superior sound quality.",
  },
];

const Recommended = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Recommended Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product, index) => (
          <div key={index}>
            <div key={product.id} className="card card-compact rounded border">
              <div className="card card-compact rounded border">
                <figure>
                  <img
                    className="w-full h-48"
                    src={product.image}
                    alt={product.name}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p>Price: ${product.price}</p>
                  <Rating
                    style={{ maxWidth: 80 }}
                    value={product.rating}
                    readOnly
                  />
                  <div className="flex justify-center gap-7 mt-4">
                    <FacebookShareButton url={window.location.href}>
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="text-blue-600 text-2xl"
                      />
                    </FacebookShareButton>
                    <TwitterShareButton url={window.location.href}>
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="text-blue-400 text-2xl"
                      />
                    </TwitterShareButton>
                    <WhatsappShareButton url={window.location.href}>
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="text-green-500 text-2xl"
                      />
                    </WhatsappShareButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
