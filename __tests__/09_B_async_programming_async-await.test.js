import axios from 'axios';

const url = 'https://api.coinpaprika.com/v1/coins';
//Documentation for Async functions :
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

describe.skip('Async await', () => {
  describe('Basic async await', () => {
    it('Should display Resolved', (done) => {
      //TODO Fix this function in order to make the test pass with async/await
      function func() {
        const prom = () => new Promise((resolve) => {
          setTimeout(() => resolve('Resolved'), 100);
        });
        const res = prom();
        expect(res).toEqual('Resolved');
        done();
      }

      func();
    });

    it('Make this code work with async/await', (done) => {
      const coinId = 'btc-bitcoin';
      let coin = axios.get(`${url}/${coinId}`);
      expect(coin.name).toEqual('Bitcoin');
      done();
    });

    it('Add results of async actions', (done) => {
      const prom1 = () => new Promise((resolve) => {
        setTimeout(() => resolve(2), 200);
      });
      const prom2 = () => new Promise((resolve) => {
        setTimeout(() => resolve(2), 200);
      });

      function addResultOfPromises(promise1, promise2){
        //TODO write code that will wait until both promises (written above) resolve and then sum their result
        const res = null;
        expect(res).toEqual(4);
        done();
      }
      addResultOfPromises(prom1, prom2);
    });
  });
});
