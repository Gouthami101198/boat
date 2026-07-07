import "./Categories.css";
import earbuds from "../../assets/images/earbuds.png";
import watch from "../../assets/images/watch.png";
import speaker from "../../assets/images/speaker.png";
import headset from "../../assets/images/gaming-headset.png";
import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    {
      image: earbuds,
      title: "Wireless Earbuds",
      count: "24 Products",
    },
    {
      image: watch,
      title: "Smart Watches",
      count: "18 Products",
    },
    {
      image: speaker,
      title: "Bluetooth Speakers",
      count: "15 Products",
    },
    {
      image: headset,
      title: "Gaming Headsets",
      count: "12 Products",
    },
  ];

  return (
    <section 
      className="categories container"
      data-aos="fade-up"
    >

      <h2 data-aos="fade-right">Shop by Category</h2>

      <p>
        Find the perfect gadget for every lifestyle.
      </p>

      <div className="category-grid">

        {categories.map((item, index) => (

          <Link
            to="/products"
            className="category-card"
            key={index}
            data-aos="zoom-in" 
            data-aos-delay={index * 150}
          >
            <div className="category-icon">
              <img
                src={item.image}
                alt={item.title}
              />
            </div>

            <h3>{item.title}</h3>

            <span>{item.count}</span>

          </Link>

        ))}

      </div>

    </section>
  );
}

export default Categories;