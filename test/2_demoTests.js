const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const chaiJsonSchemaAjv = require('chai-json-schema-ajv');
chai.use(chaiJsonSchemaAjv);



describe('Visualization API Tests', function(){

    before(function(){

    })
    it('Get url 1', function(done){
        // send http request
        chai.request('http://localhost:3001')
            .get('/1')
            .end(function(err,res) {
                expect(err).to.be.null;
                //check response status
                expect(res).to.have.status(200);
                
                //check response data structure

                done();
            })
        })
    
        it('Get url 2', function(done){
        // send http request
        chai.request('http://localhost:3001')
            .get('/2')
            .end(function(err,res) {
                expect(err).to.be.null;
                //check response status
                expect(res).to.have.status(200);
                
                //check response data structure

                done();
            })
        })
    
         it('Get url 3', function(done){
        // send http request
        chai.request('http://localhost:3001')
            .get('/3')
            .end(function(err,res) {
                expect(err).to.be.null;
                //check response status
                expect(res).to.have.status(200);
                
                //check response data structure

                done();
            })
        })
    
        it('Get url 4', function(done){
        // send http request
        chai.request('http://localhost:3001')
            .get('/4')
            .end(function(err,res) {
                expect(err).to.be.null;
                //check response status
                expect(res).to.have.status(200);
                
                //check response data structure

                done();
            })
        })
    
        it('Get url 5', function(done){
        // send http request
        chai.request('http://localhost:3001')
            .get('/5')
            .end(function(err,res) {
                expect(err).to.be.null;
                //check response status
                expect(res).to.have.status(200);
                
                //check response data structure

                done();
            })
        })
    
        it('Get url 6', function(done){
        // send http request
        chai.request('http://localhost:3001')
            .get('/6')
            .end(function(err,res) {
                expect(err).to.be.null;
                //check response status
                expect(res).to.have.status(200);
                
                //check response data structure

                done();
            })
        })
    
        it('Get url 7', function(done){
        // send http request
        chai.request('http://localhost:3001')
            .get('/7')
            .end(function(err,res) {
                expect(err).to.be.null;
                //check response status
                expect(res).to.have.status(200);
                
                //check response data structure

                done();
            })
        })
    
        it('Get url 8', function(done){
        // send http request
        chai.request('http://localhost:3001')
            .get('/8')
            .end(function(err,res) {
                expect(err).to.be.null;
                //check response status
                expect(res).to.have.status(200);
                
                //check response data structure

                done();
            })
        })
   
        it('Get url 9', function(done){
        // send http request
        chai.request('http://localhost:3001')
            .get('/9')
            .end(function(err,res) {
                expect(err).to.be.null;
                //check response status
                expect(res).to.have.status(200);
                
                //check response data structure

                done();
            })
        })
    
        it('Get url 10', function(done){
        // send http request
        chai.request('http://localhost:3001')
            .get('/10')
            .end(function(err,res) {
                expect(err).to.be.null;
                //check response status
                expect(res).to.have.status(200);
                
                //check response data structure

                done();
            })
        })
    
        it('Get url 11', function(done){
        // send http request
        chai.request('http://localhost:3001')
            .get('/11')
            .end(function(err,res) {
                expect(err).to.be.null;
                //check response status
                expect(res).to.have.status(200);
                //check response data structure
                done();
            })
        })
   
        it('Get url 12', function(done){
        // send http request
        chai.request('http://localhost:3001')
            .get('/12')
            .end(function(err,res) {
                expect(err).to.be.null;
                //check response status
                expect(res).to.have.status(200);
                //check response data structure
                done();
            })
        })
   
        it('Get url 13', function(done){
        // send http request
        chai.request('http://localhost:3001')
            .get('/13')
            .end(function(err,res) {
                expect(err).to.be.null;
                //check response status
                expect(res).to.have.status(200);
                //check response data structure
                done();
            })
        })
    
        it('Get url 14', function(done){
        // send http request
        chai.request('http://localhost:3001')
            .get('/14')
            .end(function(err,res) {
                expect(err).to.be.null;
                //check response status
                expect(res).to.have.status(200);
                //check response data structure
                done();
            })
        })
    
         it('Get url 15', function(done){
        // send http request
        chai.request('http://localhost:3001')
            .get('/15')
            .end(function(err,res) {
                expect(err).to.be.null;
                //check response status
                expect(res).to.have.status(200);
                //check response data structure
                done();
            })
        })
    
        it('Get url 15', function(done){
        // send http request
        chai.request('http://localhost:3001')
            .get('/16')
            .end(function(err,res) {
                expect(err).to.be.null;
                //check response status
                expect(res).to.have.status(200);
                //check response data structure
                done();
            })
        })
   


    describe('Add new user data', function() {

        it('should accept user data when data is correct', function() {
            chai.request('http://localhost:3001')
            .post('/new')
            .send({
                Mail:'chai_test_mail',
                Password:'chai_test_password'
            })
            .end(function(err,res){
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })
        })
        it('should reject request with missing fields from data structure', function(done) {
            chai.request('http://localhost:3001')
            .post('/new')
            .send({
                
                Mail:'chai_test_mail',
                
            })
            .end(function(err,res) {
                expect(err).to.be.null;
                expect(res).to.have.status(500);
                done();
            })
        })
        it('should reject request with incorrect data types', function(done) {
            chai.request('http://localhost:3001')
            .post('/new')
            .send({

                Mail: null,
                Password: null
            })
            .end(function(err,res) {
                expect(err).to.be.null;
                expect(res).to.have.status(500);
                done();
            })
        })
        it('should reject empty post requests', function(done) {
            chai.request('http://localhost:3001')
            .post('/new')
            .end(function(err,res) {
                expect(err).to.be.null;
                expect(res).to.have.status(500);
                done();
            })
        })
        it('should contain added user data', function(done) {
            chai.request('http://localhost:3001')
            .get('/user2')
            .end(function(err,res){
                expect(err).to.be.null;
                expect(res).to.have.status(200);

                let found = false;
                for(let i=0; i<res.body.lenght; i++) {
                    if((res.body[i].Mail =='chai_test_mail') &&
                    (res.body[i].Password == 'chai_test_password')){
                    found = true;
                    break;
                    }
                }

                if(found == false) {
                    assert.fail('Data not saved');
                }
                done();
            })
        })
       
    })
})