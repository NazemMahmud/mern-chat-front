import React, {useReducer, useState} from "react";
import {useHistory} from "react-router-dom";
import { makeStyles } from '@mui/styles';
import {Avatar, Button, TextField, FormControlLabel, Checkbox, Link,
    Paper, Grid, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import {login} from "../../services/Authentication/auth.service";


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '75vh'
    },
    paper: {
        margin: '25px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: "10px",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
    },
    loginSubmit: {
        // margin: theme.spacing(3, 0, 2),
        marginTop: "2vh !important",
        float: "right"
    },
}));

const Login = (props) => {
    let history = useHistory();

    const classes = useStyles(); // styling
    // form validation: https://stackoverflow.com/questions/59041341/whats-the-purpose-of-the-3rd-argument-in-usereducer
    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            email: {
                name: "email",
                value: "",
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                isValid: true,
                helperText: ""
            },
            password: {
                name: "password",
                value: "",
            }
        }
    );
    const inputKeys = Object.keys(formInput);

    const formValidation = (input, inputIdentifier) => {
        if(inputIdentifier === "email") {
            input.isValid = !!(formInput.email.value.match(formInput.email.pattern));
            input.helperText = (!input.isValid) ? "Invalid email address": "";
        }

        if(!input.value.length){
            input.isValid = true;
            input.helperText = "";
        }
        setFormInput({...formInput, [inputIdentifier]: input});
    };

    // login form: on change of an input field action
    const handleInput = (event, inputIdentifier) => {
        const input = formInput[inputIdentifier];
        input.value = event.target.value;
        setFormInput({...formInput, [inputIdentifier]: input});
        formValidation(input, inputIdentifier);
    };

    // sign up action
    const signin = async event => {
        event.preventDefault();
        const formData = {};
        for (let loginData in formInput) {
            formData[loginData] = formInput[loginData].value;
        }

        // TODO: add a loader
        await login(formData)
            .then(response => {
                history.push("/");
            })
            .catch(error => {
                props.callBack(error.response.data.message);
            });
    };

    return (
        <Grid container spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              className={classes.root} >
            <Grid item xs={12} sm={8} md={5}>
                <Paper elevation={6} square p={2}>
                    <div  className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign In
                        </Typography>
                        {/*noValidate purpose */}
                        <form noValidate onSubmit={signin}>
                            <TextField className={classes.form} variant="outlined" margin="normal" required
                                       defaultValue={formInput.email.value} name={formInput.email.name}
                                       id="email" label="Email Address"  autoComplete="email" autoFocus
                                       error={!formInput.email.isValid} helperText={formInput.email.helperText}
                                       onChange={event => handleInput(event, inputKeys[0])}

                            />
                            <TextField className={classes.form} variant="outlined" margin="normal" required
                                       name={formInput.password.name} defaultValue={formInput.password.value}
                                       label="Password" type="password" id="password" autoComplete="current-password"
                                       onChange={event => handleInput(event, inputKeys[1])}
                            />
                            <Grid container>
                                <Grid item xs={6} style={{width: "50%"}}>
                                    <FormControlLabel style={{paddingTop: "20px", marginLeft: "-10px", float: "left", width: "100%"}}
                                                      control={<Checkbox value="remember" color="primary" />}
                                                      label="Remember me"/>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button className={classes.loginSubmit}
                                        type="submit"  variant="contained" color="primary">
                                        Sign In
                                    </Button>
                                </Grid>
                            </Grid>

                            <Grid container style={{marginBottom: '15px', marginTop: '15px'}}>
                                <Grid item xs={6}>
                                    <Link href="#" variant="body2" style={{textAlign: "left", display: "block", textDecoration: 'none'}}>
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item xs={6}>
                                    <Link href="/signup" variant="body2" style={{textDecoration: 'none', textAlign: "right", display: "block"}}>
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Login;