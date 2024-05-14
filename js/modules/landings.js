export const getAllLandings = async (page,limit)=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                page,
                limit
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/landings/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllLandingsId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/landings/${id}`)
    let data = await res.json();
    return data;
}