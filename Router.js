import React from "react";
import { Scene, Router } from "react-native-router-flux";
import WrapperContainer from "./src/containers/WrapperContainer";
import Landing from "./src/components/Landing";
import NavExample from "./src/components/NavExample";
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="welcome" initial>
          <Scene key="Landing" component={Landing} title="Welcome" />
        </Scene>

        <Scene key="main">
          <Scene key="menu" component={WrapperContainer} title="Menu" />
          <Scene
            key="account"
            component={NavExample}
            title="Account Details"
            onRightTitle="Update Profile"
            onRight={() => {}}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
