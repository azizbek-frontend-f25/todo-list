import { useState } from "react";

const ToDo = () => {
  const [memory, setMemory] = useState("");
  const [data, setData] = useState("")
  const [show, setShow] = useState([]);

  const InputValue = (e) => {
    setMemory(e.target.value);
  };

  const GetInputValue = (e) => {
    setData(e.target.value);
  };

  const Push = () => {
    setShow([...show,{title:memory, text:data, id:show.length + 1}]);
  };

  const Delete =(del)=>{
    const newShow = show.filter((v)=> v.id !== del)
    setShow(newShow)
  }

  return (
    <div className="container m-auto px-[15px]">
      <h1 className="text-5xl font-semibold text-center p-7 text-white">
        TODO LIST
      </h1>
      <div className="flex flex-col md:flex-row gap-[20px] justify-center">
        <input
          onChange={InputValue}
          className="block md:w-[33.33%] p-3 h-8 rounded-lg outline-none bg-white font-semibold"
          type="text"
          placeholder="Name"
        />
        <input
        onChange={GetInputValue}
          className="block md:w-[33.33%] p-3 h-8 rounded-lg outline-none bg-white font-semibold"
          type="text"
          placeholder="Description"
        />
        <button
          onClick={Push}
          className="block md:w-32 h-8 rounded-lg bg-white font-semibold"
        >
          Add
        </button>
      </div>
      <ul className="md:grid md:grid-cols-4 gap-4 justify-center mt-[20px]">
        {show.map((v) => (
          <li className="text-white border-2 border-white p-2 flex flex-col justify-between rounded-[15px] h-[100%] mb-3" key={v.id}>
              <h1 className="text-2xl">{v.title}</h1>
              <p className="w-[200px]">{v.text}</p>
              <button onClick={()=>Delete(v.id)} className="bg-red-500 block mt-[10px] items-end text-white w-[80px] h-[30px] rounded-lg text-center">
                Delete
              </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ToDo;
