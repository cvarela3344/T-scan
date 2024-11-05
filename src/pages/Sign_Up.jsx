import React from "react";
import { useNavigate } from "react-router-dom";

export const Sign_Up = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/"); 
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Registro en proceso, no considerado en las metas, se considera que el usuario ya tiene cuenta.</h1>
            <button 
                onClick={handleGoHome} 
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#F4B942",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#C28B1D"}
                onMouseOut={(e) => e.target.style.backgroundColor = "#F4B942"}
            >
                Volver a Inicio
            </button>
        </div>
    );
}

export default Sign_Up;
