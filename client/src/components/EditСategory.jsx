import {FormControl, FormGroup, InputLabel, Typography, styled, Input, Button} from "@mui/material"
import {useState, useEffect} from "react"
import {editCategory, getProduct} from "../service/api"
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

const EditCategory = () => {
    const [product, setProduct] = useState(defaultValue)
    const {id} = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        loadProductDetails()
    }, [])

    const loadProductDetails = async () => {
        const response = await getProduct(id)
        setProduct(response.data)
    }

    const onValueChanged = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const edit = async () => {
        await editCategory(product, id)
    }


    return (
        <Container>
            <Typography variant="h4">Edit category</Typography>
            <FormControl>
                <InputLabel>Category</InputLabel>
                <Input onChange={(event => onValueChanged(event))} name="category" value={product.category}/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() =>
                    edit()
                }>Edit</Button>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() =>
                    navigate('/admin_only', {replace: true})
                }>Back</Button>
            </FormControl>
        </Container>
    )
}

export default EditCategory
