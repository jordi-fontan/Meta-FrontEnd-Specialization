import Hook from "./Hook";
import Form from "./Form";
import TextInputWithFocusButton from "./TextInputWithFocus";

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
      <hr/>
      <TextInputWithFocusButton/>
    </div>
  );
}

export default App;
