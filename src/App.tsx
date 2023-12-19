import { Button, CircularProgress, Code } from '@nextui-org/react';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-red-600 underline">
        Hello world!
      </h1>
      <Button color="primary">Button</Button>
      <Code color="success">npm install @nextui-org/react</Code>
      <CircularProgress aria-label="Loading..." />
    </>
  );
}

export default App;
