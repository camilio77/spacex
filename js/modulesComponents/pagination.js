import { 
    getAllRockets, 
    getAllRocketsId
} from "../modules/rockets.js";
import { 
    nameRockets 
} from "./name.js";
import { 
    infoName,
    informationRockets,
    informationLaunchCostRocket,
    informationFirstFlightRocket,
    informationWebRocket,
    infoImg
} from "./information.js";
import { 
    tableRocketColum1, 
    tableRocketColum2
} from "./tables.js";
import { 
    informRocketEngineThrustSeaLevel, 
    informRocketEngineThrustVacuum,
    informRocketEngineThrustVacuum1
} from "./inform.js";
import { 
    progressRocketWeight,
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket,
} from "../modulesComponents/progressBar.js";

const getRocketsId = async(e)=>{
    e.preventDefault();
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";

    let Rocket = await getAllRocketsId(e.target.id);
    console.log(Rocket);

    await nameRockets(Rocket.name)
    await infoImg(Rocket.flickr_images[0])
    await infoName(Rocket.name)
    await informationRockets(Rocket.country, Rocket.description)
    await informationLaunchCostRocket(Rocket.cost_per_launch)
    await informationFirstFlightRocket(Rocket.first_flight)
    await informationWebRocket(Rocket.wikipedia)

    await informRocketEngineThrustSeaLevel(Rocket.engines.thrust_sea_level);
    await informRocketEngineThrustVacuum(Rocket.engines.thrust_vacuum);
    await informRocketEngineThrustVacuum1(Rocket.engines.thrust_vacuum);

    await tableRocketColum1(Rocket)
    await tableRocketColum2(Rocket)

    await progressRocketWeight(Rocket)
    await progressPayloadWeights(Rocket)
    await progressHeightRocket(Rocket)
    await progressDiameterRocket(Rocket)
    await progressSecondStageDiameterRocket(Rocket)
    await progressSecondStageHeightRocket(Rocket)
}
export const paginationRockets = async()=>{
    let rockets = await getAllRockets();
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
  
    rockets.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = id+1;
        a.addEventListener("click", getRocketsId)
        div.appendChild(a);
    });
    let [a1,a2,a3,a4] = div.children
    a3.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}