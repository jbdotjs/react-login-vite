import "./App.css";
import BikeSVG from "./SVGs/BikeSVG.svg";

function App() {
  return (
    <div className="bg-sky-200 h-screen w-screen p-10">
      <div className="bg-white rounded-xl border border-white shadow-sm shadow-gray-50 h-[700px]">
        <section>
          <div className="flex justify-center items-center">
            <img src={BikeSVG} alt="Bike and Rider" className="w-64 h-64" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
