import React from "react";
import { TOTAL_SCREENS} from "../utilities/commonUtilities";

export const PotrfolioContainer = () => {
  const mapAllScreen = () => {
    return TOTAL_SCREENS.map((screen) =>
      screen ? (
        <screen.component name={screen.screen_name} key={screen.screen_name} />
      ) : <div  key={screen.screen_name} />
    );
  };

  return <div>{mapAllScreen()}</div>;
};
