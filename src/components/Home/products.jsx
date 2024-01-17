import { BlueCard, GreenCard, PurpleCard } from "../../utils/productsCards";
import ProductBg from "../Layouts/background/productBg";

const Products = () => {
  return (
    <div className="relative lightBlueBg overflow-hidden" id="products">
      <div
        className="relative lightbg h-[68rem] w-screen text-black pt-10 top-[-0.1rem]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 81%, 0% 100%)",
        }}
      >
        <ProductBg />
        <div className="relative">
          <div className="relative text-6xl font-sansationB text-center">
            Our Tools
          </div>
          <div className="relative px-[4.2rem] grid grid-cols-3 mt-24 gap-x-20">
            <div className="">
              <BlueCard />
            </div>
            <div className="">
              <PurpleCard />
            </div>
            <div className="">
              <GreenCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
