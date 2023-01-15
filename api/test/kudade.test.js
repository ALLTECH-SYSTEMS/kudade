// import request from 'supertest';
// import app from '../index.js';


// describe('test the kudade API', () => {

//     afterAll(async () => {
//      
//         mongoose.disconnect();
//       });

//       // test get all recipe
//     describe('GET/order_items', () => {
//         it('it should retrieve all the order-items for the seller in db',
//         async () => {
//             const res = await request(app)
//                         .get('/order_items')
//                         .auth('d1b65fc7debc3361ea86b5f14c68d2e2', '13844');
//                    
//             expect(res.statusCode).toEqual(200);
//             expect(res.body).toEqual(
//             expect.objectContaining({
//                 // success: true,
//                 data: expect.objectContaining({
//                     id: res.body.data.id,
//                     price: res.body.data.price
//                   }),
//             }),
//             );
//         });
//
//     });


// });


describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
})