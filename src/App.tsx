import BounceCardHover from "./components/BounceCardHover/BounceCardHover";
import BoxFadeInSequence from "./components/BoxFadeInSequence/BoxFadeInSequence";
import RotateBox from "./components/RotateBox/RotateBox";
import RotateBoxMouseover from "./components/RotateBoxMouseover/RotateBoxMouseover";
import RotateBoxPause from "./components/RotateBoxPause/RotateBoxPause";
import ScrollFadeBox from "./components/ScrollFadeBox/ScrollFadeBox";
import ScrollRevealSections from "./components/ScrollRevealSections/ScrollRevealSections";
import ScrollRevealSectionsEach from "./components/ScrollRevealSectionsEach/ScrollRevealSectionsEach";
import ScrollScaleCards from "./components/ScrollScaleCards/ScrollScaleCards";
import ScrollSlideCards from "./components/ScrollSlideCards/ScrollSlideCards";
import ScrollSlideUpCards from "./components/ScrollSlideUpCards/ScrollSlideUpCards";
import FullScreenLayout from "./Layout/FullScreenLayout";

function App() {
  return (
    <>
      <FullScreenLayout>
        <ScrollRevealSectionsEach />
      </FullScreenLayout>

      {/* <FullScreenLayout>
        <ScrollRevealSections />
      </FullScreenLayout> */}

      {/* <FullScreenLayout>
        <ScrollScaleCards />
      </FullScreenLayout> */}

      {/* <FullScreenLayout>
        <ScrollSlideUpCards />
      </FullScreenLayout>

      <FullScreenLayout>
        <ScrollSlideCards />
      </FullScreenLayout>

      <FullScreenLayout>
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
