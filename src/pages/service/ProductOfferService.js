
class ProductOfferService {
  constructor(axios) {
    this.axios = axios;
  }

  async addOffer(offer) {
    return (await this.axios.request({
      method: 'post',
      url: '/add',
      data: offer,
    })).data;
  }

}

export default ProductOfferService;