import { HomeGetStartedBtn } from "../../utils/buttons";
import HomeBackground from "../Layouts/background/homeBackground";
import womenIllustration from "../../assets/images/Womenillust.png";
import { Link } from "react-router-dom";
import ProductsLandingPage from "./products";
import HowTo from "./howto";
import FreqAskedQues from "./freqAskQues";

const Home = () => {
  return (
    <div>
      <main className="w-full relative flex flex-col justify-center darkBlueBg">
        {/* background div */}
        <HomeBackground />
        {/* background div */}
        <div className="relative flex flex-col items-center justify-around h-full">
          {/* text div */}
          <div className="mt-28">
            <div className="relative flex flex-col items-center gap-y-4 text-white justify-center">
              <div className="text-6xl font-sansationR">
                See through visionary eye
              </div>
              <div className="text-xl font-ptSerif">
                Now detect faces, emotions, match celebs, read <br /> text,
                recognize objects in a blink.
              </div>
              <div className="my-16 cursor-pointer">
                <div
                  style={{
                    backgroundImage:
                      "conic-gradient(from 180deg at 50% 50%, #09F9FC -141.38deg, #F704FB 31.12deg, #09F9FC 218.62deg, #F704FB 391.12deg)",
                  }}
                  className="px-[5px] py-[5px] rounded-2xl"
                >
                  <div className="bg-[#001236] px-[14px] py-[5px] rounded-2xl text-2xl">
                    Get Started
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* text div */}

          {/* illustration */}
          <div className="">
            <img
              src={womenIllustration}
              alt="Women Illustration"
              className="w-96 h-76"
            />
          </div>
          {/* illustration */}
        </div>
      </main>
      <div id="products">
        <ProductsLandingPage />
      </div>
      <div id="howto">
        <HowTo />
      </div>
      <div>
        <FreqAskedQues />
      </div>
    </div>
  );
};

export default Home;
{
  /* <iframe src="https://giphy.com/embed/nZ8JTwv6pSXwgTGwYA" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cbs-max-greenfield-the-neighborhood-theneighborhood-nZ8JTwv6pSXwgTGwYA">via GIPHY</a></p> */
}
// <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/nZ8JTwv6pSXwgTGwYA" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/cbs-max-greenfield-the-neighborhood-theneighborhood-nZ8JTwv6pSXwgTGwYA">via GIPHY</a></p>
{
  /* <div style="width:480px">
  <iframe
    allow="fullscreen"
    frameBorder="0"
    height="270"
    src="https://giphy.com/embed/WVdyz0CdNWxClUzS7a/video"
    width="480"
  ></iframe>
</div>; */
}
