import React, { useState } from 'react'

const useHttpService = (baseURL) => {
    const [resData, setResData] = useState(null);
    const [resErr, setResErr] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const post = async (endURL, payload) => {
        try {
            setIsLoading(true)
            const options = {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(payload),
            }
            const request = await fetch(baseURL + endURL, options);
            const respose = await request.json();
            if (respose.Code !== 200) throw new Error(respose.Code)
            return respose
        }
        catch (any) {
            console.error(any)
        }
    }
    const get = async (endURL) => {
        try {
            setIsLoading(true)
            const request = await fetch(baseURL + endURL);
            const respose = await request.json();
            if (respose.Code !== 200) throw new Error(respose)
            setResData(respose)
        }
        catch (any) {
            setResErr(any)
        }
        finally {
            setIsLoading(false)
        }
    }

    return { get, post, resData, resErr, isLoading }
}

export default useHttpService
