import axios from 'axios';

import ProductOfferService from './ProductOfferService';

const instance = axios.create({
  headers: { Accept: 'application/json' },
});

const service = {
  offer: new ProductOfferService(instance),
};
export default service;