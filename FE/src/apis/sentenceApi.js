import api from './index'

export const getPost = async (sId) => {
    try {
        const res = await api({
            method: "GET",
            url: `/sns/paragraph/${sId}`	
        });

        console.log(res.data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};