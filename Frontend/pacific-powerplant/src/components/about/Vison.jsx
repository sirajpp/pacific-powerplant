import React, { useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../../lotties/vision.json";
const Vison = () => {
  const visionAnimation =
    useRef < import("lottie-react").LottieRefCurrentProps > null;
  return (
    <div>
      <Lottie
        lottieRef={visionAnimation}
        animationData={animationData}
        className="w-36 mx-auto"
      />
      <h3 className="-mt-5 text-xl font-extrabold Belanosima lg:text-3xl text-slate-900">
        Vision
      </h3>
      <p className="pop text-slate-950 text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non temporibus
        dolorem similique veritatis dolor reiciendis? Consequatur, ipsum quasi
        delectus commodi labore asperiores distinctio sed omnis!s
      </p>
    </div>
  );
};

export default Vison;
