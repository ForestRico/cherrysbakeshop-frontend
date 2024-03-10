import axios from 'axios'; 

export const getAll = async () => {
    const { data } = await axios.get('/api/foods');
    return data;
};

export const search = async searchTerm => {
    const { data } = await axios.get('/api/foods/search/' + searchTerm);
    return data;
};
   

export const getAllTags = async () => {
    const { data } = await axios.get('/api/foods/tags');
    return data;
};


// async function that takes tag as input. checks if the tag === 'All', then returns 'getAll()' function. Otherwise return 'foods'.filter every single item utilising the tag parameter.
// export const getAllByTags = async tag => {
//     if (tag === 'All') return getAll();
//     return sample_foods.filter(item => item.tags?.includes(tag));
// };

export const getAllByTags = async tag => {
    if (tag === 'All') return getAll();
    const { data } = await axios.get('/api/foods/tag/' + tag);
    return data;
};

// export const getByID = async foodId =>
// sample_foods.find(item => item.id === foodId);

export const getByID = async foodId => {
    const { data } = await axios.get('/api/foods/' + foodId);
    return data;
}