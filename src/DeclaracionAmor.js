// DeclaracionAmor.js
import { useState } from "react";

const DeclaracionAmor = () => {
    const [mostrar, setMostrar] = useState(false);

    return (

        <div className="flex justify-center items-center h-screen  text-center">
            
            <box>
            <div className="bg-white p-6 rounded-2xl shadow-xl">
                
                <h1 className="text-red-500 text-2xl font-bold">Hola, mi negrita ❤️</h1>
                <p className="text-lg mt-2">Quería decirle algo especial...</p>
                <button 
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-pink-400 transition"
                    onClick={() => setMostrar(true)}
                >
                    Haz clic aquí
                </button>
                {mostrar && <p className="text-xl mt-4 text-pink-600">La amo con todo mi corazón y la aprecio mucho💖</p>}
            </div>
            </box>
        </div>
    );
};

export default DeclaracionAmor;
