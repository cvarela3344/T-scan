import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import * as SurveyTheme from "survey-core/themes";
import { json } from "../stylesheets/happiness/json";


function SurveyHappiness() {
    const survey = new Model(json);
    survey.applyTheme(SurveyTheme.DefaultLightPanelless);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });

    return (
    <div className="ScrollContainer">
        <Survey model={survey} />
    </div>    
    );
}

export default SurveyHappiness;
