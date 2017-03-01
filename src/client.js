import $ from 'jquery';

import config from './config.json';

export default new class {
    ajax(params) {
        params.url = `${config.api}/${params.url}`;
        const token = localStorage.getItem('authToken');

        if (token) {
            params.headers = { 'X-AUTH-TOKEN': token };
        }

        return $.ajax(params);
    }
};
