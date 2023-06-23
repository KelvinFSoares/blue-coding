import { Home } from './components/pages/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RacersProvider } from './contexts/useRacerContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RaceProvider } from './contexts/useRaceContext';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
});

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <RacersProvider>
          <RaceProvider>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </RaceProvider>
        </RacersProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
