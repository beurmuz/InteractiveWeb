import BoxFadeInSequence from "./components/BoxFadeInSequence/BoxFadeInSequence";
import RotateBox from "./components/RotateBox/RotateBox";
import RotateBoxMouseover from "./components/RotateBoxMouseover/RotateBoxMouseover";
import RotateBoxPause from "./components/RotateBoxPause/RotateBoxPause";
import FullScreenLayout from "./Layout/FullScreenLayout";

function App() {
  return (
    <>
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
      </FullScreenLayout>
    </>
  );
}

export default App;
