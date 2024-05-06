export const getAllRockets = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/rockets")
    let data = await res.json();
    let listMasa = [], 
        listPayloadWeights = [], 
        heightRocket = [], 
        listDiameter = [], 
        listaDiameterComposite = [],
        listaHeightComposite = [],
        listaInfo = [];

    data.forEach((val, id) => {
        listMasa.push(val.mass.kg);
        listPayloadWeights.push(...val.payload_weights)
        heightRocket.push(val.height)
        listDiameter.push(val.diameter)
        listaDiameterComposite.push(val.second_stage.payloads.composite_fairing.diameter)
        listaHeightComposite.push(val.second_stage.payloads.composite_fairing.height)
        listaInfo.push({
            name: val.name,
            type: val.type,
            active: val.active,
            stages: val.stages,
            boosters: val.boosters,
            cost_per_launch: val.cost_per_launch,
            success_rate_pct: val.success_rate_pct,
            first_flight: val.first_flight,
            country: val.country,
            company: val.company,
            description: val.description,
            id: val.id
        })
    });
    
    data.push(listaInfo);
    listMasa.sort((a,b) => b - a)
    listPayloadWeights.sort((a,b) => b.kg - a.kg)
    heightRocket.sort((a,b) => b.meters - a.meters)
    listDiameter.sort((a,b) => b.meters - a.meters)
    listaDiameterComposite.sort((a,b) => b.meters - a.meters)
    listaHeightComposite.sort((a,b) => b.meters - a.meters)
    data.push({
        kg_max: listMasa.shift(), 
        payload_weights: listPayloadWeights.shift().kg,
        height: heightRocket.shift().meters,
        diameter: listDiameter.shift().meters,
        composite_diameter : listaDiameterComposite.shift().meters,
        composite_height: listaHeightComposite.shift().meters
    });
    return data;
}
export const getAllRocketEngineTotal  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "engines": 1
                },
                "sort": {
                    "engines.thrust_sea_level": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    // console.log(await res.json());
    let {docs:[{engines} = maxEnginesRocket]} = await res.json();
    return engines.thrust_sea_level;
}
export const getAllRocketEngineThrustVacuumTotal  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "engines": 1
                },
                "sort": {
                    "engines.thrust_vacuum": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    // console.log(await res.json());
    let {docs:[{engines} = maxEnginesRocket]} = await res.json();
    return engines.thrust_vacuum;
}