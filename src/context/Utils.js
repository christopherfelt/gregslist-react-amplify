export async function getRequestData(requestType, requestPath, data){
    let url = "https://127.0.0.1:8000/api/v1" + requestPath;

    const options = {
        method: requestType,
        url: url,
        header: {
            "Content-type": "application/json",
        }
    }

    if(data != null){
        options.data = data;
    }

    return options;
}