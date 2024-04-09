import PriceCardContainer from "./components/PriceCardContainer";

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 overflow-auto bg-slate-800">
      <h1 className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-lg font-semibold uppercase text-transparent">
        best pricing
      </h1>
      <span className="mx-24 flex pb-[8px] text-center text-2xl">
        Best plan that best suit your business requirements
      </span>
      <PriceCardContainer />
    </div>
  );
}

export default App;
