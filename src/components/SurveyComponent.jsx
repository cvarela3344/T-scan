import React, { useState, useMemo } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { useNavigate } from "react-router-dom";
import "survey-core/defaultV2.min.css";
import * as SurveyTheme from "survey-core/themes";
import { json } from "../stylesheets/spotify/json";

function SurveyComponent() {
    const [isCompleted, setIsCompleted] = useState(false); 
    const navigate = useNavigate();

    
    const survey = useMemo(() => new Model(json), []);

    survey.applyTheme(SurveyTheme.DefaultLightPanelless);

    
    survey.onComplete.add(() => {
        console.log("Encuesta completada");
        setIsCompleted(true); 
    });

    const handleRedirect = () => {
        navigate("/Test");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            {!isCompleted && <Survey model={survey} />}
            
            {isCompleted && (
                <div>
                    <p
                        style={{
                            color: "green",
                            fontWeight: "bold",
                            marginBottom: "20px",
                        }}
                    >
                        Test realizado con éxito
                    </p>
                    <button
                        onClick={handleRedirect}
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#F4B942",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Volver a los tests
                    </button>
                </div>
            )}
        </div>
    );
}

export default SurveyComponent;
