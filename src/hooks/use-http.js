import { useState, useCallback } from "react";
const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    // Callback funtion is used to make sure its not rendered again and keep the orignal referene to avoid cyclic depency loop.
    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestConfig.url,
                {
                    method: requestConfig.method,
                    headers: requestConfig.headers ? requestConfig.headers : {},
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
                });
            if (!response.ok) {
                throw new Error('Request failed!');
            }
            const data = await response.json();
            applyData(data);

        } catch (error) {
            setError(error.message || 'Something went wrong');
        }
        setIsLoading(false);
    }, []);
    return {
        isLoading,
        error,
        sendRequest
    };

};
export default useHttp;