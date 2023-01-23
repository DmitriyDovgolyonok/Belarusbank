import express from "express"
import {
    addProduct,
    getProducts,
    getProduct,
    editProduct,
    deleteProduct,
    editCategory
} from "../controller/product_controller.js"
import {registration, login} from "../controller/user_controller.js"

const router = express.Router()

router.post('/add', addProduct)
router.get('/all', getProducts)
router.get('/:id', getProduct)
router.put('/:id', editProduct)
router.put('/edit_category/:id', editCategory)
router.delete('/:id', deleteProduct)

router.post('/register', registration)
router.post('/login', login)

export default router
