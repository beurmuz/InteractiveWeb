import RotateBox from "./components/RotateBox/RotateBox";
import RotateBoxMouseover from "./components/RotateBoxMouseover/RotateBoxMouseover";
import RotateBoxPause from "./components/RotateBoxPause/RotateBoxPause";
import FullScreenLayout from "./Layout/FullScreenLayout";

function App() {
  return (
    <>
      <FullScreenLayout>
        <RotateBox />
      </FullScreenLayout>
      <FullScreenLayout>
        <RotateBoxPause />
      </FullScreenLayout>
      <FullScreenLayout>
        <RotateBoxMouseover />
      </FullScreenLayout>
    </>
  );
}

export default App;
