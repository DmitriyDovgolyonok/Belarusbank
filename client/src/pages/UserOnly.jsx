import React, {useEffect, useState} from "react"
import {Button, Paper, styled, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material"
import {Link, useNavigate} from "react-router-dom"
import {getProducts} from "../service/api"
import SendIcon from '@mui/icons-material/Send'

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

const UserOnly = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleChange = e => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        let response = await getProducts()
        setProducts(response.data)
    }

    const logOut = () => {
        navigate("/login")
    }

    const filteredProducts = products.filter(product => product.category.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <div className='category-search'>
                <h1 className='text'>Search</h1>
                <form>
                    <input type="text" placeholder="Search" className="search-input" onChange={handleChange}/>
                </form>
            </div>

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
                        </TableRow>
                    </TbHead>
                    <TableBody>
                        {
                            filteredProducts.map(product => (
                                <TableRow key={product._id}>
                                    <TableCell>{product._id}</TableCell>
                                    <TableCell align="right">{product.name}</TableCell>
                                    <TableCell align="right">{product.category}</TableCell>
                                    <TableCell align="right">{product.description}</TableCell>
                                    <TableCell align="right">{product.cost}</TableCell>
                                    <TableCell align="right">{product.note_general}</TableCell>
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

export default UserOnly
