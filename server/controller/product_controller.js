import Product from "../schema/product_schema.js"

export const addProduct = async (req, res) => {
    const product = req.body
    const newProduct = new Product(product)

    try {
        await newProduct.save()
        res.status(201).json(newProduct)
    } catch (e) {
        res.status(409).json({message: e.error})
    }
}

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (e) {
        res.status(404).json({message: e.error})
    }
}

export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (e) {
        res.status(404).json({message: e.error})
    }
}

export const editProduct = async (req, res) => {
    let product = req.body
    const editProduct = new Product(product)

    try {
        await Product.updateOne({_id: req.params.id}, editProduct)
        res.status(201).json({editProduct})
    } catch (e) {
        res.status(409).json({message: e.message})
    }

}

export const editCategory = async (req, res) => {
    let category = req.body.category

    try {
        await Product.updateOne({_id: req.params.id}, {$set: {category: category}})
    }catch (e){
        res.status(409).json({message: e.message})
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await Product.deleteOne({_id: req.params.id})
        res.status(200).json({message: "User deleted successfully"})
    } catch (e) {
        res.status(409).json({message: e.message})
    }

}
