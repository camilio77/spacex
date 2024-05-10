export const getAllLaunchesId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/launches/${id}`)
    let data = await res.json();
    return data;
}