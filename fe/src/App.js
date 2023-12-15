import { CardLayout } from "./layouts/CardLayout";
import { ErrorBoundary } from './components/ErrorBoundary'


function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <CardLayout />
      </ErrorBoundary>
    </div>
  );
}

export default App;
