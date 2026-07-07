import "./Loader.css";

function Loader() {
  return (
    <div className="loader-container">

      <div className="loader-wrapper">

        <div className="loader-ring"></div>
          <div className="loader-logo">
            <h2>boAt</h2>
        </div>
      </div>

      <h2 className="loader-title">
        boAt
      </h2>

      <p className="loader-text">
        Experience the perfect blend of sound and style 
      </p>

      <div className="loading-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
  );
}

export default Loader;