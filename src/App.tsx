import { Home } from './components/pages/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ExampleProvider } from './contexts/useExampleContext';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
});

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ExampleProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ExampleProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
