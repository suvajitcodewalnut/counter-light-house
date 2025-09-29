/**
 * @module
 */
import Counter from "./components/Counter/Counter";

const App: React.FC = () => {
  return (
    <div className="h-screen w-full bg-slate-900 flex items-center justify-center">
      <Counter />
    </div>
  );
};

export default App;
