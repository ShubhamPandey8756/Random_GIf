import Random from "./components/Random.js";
import  Tag from "./components/Tag.js"
export default function App() {
  return(
          <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
            <h1 className="bg-white rounded-lg w-11/12 text-center mt-[48px]">Random Gif</h1>
            <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
              <Random/>
              <Tag/>
            </div>
          </div>
  );
}
