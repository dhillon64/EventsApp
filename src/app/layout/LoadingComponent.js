import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const LoadingComponent = () => {
  return (
    <>
      <Dimmer active={true} inverted>
        <Loader>Loading</Loader>
      </Dimmer>
    </>
  );
};

export default LoadingComponent;
