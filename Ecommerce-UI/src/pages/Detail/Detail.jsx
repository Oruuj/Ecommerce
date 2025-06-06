import { React, useState } from "react";
import "./Detail.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import Directory from "../../components/Directory/directory";
import img from "../../assets/Iphone.png";
import mainimg from "../../assets/Image.png";
import { motion, AnimatePresence } from "framer-motion";
import Product from "../../components/Products/Product";

const productData = [
  {
    id: 1,
    title: "Apple iPhone 14 Pro Max",
    price: 80,
    oldPrice: 100,
    image: img,
    category: "new",
  },
  {
    id: 2,
    title: "Samsung Galaxy S23 Ultra",
    price: 90,
    oldPrice: 110,
    image: img,
    category: "best",
  },
  {
    id: 3,
    title: "OnePlus 12 Pro",
    price: 85,
    oldPrice: 105,
    image: img,
    category: "featured",
  },
  {
    id: 4,
    title: "Google Pixel 8",
    price: 78,
    oldPrice: 95,
    image: img,
    category: "best",
  },
];

const Detail = () => {
  const colors = ["red", "blue", "black", "yellow"];
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Directory
          directory={["Home", "Catalog", "SmartPhones", "Apple", "IPhone"]}
        />
        <section id="detail-page">
          <div className="container">
            <div className="product-detail mt-5 mb-5">
              <div className="img-detail">
                <div className="images">
                  <img className="selected" src={img} />
                  <img src={img} />
                  <img src={img} />
                  <img src={img} />
                </div>
                <div className="main-img">
                  <img src={mainimg} />
                </div>
              </div>

              <div className="content">
                <div className="title text-2xl font-semibold">
                  Apple iPhone 14 Pro Max
                </div>
                <div className="price">
                  <span className="line-through text-gray-500 text-sm font-semibold mr-2">
                    $999
                  </span>
                  <span className="text-xl font-bold">$949</span>
                </div>
                <div className="colors-options flex items-center">
                  <span>Selecet color:</span>
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      className={`color-circle ${
                        selectedColor === color ? "selected" : ""
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    ></div>
                  ))}
                </div>
                <div className="storage">
                  <span className="">128GB</span>
                  <span className="">256GB</span>
                  <span className="">512GB</span>
                  <span className="selected">1TB</span>
                </div>
                <div className="features grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
                  <div className="feature">
                    <span className="title font-medium text-gray-600">
                      Screen Size
                    </span>
                    <span>6.7"</span>
                  </div>
                  <div className="feature">
                    <span className="title font-medium text-gray-600">
                      Camera
                    </span>
                    <span>48MP</span>
                  </div>
                  <div className="feature">
                    <span className="title font-medium text-gray-600">
                      Battery Life
                    </span>
                    <span>Up to 29 hours</span>
                  </div>
                  <div className="feature">
                    <span className="title font-medium text-gray-600">
                      Chip
                    </span>
                    <span>A16 Bionic</span>
                  </div>
                  <div className="feature">
                    <span className="title font-medium text-gray-600">
                      Water Resistance
                    </span>
                    <span>IP68</span>
                  </div>
                  <div className="feature">
                    <span className="title font-medium text-gray-600">
                      Face ID
                    </span>
                    <span>Yes</span>
                  </div>
                </div>
                <div className="btns mt-5">
                  <button className="wishlist">Add to Wishlist</button>
                  <button className="add">Add to Card</button>
                </div>
              </div>
            </div>
            <div className="details">
              <span className="details-title">Detail</span>
              <div className="desc">
                <p>
                  Just as a book is judged by its cover, the first thing you
                  notice when you pick up a modern smartphone is the display.
                  Nothing surprising, because advanced technologies allow you to
                  practically level the display frames and cutouts for the front
                  camera and speaker, leaving no room for bold design solutions.
                  And how good that in such realities Apple everything is fine
                  with displays. Both critics and mass consumers always praise
                  the quality of the picture provided by the products of the
                  Californian brand. And last year's 6.7-inch Retina panels,
                  which had ProMotion, caused real admiration for many.
                </p>
              </div>
              <div className="features mb-9">
                <AnimatePresence>
                  {showMore && (
                    <motion.div
                      className="feature-group"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="feature">
                        <span className="title">Screen</span>
                        <div className="feature-detail flex items-center justify-between">
                          <span>Screen diagonal</span>
                          <span>6.7"</span>
                        </div>
                        <div className="feature-detail flex items-center justify-between">
                          <span>Resolution</span>
                          <span>2796x1290</span>
                        </div>
                      </div>
                      <div className="feature">
                        <span className="title">Camera</span>
                        <div className="feature-detail flex items-center justify-between">
                          <span>Rear Camera</span>
                          <span>48MP + 12MP + 12MP</span>
                        </div>
                        <div className="feature-detail flex items-center justify-between">
                          <span>Front Camera</span>
                          <span>12MP</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="btns-show flex flex-col items-center">
                  {!showMore ? (
                    <button
                      className="btn-show"
                      onClick={() => setShowMore(true)}
                    >
                      Show More
                    </button>
                  ) : (
                    <button
                      className="btn-show"
                      onClick={() => setShowMore(false)}
                    >
                      Show Less
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="relateds">
          <div className="container">
            <div className="title">
              <span className="font-semibold text-2xl">Related Products</span>
            </div>
            <div className="products grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-6 items-center mb-8">
              {productData.map((product) => (
                <Product
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  image={product.image}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Detail;
