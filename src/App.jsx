import { useState } from "react";
import "./App.css";
import WelcomeUser from "./assets/components/WelcomeUser";
import LoadingButton from "./assets/components/LoadingButton";
import LoggedStatus from "./assets/components/LoggedStatus";
import RenDiffComp from "./assets/components/RenDiffComp";
import DynamicList from "./assets/components/DynamicList";
import Notification from "./assets/components/Notification";
import ControlledForm from "./assets/components/ControlledForm";
import ComponentVisibility from "./assets/components/ComponentVisibility";
import TabsRendering from "./assets/components/TabsRendering";
import FeatureFlags from "./assets/components/FeatureFlags";

function App() {
  return (
    <>
      {/* <WelcomeUser/> */}
      {/* <LoadingButton/> */}
      {/* <LoggedStatus/> */}
      {/* <RenDiffComp /> */}
      {/* <DynamicList/> */}
      {/* <Notification/> */}
      {/* <ControlledForm/> */}
      {/* <ComponentVisibility/> */}
      {/* <TabsRendering/> */}
      <FeatureFlags />
    </>
  );
}

export default App;
