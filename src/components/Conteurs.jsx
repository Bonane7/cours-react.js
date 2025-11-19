import { useState } from "react";

function Conteurs() {
  const [nombre, setNombre] = useState(0);
  const [visible, setVisible] = useState(false);
  const [nom, setNom] = useState("");
  const [couleur, setCouleur] = useState("red");

  return (
    // {/*conteur*/}
    <>
    <div className="grid grid-cols-4 gap-5">
     
        <div className="w-50 h-auto bg-blue-900 text-white flex flex-col gap-2  m-auto mt-5 p-4">
          <p className="">
            le compteur compte{" "}
            <span className="text-red-400 font-bold">{nombre}</span>
          </p>
          <button
            onClick={() => setNombre(nombre + 1)}
            className="bg-blue-500 text-white px-2 py-2 rounded"
          >
            incrimante
          </button>
          <button
            onClick={() => setNombre(nombre + 1)}
            className="bg-blue-500 text-red-400 px-2 py-2 rounded"
          >
            decrimante
          </button>
        </div>
        {/*fin conteur*/}
        {/*fin aficher un element est cacher*/}
        <div>
          <h1>afficher...{visible && <span> Hi Jesuis la 😄 </span>}</h1>
          <button
            onClick={() => setVisible(!visible)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Afficher et desaficher
          </button>
        </div>
        {/*fin aficher un element est cacher*/}

        {/* aficher les elements del'input*/}
        <div className="w-[500px] h-auto flex gap-2 p-4 bg-gray-800 text-teal-300 mt-4">
          <textarea
            placeholder="Enter your message here"
            onChange={(e) => setNom(e.target.value)}
            className="bg-gray-700"
          ></textarea>
          <div className="max-w-[220px] h-[100px] bg-black overflow-x-hidden text-white px-2">{nom}</div>
        </div>

        {/*fin aficher les elements del'input*/}
        {/*changer couleur d'un carre*/}

        {/* const [couleur, setCouleur] = useState("red") */}

        <div className="w-[500px] h-[300px] bg-black flex gap-4 m-5">
          <div className="grid ite">
            <button 
            className="bg-green-500 p-2"
            onClick={()=> setCouleur('green')}
            >Click green
            </button>
            <button className="bg-yellow-500 p-2"
            onClick={()=> setCouleur('yellow')}
            >Click Yello</button>
            <button className="bg-pink-500 p-2"
            onClick={()=> setCouleur('pink')}
            >Click Pink</button>
          </div>
          <div
            className="w-[300px] h-full"
            style={{ background: couleur }}
          ></div>
        </div>
      </div>
    </>
  );
}
export default Conteurs;
