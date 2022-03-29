import axiosAdmin from "./axiosAdmin";

const categoryApi = {
    async getAll(params) {
        var qs = require('qs');
        const response = await axiosAdmin.get('category', {
            params: {
                ...params,
            },
            paramsSerializer:  (params) => {
                return qs.stringify(params, { arrayFormat: 'repeat' })
            },
        })
        return response
    },

    get(id) {
        const url = `/posts/${id}/`;
        return axiosAdmin.get(url);
    },

    add(data) {
        const url = `/products/`;
        return axiosAdmin.post(url, data);
    },

    update(data) {
        const url = `/products/${data.id}/`;
        return axiosAdmin.patch(url, data);
    },

    remove(id) {
        const url = `/products/${id}/`;
        return axiosAdmin.delete(url);
    },

}

export default categoryApi
