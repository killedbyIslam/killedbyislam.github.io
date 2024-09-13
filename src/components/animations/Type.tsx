import React from "react";
import Typewriter from "typewriter-effect";
// import useLocales from "../../hooks/useLocales";

function Type() {
  // const { translate } = useLocales();
  return (
    <Typewriter
      options={{
        strings: ["bavar kon Baby", "jedi migam Baby", "ye kam fek kon Baby!!"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
