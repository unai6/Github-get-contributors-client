import {axiosInstance} from './api';

export const getContributors =() => {
    //we use window.location-search to add our query params to api URL.
    return axiosInstance.get(`/get-contributors/${window.location.search}`);
};
