import Collapse from "./components/Collapse";
function App() {
  const text = 'collapse me';
  return (
  <Collapse text={text} opened={true} />
  )
}

export default App;
