import React from "react";
import { makeStyles } from '@mui/styles';
import {Avatar, Button, TextField, FormControlLabel, Checkbox, Link,
    Paper, Grid, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

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
        // marginTop: theme.spacing(1),
    },
    loginSubmit: {
        // margin: theme.spacing(3, 0, 2),
        marginTop: "2vh !important",
        float: "right"
    },
}));

const Login = () => {
    const classes = useStyles();

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
                        <form  noValidate>
                            <TextField className={classes.form}
                                variant="outlined" margin="normal" required
                                id="email" label="Email Address" name="email" autoComplete="email" autoFocus
                            />
                            <TextField className={classes.form}
                                variant="outlined" margin="normal" required
                                name="password" label="Password" type="password" id="password"
                                autoComplete="current-password"
                            />
                            <Grid container>
                                <Grid item xs={6} style={{width: "50%"}}>
                                    <FormControlLabel style={{paddingTop: "20px", marginLeft: "-10px", float: "left", width: "100%"}}
                                                      control={<Checkbox value="remember" color="primary" />}
                                                      label="Remember me"
                                    />
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