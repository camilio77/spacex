import { getAllRockets } from "./modules/rockets.js";
import { 
    progressRocketWeight, 
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket,
    infoName,
    infoType,
    infoActive,
    infoFirst_flight,
    infoCountry,
    infoCompany,
    infoDescription,
    infoId
} from "./modulesComponents/progressBar.js";


let information__2 = document.querySelector("#information__2");
let dataRockets = await getAllRockets();
let Totales = dataRockets.pop()

let [Rockets1, Rockets2, Rockets3, Rockets4] = dataRockets; 

console.log(dataRockets);
console.log(Totales);

information__2.append(...progressRocketWeight(Totales.kg_max, Rockets3))
information__2.append(...progressPayloadWeights(Totales.payload_weights, Rockets3))
information__2.append(...progressHeightRocket(Totales.height, Rockets3))
information__2.append(...progressDiameterRocket(Totales.diameter, Rockets3))
information__2.append(...progressSecondStageDiameterRocket(Totales.composite_diameter, Rockets3))
information__2.append(...progressSecondStageHeightRocket(Totales.composite_height, Rockets3))


let information = document.querySelector("#information");

information.append(...infoName(Rockets3))
information.append(...infoType(Rockets3))
information.append(...infoActive(Rockets3))
information.append(...infoFirst_flight(Rockets3))
information.append(...infoCountry(Rockets3))
information.append(...infoCompany(Rockets3))
information.append(...infoDescription(Rockets3))
information.append(...infoId(Rockets3))

