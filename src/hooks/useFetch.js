import { useEffect, useState } from "react";

// custom hook fetch

const useFetch = (url, query) => {

    const [datas, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(`${url}`);
                    const data = await response.json();
                    setDatas(data);
                } catch (error) {
                    console.log('Error data :', error);
                    setError(
                        'Désolé, une erreur est survenue au chargement des données'
                    );
                } finally {
                    setIsLoading(false);
                }
            };

            fetchData();
        }, 2000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, query]);


    return { datas, isLoading, error };

}
export default useFetch;