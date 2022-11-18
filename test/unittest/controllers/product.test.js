import { mockRequest, mockResponse, mockNext } from "../../utils/interceptor";
import ProductController from "../../../src/controllers/ProductController";
import ProductService from "../../../src/services/ProductService";

jest.mock('../../../src/services/ProductService')
describe("Check method 'baseController' ", () => {
    beforeEach(() => {
        ProductService.mockReturnValueOnce(
            {
                getAll: jest.fn().mockResolvedValueOnce(
                    [
                        { id: 1, name: "Cookies", price: 1, description: "test", category: "test", quantity: 1, rating: 1 },
                        { id: 2, name: "Pepito", price: 1, description: "test", category: "test", quantity: 1, rating: 1 }
                    ]
                ),
                getOne: jest.fn().mockResolvedValueOnce(
                    { id: 2, name: "Banana", price: 1, description: "test", category: "test", quantity: 1, rating: 1 }
                ),
                create: jest.fn().mockResolvedValueOnce(
                    [
                        { id: 1, name: "Cookies", price: 1, description: "test", category: "test", quantity: 1, rating: 1 },
                        { id: 2, name: "Pepito", price: 1, description: "test", category: "test", quantity: 3, rating: 1 },
                        { id: 3, name: "Bananas", price: 1, description: "test", category: "test", quantity: 5, rating: 1 }
                    ]
                ),
                update: jest.fn().mockResolvedValueOnce(
                    [
                        { id: 1, name: "Cookies", price: 1, description: "test", category: "test", quantity: 1, rating: 1 },
                        { id: 2, name: "Pepito", price: 1, description: "test", category: "test", quantity: 3, rating: 1 },
                        { id: 3, name: "Bananas", price: 1, description: "test", category: "test", quantity: 15, rating: 1 }
                    ]
                ),
                delete: jest.fn().mockResolvedValueOnce(
                    [
                        { id: 1, name: "Cookies", price: 1, description: "test", category: "test", quantity: 1, rating: 1 },
                        { id: 3, name: "Bananas", price: 1, description: "test", category: "test", quantity: 5, rating: 1 }
                    ]
                ),
            }).mockReturnValueOnce({
                getAll: jest.fn().mockRejectedValueOnce(new Error('An error appeared')),
                getOne: jest.fn().mockRejectedValueOnce(new Error('An error appeared')),
                create: jest.fn().mockRejectedValueOnce(new Error('An error appeared')),
                update: jest.fn().mockRejectedValueOnce(new Error('An error appeared')),
                delete: jest.fn().mockRejectedValueOnce(new Error('An error appeared')),
            })
    });

    test('should 200 and return correct value', async () => {
        const req = mockRequest();
        const res = mockResponse();
        const next = mockNext();

        const productController = new ProductController();
        await productController.getAll(req, res, next)
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith([
            { id: 1, name: "Cookies", price: 1, description: "test", category: "test", quantity: 1, rating: 1 },
            { id: 2, name: "Pepito", price: 1, description: "test", category: "test", quantity: 1, rating: 1 }
        ])
    });

    test('should throw an error on GetAll', async () => {
        const req = mockRequest();
        const res = mockResponse();
        const next = mockNext();

        const productController = new ProductController();
        await productController.getAll(req, res, next)
        expect(next).toHaveBeenCalled()
    });

    test('should return a product', async () => {
        const req = mockRequest();
        const res = mockResponse();
        const next = mockNext();

        const productController = new ProductController();
        await productController.show(req, res, next)
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith({ id: 2, name: "Banana", price: 1, description: "test", category: "test", quantity: 1, rating: 1 })
    });

    test('should throw an error on Show', async () => {
        const req = mockRequest();
        const res = mockResponse();
        const next = mockNext();

        const productController = new ProductController();
        await productController.show(req, res, next)
        expect(next).toHaveBeenCalled()
    });

    test('should create a product', async () => {
        const req = mockRequest();
        const res = mockResponse();
        const next = mockNext();

        const productController = new ProductController();
        await productController.create(req, res, next)
        expect(res.status).toHaveBeenCalledWith(201)
        expect(res.json).toHaveBeenCalledWith([
            { id: 1, name: "Cookies", price: 1, description: "test", category: "test", quantity: 1, rating: 1 },
            { id: 2, name: "Pepito", price: 1, description: "test", category: "test", quantity: 3, rating: 1 },
            { id: 3, name: "Bananas", price: 1, description: "test", category: "test", quantity: 5, rating: 1 }
        ]);
    });

    test('should throw an error on Create', async () => {
        const req = mockRequest();
        const res = mockResponse();
        const next = mockNext();

        const productController = new ProductController();
        await productController.create(req, res, next)
        expect(next).toHaveBeenCalled()
    });

    test('should update a product', async () => {
        const req = mockRequest();
        const res = mockResponse();
        const next = mockNext();

        const productController = new ProductController();
        await productController.update(req, res, next)
        expect(res.status).toHaveBeenCalledWith(201)
        expect(res.json).toHaveBeenCalledWith([
            { id: 1, name: "Cookies", price: 1, description: "test", category: "test", quantity: 1, rating: 1 },
            { id: 2, name: "Pepito", price: 1, description: "test", category: "test", quantity: 3, rating: 1 },
            { id: 3, name: "Bananas", price: 1, description: "test", category: "test", quantity: 15, rating: 1 }
        ])
    });

    test.skip('should throw an error on Update', async () => {
        const req = mockRequest();
        const res = mockResponse();
        const next = mockNext();

        const productController = new ProductController();
        productController.update(req, res, next)
        expect(next).toHaveBeenCalled()
    });

    test.skip('should delete a product', async () => {
        const req = mockRequest();
        const res = mockResponse();
        const next = mockNext();

        const productController = new ProductController();
        productController.delete(req, res, next)
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith([
            { id: 1, name: "Cookies", price: 1, description: "test", category: "test", quantity: 1, rating: 1 },
            { id: 3, name: "Bananas", price: 1, description: "test", category: "test", quantity: 5, rating: 1 }
        ])
    });

    test.skip('should throw an error on Delete', async () => {
        const req = mockRequest();
        const res = mockResponse();
        const next = mockNext();

        const productController = new ProductController();
        await productController.delete(req, res, next)
        expect(next).toHaveBeenCalled()
    });

    afterEach(() => {
        jest.resetModules();
        jest.clearAllMocks();
    });
});