import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import {
    Checkbox,
    Grid,
    TextField,
    FormControlLabel,
    Paper,
    Button, Typography
} from '@mui/material'
import {login} from "../service/api"


const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const onLogin = async () => {
        const credentials = {
            email,
            password,
            role: "user"
        }

        await login(credentials).then((response) => {
            if (response.data.role === "pro_user") {
                navigate("/all")
            } else if (response.data.role === "user") {
                navigate("/user_only")
            }
            else if(response.data.role === "admin"){
                navigate("/admin_only")
            }
        })
    }


    return (
        <div style={{padding: 30}}>
            <Paper>
                <Typography variant="h4" style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 5
                }}>Login</Typography>
                <Grid
                    container
                    spacing={3}
                    direction={'column'}
                    justify={'center'}
                    alignItems={'center'}
                >
                    <Grid item xs={12}>
                        <TextField label="Username" onChange={(e) => setEmail(e.target.value)}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Password" type={'password'}
                                   onChange={(e) => setPassword(e.target.value)}></TextField>
                    </Grid>
                    <Grid>
                        <Link to="/registration">Don't have an account?</Link>
                    </Grid>
                    <Grid item xs={12} style={{padding: 10}}>
                        <Button fullWidth variant="contained" onClick={onLogin}> Login </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
};

export default LoginPage
