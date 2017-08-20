import axios from 'axios';

const getSampleList = (maxItems) =>
{
    return axios.get('http://localhost:63686/api/RestDemo/GetSampleList/'+ maxItems);
};

export default getSampleList;