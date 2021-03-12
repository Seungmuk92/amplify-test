import './App.css';

function App() {
  return (
    <div className="App">
      <p>AWS Amplify Test({process.env.REACT_APP_TEST_ENV_STRING})</p>
      {
        process.env.REACT_APP_AMPLIFY_ENV_STRING && 
        <p>AWS Amplify evn value is found({process.env.REACT_APP_AMPLIFY_ENV_STRING})</p>
      }
    </div>
  );
}

export default App;
