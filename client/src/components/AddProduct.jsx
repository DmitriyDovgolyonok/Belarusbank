import {FormControl, FormGroup, InputLabel, Typography, styled, Input, Button} from "@mui/material"
import {useState} from "react"
import {addProduct} from "../service/api"
import {useNavigate} from 'react-router-dom'

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

const AddProduct = () => {
    const [product, setProduct] = useState(defaultValue)

    const navigate = useNavigate()

    const onValueChanged = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
        console.log(product)
    }

    const addProductDetails = async () => {
        await addProduct(product)
        navigate('/all')
    }

    return (
        <Container>
            <Typography variant="h4">Add Product</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(event => onValueChanged(event))} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Category</InputLabel>
                <Input onChange={(event => onValueChanged(event))} name="category"/>
            </FormControl>
            <FormControl>
                <InputLabel>Description</InputLabel>
                <Input onChange={(event => onValueChanged(event))} name="description"/>
            </FormControl>
            <FormControl>
                <InputLabel>Cost</InputLabel>
                <Input onChange={(event => onValueChanged(event))} name="cost"/>
            </FormControl>
            <FormControl>
                <InputLabel>Note general</InputLabel>
                <Input onChange={(event => onValueChanged(event))} name="note_general"/>
            </FormControl>
            <FormControl>
                <InputLabel>Note special</InputLabel>
                <Input onChange={(event => onValueChanged(event))} name="note_special"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => addProductDetails()}>Add</Button>
            </FormControl>
        </Container>
    )
}

export default AddProduct
