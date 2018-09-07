const getServersQty = require('./getServerQty');
const expect = require('expect.js');

describe('necessary servers q-ty', () => {

    it('should be 9 servers if T=100, t = 55, x=10, n=3', () => {
        expect(getServersQty(100, 55, 10, 3)).to.equal(9);
    });

    it('should be 9 servers if T=100, t = 10, x=10, n=2', () => {
        expect(getServersQty(100, 10, 10, 2)).to.equal(1);
    });

    it('should be 9 servers if T=100, t = 20, x=50, n=2', () => {
        expect(getServersQty(100, 20, 50, 2)).to.equal(3);
    });

    it('should throw error if T=100, t = 20, x=100, n=2', () => {
        expect(getServersQty).withArgs(100, 20, 100, 2).to.throwError();
    });

});
