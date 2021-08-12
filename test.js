let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://localhost:8228';
describe('listado clientes test: ', () => {
    it('should get all clientes', (done) => {
        chai.request(url)
            .get('/customerInfo/clientes')
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});

