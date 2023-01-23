import React, {useState} from "react"
import {useEffect} from "react"
import {Button, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material"
import {getProducts, deleteProduct} from "../service/api"
import {Link, useNavigate} from "react-router-dom"
import NavBar from "./NavBar"
import SendIcon from "@mui/icons-material/Send";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;


`

const TbHead = styled(TableHead)`
  background: lightskyblue;
`

const Logout = styled(Button)`
  margin: 50px auto 0 auto;
  justify-content: center;
  justify-items: center;

`

const AllProducts = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        let responce = await getProducts()
        setProducts(responce.data)
    }

    const deleteProductDetails = async (id) => {
        await deleteProduct(id)
        getAllProducts()
    }

    const logOut = () => {
        navigate("/login")
    }

    return (
        <div>
            <NavBar/>
            <StyledTable component={Paper}>
                <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                    <TbHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Cost</TableCell>
                            <TableCell align="right">Note general</TableCell>
                            <TableCell align="right">Note special</TableCell>
                        </TableRow>
                    </TbHead>
                    <TableBody>
                        {
                            products.map(product => (
                                <TableRow key={product._id}>
                                    <TableCell>{product._id}</TableCell>
                                    <TableCell align="right">{product.name}</TableCell>
                                    <TableCell align="right">{product.category}</TableCell>
                                    <TableCell align="right">{product.description}</TableCell>
                                    <TableCell align="right">{product.cost}</TableCell>
                                    <TableCell align="right">{product.note_general}</TableCell>
                                    <TableCell align="right">{product.note_special}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" style={{marginRight: 10}} component={Link}
                                                to={`/edit/${product._id}`}>Edit</Button>
                                        <Button variant="contained" color="secondary"
                                                onClick={() => deleteProductDetails(product._id)}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </StyledTable>
            <Logout variant="contained" onClick={logOut} endIcon={<SendIcon/>}>
                Logout
            </Logout>
        </div>
    )
}

export default AllProducts
