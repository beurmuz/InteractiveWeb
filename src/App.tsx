import BounceCardHover from "./components/BounceCardHover/BounceCardHover";
import BoxFadeInSequence from "./components/BoxFadeInSequence/BoxFadeInSequence";
import RotateBox from "./components/RotateBox/RotateBox";
import RotateBoxMouseover from "./components/RotateBoxMouseover/RotateBoxMouseover";
import RotateBoxPause from "./components/RotateBoxPause/RotateBoxPause";
import ScrollFadeBox from "./components/ScrollFadeBox/ScrollFadeBox";
import ScrollSlideCards from "./components/ScrollSlideCards/ScrollSlideCards";
import FullScreenLayout from "./Layout/FullScreenLayout";

function App() {
  return (
    <>
      <FullScreenLayout>
        <ScrollSlideCards />
      </FullScreenLayout>
      {/* <FullScreenLayout>
        <ScrollFadeBox />
      </FullScreenLayout>

      <FullScreenLayout>
        <BounceCardHover />
      </FullScreenLayout>

      <FullScreenLayout>
        <BoxFadeInSequence />
      </FullScreenLayout>

      <FullScreenLayout>
        <RotateBoxMouseover />
      </FullScreenLayout>

      <FullScreenLayout>
        <RotateBoxPause />
      </FullScreenLayout>

      <FullScreenLayout>
        <RotateBox />
      </FullScreenLayout> */}
    </>
  );
}

export default App;
