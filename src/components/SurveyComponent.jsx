import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { useNavigate } from "react-router-dom";
import "survey-core/defaultV2.min.css";
import * as SurveyTheme from "survey-core/themes";
import { json } from "../stylesheets/spotify/json";

function SurveyComponent() {
    const survey = new Model(json);
    const navigate = useNavigate(); 

    survey.applyTheme(SurveyTheme.DefaultLightPanelless);

    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });


    const handleRedirect = () => {
        navigate("/Test");
    };

    return (
        <div>
            <Survey model={survey} />
            {!survey.isCompleted && (
                <button onClick={handleRedirect} style={{
                    marginbottom: "50px",
                    padding: "10px 20px",
                    backgroundColor: "#F4B942",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}>
                    Volver a los tests
                </button>
            )}
        </div>
    );
}

export default SurveyComponent;
