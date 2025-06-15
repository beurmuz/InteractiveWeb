import RotateBox from "./components/RotateBox/RotateBox";
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
    </>
  );
}

export default App;
