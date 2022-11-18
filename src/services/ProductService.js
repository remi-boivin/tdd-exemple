class ProductService {

    constructor() {
        this.products =     
        this.getAll = this.getAll.bind(this)
        this.getOne = this.getOne.bind(this)
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    async getAll() {
        return this.products
    }

    async getOne(id) {
        return this.products.find(product => product.id == id)
    }

    async create(product) {
        return this.products.push(product)//await productModel.create(product);
    }

    async update(id, product) {
        this.products = this.products.filter(product => product.id != id)
        this.products.push(product)
        return this.products
    }

    delete(id) {
        let deletedProduct = this.products.filter(product => product.id != id)
        this.products = deletedProduct
        return this.products
    }
}

module.exports = ProductService;