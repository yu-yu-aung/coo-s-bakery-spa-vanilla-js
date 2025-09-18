import listener from "./listener";
import setup from "./setup";

const init = () => {
  console.log("POS is working!");

  setup();
  listener();
};

export default init;
