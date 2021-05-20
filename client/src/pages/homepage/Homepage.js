import React, { Profiler } from "react";
import Directory from "../../components/directory/Directory";
import { HomepageContainer } from "./HomepageStyle";

const Homepage = () => {
  return (
    <HomepageContainer>
      <Profiler
        id="Directory"
        onRender={(id, phase, actualDuration) => {
          console.log({
            id,
            phase,
            actualDuration,
          });
        }}
      >
        <Directory />
      </Profiler>
    </HomepageContainer>
  );
};

export default Homepage;
