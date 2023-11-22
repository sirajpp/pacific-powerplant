import React, { useRef } from "react";
import Lottie from "lottie-react";
import Data from "../../lotties/mission.json";

const Mission = () => {
  const missionAnimation =
    useRef < import("lottie-react").LottieRefCurrentProps > null;
  return (
    <div>
      <Lottie
        lottieRef={missionAnimation}
        animationData={Data}
        className="w-32 mx-auto"
      />

      <h3 className="text-xl font-extrabold Belanosima lg:text-3xl text-slate-900">
        Mission
      </h3>
      <p className="pop text-slate-950 text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non temporibus
        dolorem similique veritatis dolor reiciendis? Consequatur, ipsum quasi
        delectus commodi labore asperiores distinctio sed omnis!s
      </p>
    </div>
  );
};

export default Mission;
