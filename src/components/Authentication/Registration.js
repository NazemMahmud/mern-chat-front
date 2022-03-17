import React, {useReducer, useEffect, useRef} from "react";
import {connect} from "react-redux";
import { makeStyles } from '@mui/styles';
import {Avatar, Button, TextField, Link, Paper, Grid, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import {useHistory} from "react-router-dom";
import {signUpAction} from "../../redux/actions/authAction";

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
        width: '45%', // Fix IE 11 issue.
        // marginTop: theme.spacing(1),
    },
    registrationSubmit: {
        // margin: theme.spacing(3, 0, 2),
        marginTop: "2vh !important",
        float: "right"
    },
}));

const Registration = ({snackbarCallBack, registrationState, signUpAction}) => {
    const didMount = useRef(false); // to make sure useeffect call after first render, that is after form submit
    const classes = useStyles();
    let history = useHistory();

    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name: {
                name: "name",
                value: "",
            },
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
            },
            confirmPassword: {
                name: "confirm-password",
                value: "",
                isValid: true,
                helperText: ""
            },
            rememberMe: {
                name: "remember",
                value: false
            },
        }
    );
    const inputKeys = Object.keys(formInput);
    useEffect(() => {
        if (didMount.current) {
            redirectOrError();
        } else {
            didMount.current = true;
        }
    }, [registrationState]);

    /**
     * After registration form submit
     */
    const redirectOrError = () => {
        if (registrationState?.error) {
            snackbarCallBack(registrationState.error.errorMessage);
        } else {
            history.push("/login");
        }
    }
    // password and confirm password field match?
    const passwordMatch = () => {
        const password = formInput.password.value;
        const confirm = formInput.confirmPassword.value;
        return confirm === password;
    };

    const formValidation = (input, inputIdentifier) => {
        if(inputIdentifier === "email") {
            input.isValid = !!(formInput.email.value.match(formInput.email.pattern));
            input.helperText = (!input.isValid) ? "Invalid email address": "";
        }
        if(inputIdentifier === "confirmPassword") {
            input.isValid = passwordMatch();
            input.helperText = (!input.isValid) ? "Password doesn't match": "";
        }
        if(!input.value.length){
            input.isValid = true;
            input.helperText = "";
        }
        setFormInput({...formInput, [inputIdentifier]: input});
    };

    // register form: on change of an input field action
    const handleInput = (event, inputIdentifier) => {
        const input = formInput[inputIdentifier];
        input.value = ( event.target.name === "remember") ? (!!(event.target.checked)) : event.target.value;
        setFormInput({...formInput, [inputIdentifier]: input});
        formValidation(input, inputIdentifier);
    };

    // sign up action
    const register = async (event) => {
        event.preventDefault();
        const formData = {};
        for (let registerData in formInput) {
            formData[registerData] = formInput[registerData].value;
            // TODO: if required field empty, show helpertext and error valid
        }
        delete formData['confirmPassword'];
        delete formData['rememberMe'];

        await signUpAction(formData);
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
                            Sign Up
                        </Typography>
                        <form  noValidate onSubmit={register}>
                            <TextField className={classes.form} variant="outlined" margin="normal" required
                                       style={{marginRight: '10%'}}
                                       id="name" label="User Name" autoComplete="name" autoFocus
                                       name={formInput.name.name} defaultValue={formInput.name.value}
                                       onChange={event => handleInput(event, inputKeys[0])}

                            />
                            <TextField className={classes.form} variant="outlined" margin="normal" required
                                id="email" label="Email Address" autoComplete="email"
                                       name={formInput.email.name} defaultValue={formInput.email.value}
                                       error={!formInput.email.isValid} helperText={formInput.email.helperText}
                                       onChange={event => handleInput(event, inputKeys[1])}
                            />
                            <TextField className={classes.form} variant="outlined" margin="normal" required
                                       style={{marginRight: '10%'}}
                                       label="Password" type="password" id="password" autoComplete="current-password"
                                       name={formInput.password.name} defaultValue={formInput.password.value}
                                       onChange={event => handleInput(event, inputKeys[2])}
                            />
                            <TextField className={classes.form} variant="outlined" margin="normal" required
                                       label="Confirm Password" type="password" id="confirm-password"
                                       name={formInput.confirmPassword.name} defaultValue={formInput.confirmPassword.value}
                                       error={!formInput.confirmPassword.isValid} helperText={formInput.confirmPassword.helperText}
                                       onChange={event => handleInput(event, inputKeys[3])}
                            />
                            <Grid container>
                                <Grid item xs={6} style={{width: "50%", marginTop: '2vh'}}>
                                    <Link href="/login" variant="body2"
                                          style={{ width: "100%", textDecoration: 'none'}}>
                                        {"Already have an account? Sign In"}
                                    </Link>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button className={classes.registrationSubmit}
                                        type="submit"  variant="contained" color="primary">
                                        Sign Up
                                    </Button>
                                </Grid>
                            </Grid>

                            <Grid container style={{marginBottom: '15px', marginTop: '15px'}}>

                            </Grid>
                        </form>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = state  => {
    return {  registrationState: state.registrationState }
}

const mapDispatchToProps = {
    signUpAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
