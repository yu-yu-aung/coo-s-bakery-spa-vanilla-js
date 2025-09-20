import initialRender from "./initialRender";
import listener from "./listener";
import setup from "./setup";

const init = () => {
  console.log("POS is working!");

  setup();
  initialRender();
  listener();
};

export default init;
