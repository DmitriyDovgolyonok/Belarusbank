import React, {useState} from 'react'
import {
    Checkbox,
    Grid,
    TextField,
    FormControlLabel,
    Paper,
    Button, Typography
} from '@mui/material'
import {login, registration} from "../service/api";
import {useNavigate} from "react-router-dom";


const RegistrationPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const onRegister = async () => {
        const credentials = {
            email,
            password,
            role: "user"
        }
        await registration(credentials)
        navigate("/login")
    }


    return (
        <div style={{padding: 30}}>
            <Paper>
                <Typography variant="h4" style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 5
                }}>Registration</Typography>
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

                    <Grid item xs={12} style={{padding: 10}}>
                        <Button fullWidth variant="contained" onClick={onRegister}> Register </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
};

export default RegistrationPage
