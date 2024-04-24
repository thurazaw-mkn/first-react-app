import Button from "./components/button";

function App() {
  return (
    <div>
      <Button color="primary" onClick={() => console.log("clicked")}>
        thi is btn
      </Button>
    </div>
  );
}

export default App;
