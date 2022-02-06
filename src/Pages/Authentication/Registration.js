import React from "react";
import { makeStyles } from '@mui/styles';
import {Avatar, Button, TextField, Link, Paper, Grid, Typography } from '@mui/material';
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
    registrationSubmit: {
        // margin: theme.spacing(3, 0, 2),
        marginTop: "2vh !important",
        float: "right"
    },
}));

const Registration = () => {
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
                            Sign Up
                        </Typography>
                        <form  noValidate>
                            <TextField className={classes.form}
                                       variant="outlined" margin="normal" required
                                       id="name" label="User Name" name="name" autoFocus
                            />
                            <TextField className={classes.form}
                                variant="outlined" margin="normal" required
                                id="email" label="Email Address" name="email" autoComplete="email" autoFocus
                            />
                            <TextField className={classes.form}
                                variant="outlined" margin="normal" required
                                name="password" label="Password" type="password" id="password"
                                autoComplete="current-password"
                            />
                            {/*TODO Confirm Password*/}
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

export default Registration;