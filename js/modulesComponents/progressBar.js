export const progressRocketWeight = (Totales, Rockets)=>{
    let conterDiv = [];

    [Rockets].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = "Rocket weight :";
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = Totales;
        ProgressFist.value = `${val.mass.kg}`;
        ProgressFist.textContent = `${val.mass.kg}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numKg = new Intl.NumberFormat('cop').format(val.mass.kg)
        let numLb = new Intl.NumberFormat('cop').format(val.mass.lb)
        spanLast.innerHTML = `${numKg} kg <br> ${numLb} lb`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    return conterDiv
}
export const progressPayloadWeights = (Totales, Rockets)=>{
    let conterDiv = [];
    Rockets.payload_weights.forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `${val.name} :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = Totales;
        ProgressFist.value = `${val.kg}`;
        ProgressFist.textContent = `${val.kg}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numKg = new Intl.NumberFormat('cop').format(val.kg)
        let numLb = new Intl.NumberFormat('cop').format(val.lb)
        spanLast.innerHTML = `${numKg} kg <br> ${numLb} lb`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    return conterDiv
}
export const progressHeightRocket = (Totales, Rockets)=>{
    let conterDiv = [];
    [Rockets.height].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `Rocket Height :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = Totales;
        ProgressFist.value = `${val.meters}`;
        ProgressFist.textContent = `${val.meters}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numMeters = new Intl.NumberFormat('cop').format(val.meters)
        let numFeet = new Intl.NumberFormat('cop').format(val.feet)
        spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    return conterDiv
}
export const progressDiameterRocket = (Totales, Rockets)=>{
    let conterDiv = [];
    [Rockets.diameter].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `Rocket diameter :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = Totales;
        ProgressFist.value = `${val.meters}`;
        ProgressFist.textContent = `${val.meters}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numMeters = new Intl.NumberFormat('cop').format(val.meters)
        let numFeet = new Intl.NumberFormat('cop').format(val.feet)
        spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    return conterDiv
}
export const progressSecondStageDiameterRocket = (Totales, Rockets)=>{
    let conterDiv = [];
    [Rockets.second_stage.payloads.composite_fairing.diameter].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `Diameter rocket shield :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = Totales;
        ProgressFist.value = `${val.meters}`;
        ProgressFist.textContent = `${val.meters}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numMeters = new Intl.NumberFormat('cop').format(val.meters)
        let numFeet = new Intl.NumberFormat('cop').format(val.feet)
        spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    return conterDiv
}
export const progressSecondStageHeightRocket = (Totales, Rockets)=>{
    let conterDiv = [];
    [Rockets.second_stage.payloads.composite_fairing.height].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `Height rocket shield :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = Totales;
        ProgressFist.value = `${val.meters}`;
        ProgressFist.textContent = `${val.meters}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numMeters = new Intl.NumberFormat('cop').format(val.meters)
        let numFeet = new Intl.NumberFormat('cop').format(val.feet)
        spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    return conterDiv
}
export const infoName = (Rockets)=>{
    let conterDiv = [];
    [Rockets].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("description__container")
        let divFirst = document.createElement("div");
        let imgFist = document.createElement("img");
        imgFist.src = "http://www.example.com";
    
    
        let divLast = document.createElement("div");
        let h3Last = document.createElement("h3");
        h3Last.textContent = `name`
        let smallLast = document.createElement("small")
        smallLast.textContent = `${val.name}`
    
        divFirst.append(imgFist)
        divLast.append(h3Last)
        divLast.append(smallLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    return conterDiv
}
export const infoType = (Rockets)=>{
    let conterDiv = [];
    [Rockets].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("description__container")
        let divFirst = document.createElement("div");
        let imgFist = document.createElement("img");
        imgFist.src = "http://www.example.com";
    
    
        let divLast = document.createElement("div");
        let h3Last = document.createElement("h3");
        h3Last.textContent = `type`
        let smallLast = document.createElement("small")
        smallLast.textContent = `${val.type}`
    
        divFirst.append(imgFist)
        divLast.append(h3Last)
        divLast.append(smallLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    return conterDiv
}
export const infoActive = (Rockets)=>{
    let conterDiv = [];
    [Rockets].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("description__container")
        let divFirst = document.createElement("div");
        let imgFist = document.createElement("img");
        imgFist.src = "http://www.example.com";
    
    
        let divLast = document.createElement("div");
        let h3Last = document.createElement("h3");
        h3Last.textContent = `state`
        let smallLast = document.createElement("small")
        smallLast.textContent = `${val.active}`
    
        divFirst.append(imgFist)
        divLast.append(h3Last)
        divLast.append(smallLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    return conterDiv
}
export const infoFirst_flight = (Rockets)=>{
    let conterDiv = [];
    [Rockets].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("description__container")
        let divFirst = document.createElement("div");
        let imgFist = document.createElement("img");
        imgFist.src = "http://www.example.com";
    
    
        let divLast = document.createElement("div");
        let h3Last = document.createElement("h3");
        h3Last.textContent = `first flight`
        let smallLast = document.createElement("small")
        smallLast.textContent = `${val.first_flight}`
    
        divFirst.append(imgFist)
        divLast.append(h3Last)
        divLast.append(smallLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    return conterDiv
}
export const infoCountry = (Rockets)=>{
    let conterDiv = [];
    [Rockets].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("description__container")
        let divFirst = document.createElement("div");
        let imgFist = document.createElement("img");
        imgFist.src = "http://www.example.com";
    
    
        let divLast = document.createElement("div");
        let h3Last = document.createElement("h3");
        h3Last.textContent = `country`
        let smallLast = document.createElement("small")
        smallLast.textContent = `${val.country}`
    
        divFirst.append(imgFist)
        divLast.append(h3Last)
        divLast.append(smallLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    return conterDiv
}
export const infoCompany = (Rockets)=>{
    let conterDiv = [];
    [Rockets].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("description__container")
        let divFirst = document.createElement("div");
        let imgFist = document.createElement("img");
        imgFist.src = "http://www.example.com";
    
    
        let divLast = document.createElement("div");
        let h3Last = document.createElement("h3");
        h3Last.textContent = `company`
        let smallLast = document.createElement("small")
        smallLast.textContent = `${val.company}`
    
        divFirst.append(imgFist)
        divLast.append(h3Last)
        divLast.append(smallLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    return conterDiv
}
export const infoDescription = (Rockets)=>{
    let conterDiv = [];
    [Rockets].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("description__container")
        let divFirst = document.createElement("div");
        let imgFist = document.createElement("img");
        imgFist.src = "http://www.example.com";
    
    
        let divLast = document.createElement("div");
        let h3Last = document.createElement("h3");
        h3Last.textContent = `description`
        let smallLast = document.createElement("small")
        smallLast.textContent = `${val.description}`
    
        divFirst.append(imgFist)
        divLast.append(h3Last)
        divLast.append(smallLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    return conterDiv
}
export const infoId = (Rockets)=>{
    let conterDiv = [];
    [Rockets].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("description__container")
        let divFirst = document.createElement("div");
        let imgFist = document.createElement("img");
        imgFist.src = "http://www.example.com";
    
    
        let divLast = document.createElement("div");
        let h3Last = document.createElement("h3");
        h3Last.textContent = `id`
        let smallLast = document.createElement("small")
        smallLast.textContent = `${val.id}`
    
        divFirst.append(imgFist)
        divLast.append(h3Last)
        divLast.append(smallLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    return conterDiv
}