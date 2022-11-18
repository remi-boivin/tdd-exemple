const { Router } = require('express');
const router = Router();
const ProductController = require('../controllers/ProductController')

const productController = new ProductController();
router.get('/api/products/', productController.getAll);
router.get('/api/products/:id', productController.show);
router.post('/api/products/', productController.create);
router.put('/api/products/:id', productController.update);
router.delete('/api/products/:id', productController.delete);

// default: if no other path is corresponding, returns 404 error to user

router.use((_, response) => {
    response.status(404).json('404 error : endpoint not found');
});

module.exports = router;