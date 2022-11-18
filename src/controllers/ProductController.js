const ProductService = require("../services/ProductService");

class ProductController {
    constructor() {
        this.productService = new ProductService();
        this.getAll = this.getAll.bind(this);
        this.show = this.show.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(req, res, next) {
        try {
            const products =  await this.productService.getAll();
            res.status(200).json(products);
        } catch (error) {
            next(error);
        }
    }

    async show(req, res, next) {
        try {
            const product = await this.productService.getOne(parseInt(req.params.id));
            product ? res.status(200).json(product) : res.status(412).json('product not found');
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            const product = await this.productService.create(req.body);
            res.status(201).json(product);
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            const product = await this.productService.update(req.params.id, req.body);
            product ? res.status(201).json(product) : res.status(412).json('product could not updated');
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const product = await this.productService.delete(req.params.id);
            res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    }

}

module.exports = ProductController;