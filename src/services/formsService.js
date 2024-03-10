import axios from 'axios'; 

export const getAll = async () => {
    const { data } = await axios.get('/api/forms');
    return data;
};

export const deleteOne = async (id) => {
    const { data } = await axios.delete('/api/forms/' + id);
    return data;
};