import {FormControl, FormGroup, InputLabel, Typography, styled, Input, Button} from "@mui/material"
import {useState, useEffect} from "react"
import {editProduct, getProduct} from "../service/api"
import {useNavigate, useParams} from 'react-router-dom'

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;

  & > div {
    margin-top: 20px;
  }

`

const defaultValue = {
    name: '',
    category: '',
    description: '',
    cost: '',
    note_general: '',
    note_special: '',
}

const EditProduct = () => {
    const [product, setProduct] = useState(defaultValue)
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        loadProductDetails()
    }, [])

    const loadProductDetails = async () => {
        const response = await getProduct(id)
        setProduct(response.data)
    }

    const onValueChanged = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
        //console.log(product)
    }

    const editProductDetails = async () => {
        await editProduct(product, id)
        navigate('/all')
    }

    return (
        <Container>
            <Typography variant="h4">Edit Product</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(event => onValueChanged(event))} name="name" value={product.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Category</InputLabel>
                <Input onChange={(event => onValueChanged(event))} name="category" value={product.category}/>
            </FormControl>
            <FormControl>
                <InputLabel>Description</InputLabel>
                <Input onChange={(event => onValueChanged(event))} name="description" value={product.description}/>
            </FormControl>
            <FormControl>
                <InputLabel>Cost</InputLabel>
                <Input onChange={(event => onValueChanged(event))} name="cost" value={product.cost}/>
            </FormControl>
            <FormControl>
                <InputLabel>Note general</InputLabel>
                <Input onChange={(event => onValueChanged(event))} name="note_general" value={product.note_general}/>
            </FormControl>
            <FormControl>
                <InputLabel>Note special</InputLabel>
                <Input onChange={(event => onValueChanged(event))} name="note_special" value={product.note_special}/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => editProductDetails()}>Edit</Button>
            </FormControl>
        </Container>
    )
}

export default EditProduct
