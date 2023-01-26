const getParams = (params, name, validate) => {
    const query = new URLSearchParams(params);
    
    if(name === "lat" || name === "lng"){
        return Number(query.get(name));
    }

    if(name === "toilet_id"){
        return String(query.get(name));
    }
}

export default getParams;