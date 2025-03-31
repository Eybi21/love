import { useState } from "react";

const DeclaracionAmor = () => {
    const [mostrar, setMostrar] = useState(false);
    
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
            textAlign: "center",
            backgroundColor: "#f5f5f5" // Fondo claro
        }}>
            <div style={{
                backgroundColor: "white",
                padding: "1.5rem",
                borderRadius: "1rem",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                maxWidth: "90%",
                width: "400px"
            }}>
                <h1 style={{
                    color: "#ef4444", // Color rojo
                    fontSize: "1.5rem",
                    fontWeight: "bold"
                }}>Hola, mi negrita ❤️</h1>
                
                <p style={{
                    fontSize: "1.125rem",
                    marginTop: "0.5rem"
                }}>Quería decirle algo especial...</p>
                
                <button
                    style={{
                        marginTop: "1rem",
                        padding: "0.5rem 1rem",
                        backgroundColor: "#ef4444", // Color rojo
                        color: "white",
                        borderRadius: "0.5rem",
                        cursor: "pointer",
                        border: "none",
                        transition: "background-color 0.3s"
                    }}
                    onClick={() => setMostrar(true)}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#ec4899"} // Color rosa al hover
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#ef4444"} // Volver al rojo
                >
                    Haz clic aquí
                </button>
                
                {mostrar && (
                    <div style={{ marginTop: "1rem" }}>
                        <p style={{
                            fontSize: "1.25rem",
                            color: "#db2777" // Color rosa
                        }}>
                            La amo con todo mi corazón y la aprecio mucho💖
                        </p>
                        <img 
                            src="/col.png"
                            alt="Imagen de amor" 
                            style={{
                                marginTop: "0.5rem",
                                width: "16rem",
                                height: "auto",
                                borderRadius: "0.5rem",
                                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                            }} 
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default DeclaracionAmor;