const axios = require('axios');

const getDataFromApi = (url) => {
    return axios.get('https://swapi.dev/api/people/1/')
  .then(response => {
      return response.status;
        });
};


describe('API test', () => {
    test('Make request', done => {
        const api = 'https://rickandmortyapi.com/api/character/';
        getDataFromApi(api).then(response => {
        	console.log(response);
            expect(response).toBe(200);
            done();
        });
    });    
});
//
