import Router from './Router';
import { ContextProvider } from './context';

const App = () => (
    <ContextProvider>
        <Router />
    </ContextProvider>
);

export default App;