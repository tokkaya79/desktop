import React from 'react';
import axios, { AxiosError } from 'axios';
import { IBoard } from '../models';


export function useBoards() {
    const [boards, setBoards] = React.useState<IBoard[]>([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const [pagin, setPagin] = React.useState(false);

    const fetchProducts = async () => {
        try {
            setError('');
            setLoading(true);
            setPagin(false);


            const response = await axios.get<IBoard[]>(
                `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`
            );
            setBoards(response.data);
            setLoading(false);
            setPagin(true)
        } catch (e: unknown) {
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message);
        }
    };

    React.useEffect(() => {
        fetchProducts();
    }, []);

    return { boards, error, loading, pagin };
}
