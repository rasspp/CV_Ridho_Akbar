import { Router, Route } from 'preact-router';
import { Cv } from './components/Cv';

export function App() {

  return (
    <>
      <Router>
        <Route path="/" component={Cv} />
      </Router>
    </>
  );
}
