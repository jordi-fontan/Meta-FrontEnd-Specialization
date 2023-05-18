import Hook from "./Hook"
function App() {

const appStyle={
  background:"pink",
  width:"calc(30%-10px)",
  marginLeft: "10px"
}

  return (
    <div style={appStyle}>
      <Hook />
    </div>
  );
}

export default App;
