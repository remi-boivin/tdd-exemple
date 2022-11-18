import request from "supertest";
import app from "../../index";

describe("get create & show Endpoints", () => {
  it.skip("should return all products", async () => {
    const res = await request(app).get("/api/products").send();
    expect(res.statusCode).toEqual(200);
    expect(res.req.method).toEqual("GET");
  });

//   it("GET: should return all products", async () => {
//     const res = await request(app).get("/api/products").send();
//     expect(res.statusCode).toEqual(200);
//     expect(res.req.method).toEqual("GET");
//   });

//   it("GET: should return a product", async () => {
//     const res = await request(app).get("/api/products/1").send();
//     expect(res.statusCode).toEqual(200);
//     expect(res.req.method).toEqual("GET");
//   });

//   it("GET: should return an error: Product not existing", async () => {
//     const res = await request(app).get("/api/products/400").send();
//     expect(res.statusCode).toEqual(412);
//     expect(res.req.method).toEqual("GET");
//   });

//   it("POST: should create a new product", async () => {
//     const res = await request(app).post("/api/products").send({
//       name: "Cookies",
//       price: 2.5,
//       description: "Chocolate chip cookies",
//       category: "dessert",
//       quantity: 10,
//     });
//     expect(res.statusCode).toEqual(201);
//     expect(res.req.method).toEqual("POST");
//   });
// });

// describe("get update & delete Endpoints", () => {
//     it("UPDATE: should update a product", async () => {
//         const res = await request(app).put("/api/products/1").send({
//           quantity: 9,
//         });
//         expect(res.statusCode).toEqual(201);
//         expect(res.req.method).toEqual("PUT");
//       });
  
//       it("UPDATE: should return an error: Product not existing", async () => {
//         const res = await request(app).put("/api/products/500").send({
//           quantity: 9,
//         });
//         expect(res.statusCode).toEqual(412);
//         expect(res.req.method).toEqual("PUT");
//       });

//       it.skip("DELETE: should delete a product", async () => {
//         const res = await request(app).delete("/api/products/1").send();
//         expect(res.statusCode).toEqual(200);
//         expect(res.req.method).toEqual("DELETE");
//       });
  
//       it.skip("DELETE: should return an error: Product not existing", async () => {
//         const res = await request(app).delete("/api/products/1030").send();
//         expect(res.statusCode).toEqual(200);
//         expect(res.req.method).toEqual("DELETE");
//       });
  
  });

