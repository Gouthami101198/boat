import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import TrendingProducts from "../components/TrendingProducts/TrendingProducts";
import Features from "../components/Features/Features";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <TrendingProducts />
      <Features />
    </>
  );
}

export default Home;