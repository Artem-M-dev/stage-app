import { useCallback } from "react";

export const useHttp = () => {
    const request = useCallback(async (url, method = "GET", body = null) => {
        try {
            const response = await fetch(url, {method, body});

            if (!response.ok) {
                throw new Error("Failed to send data...")
            };

            const data = await response.json();
            return data;

        } catch (err) {
            console.error(err);
            throw err
        }
    }, [])

    return {request}
}