import Hook from "./Hook";
import Form from "./Form";

function App() {

const appStyle={
  background:"pink",
  width:"calc(30%-10px)",
  marginLeft: "10px"
}

  return (
    <div style={appStyle}>
      <Hook />
      <hr/>
      <Form/>
    </div>
  );
}

export default App;
