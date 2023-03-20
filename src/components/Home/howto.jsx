import demoimg from "../../assets/images/ana de armas.jpg";
const HowTo = () => {
  return (
    <div className="flex flex-col lightBlueBg text-white items-center py-16 px-28 gap-y-10">
      <div className="text-5xl font-sansationR">How To</div>
      <div className="flex gap-x-10">
        <div className="flex flex-col gap-y-6">
          <div className="text-3xl">
            Face <br /> Recognition
          </div>
          <div>
            <img src={demoimg} width={"400"} />
          </div>
          <div>
            Just Upload the image that you want to process through the upload
            page. And boom, you will be presented with the detected faces, face
            landmarks and emotions in the image.
          </div>
        </div>
        <div>
          <img src={demoimg} width={"400"} />
        </div>
      </div>
      <div className="flex gap-x-10">
        <div className="flex flex-col gap-y-6">
          <div className="text-3xl">
            Face <br /> Recognition
          </div>
          <div>
            <img src={demoimg} width={"400"} />
          </div>
          <div>
            Just Upload the image that you want to process through the upload
            page. And boom, you will be presented with the detected faces, face
            landmarks and emotions in the image.
          </div>
        </div>
        <div>
          <img src={demoimg} width={"400"} />
        </div>
      </div>
    </div>
  );
};

export default HowTo;
