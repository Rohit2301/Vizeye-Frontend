import { Link } from "react-router-dom";
import { BlueGradientBtn } from "../../utils/buttons";

const ProductsLandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center lightbg text-black gap-y-10 py-16">
      <div className="text-5xl font-sansationR">Products</div>
      <div
        className="flex bg-[#F3A57D] rounded-xl px-16 py-12 mx-28 gap-x-8 outline outline-[#CEC7C7] outline-[0.05rem]"
        style={{ filter: "drop-shadow(-10px 10px 20px rgba(0, 0, 0, 0.25))" }}
      >
        <div className="flex flex-col gap-y-6 ">
          <div className="text-4xl font-mons font-medium">
            Face <br /> Recognition
          </div>
          <div className="text-lg font-futuraBk">
            Just Upload the image that you want to process through the upload
            page. And boom, you will be presented with the detected faces, face
            landmarks and emotions in the image.
          </div>
          <Link to={"/uploadImage"}>
            <div className="w-36">
              {<BlueGradientBtn data={"Get Started"} />}
            </div>
          </Link>
        </div>
        <div className="rounded-lg">
          <iframe
            src="https://giphy.com/embed/nZ8JTwv6pSXwgTGwYA"
            alt="face recognition gifs"
            width={"400"}
            height={"225"}
          />
        </div>
      </div>
      <div
        className="flex  bg-[#b7e7e5] rounded-xl px-16 py-12 mx-28 gap-x-8  outline outline-[#CBD0CF] outline-[0.05rem]"
        style={{ filter: "drop-shadow(-10px 10px 20px rgba(0, 0, 0, 0.25))" }}
      >
        <div className="flex flex-col gap-y-6">
          <div className="text-4xl font-mons font-medium">Text to speech</div>
          <div className="text-lg font-futuraBk">
            Just Upload the image that you want to process through the upload
            page. And boom, you will be presented with the detected faces, face
            landmarks and emotions in the image.
          </div>
          <Link to={"/textToSpeech"}>
            <div className="w-36">
              {<BlueGradientBtn data={"Get Started"} />}
            </div>
          </Link>
        </div>
        <div className="rounded-lg">
          <iframe
            src="https://giphy.com/embed/nZ8JTwv6pSXwgTGwYA"
            alt="face recognition gifs"
            width={"400"}
            height={"225"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsLandingPage;
