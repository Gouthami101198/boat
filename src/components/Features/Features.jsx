import "./Features.css";
import {
  FaShippingFast,
  FaShieldAlt,
  FaHeadphones,
  FaUndo,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaShippingFast />,
      title: "Free Shipping",
      desc: "Free delivery on orders above ₹1999",
    },
    {
      icon: <FaShieldAlt />,
      title: "1.5 Year Warranty",
      desc: "Official manufacturer warranty",
    },
    {
      icon: <FaHeadphones />,
      title: "24/7 Support",
      desc: "Dedicated customer assistance",
    },
    {
      icon: <FaUndo />,
      title: "Easy Returns",
      desc: "7-day return policy",
    },
  ];

  return (
    <section className="features container">

      <h2>Why Choose boAt?</h2>

      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Features;