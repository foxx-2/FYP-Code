import React from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles, Grid, Button, AppBar, Toolbar, TextField, Link } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginTop: theme.spacing(35),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    toolBar: {
        minHeight: "80px",
    },
    appBar: {
        alignItems: "center",
        background: '#00a152'
    },
    submit: {
        margin: theme.spacing(6, 0, 2),
        height: "70px"
    },
}));
const Login = (props) => {
    // const authentication = {
    //     isLoggedIn: false,
    //     onAuthentication() {
    //         this.isLoggedIn = true
    //     },
    //     getLoggedInStatus() {
    //         return this.isLoggedIn
    //     }
    // }
    const handleClick = () => {
        setLoggedInStatus(true)
        props.history.push('/dashboard')
        // alert(loggedInStatus)
    }
    const [loggedInStatus, setLoggedInStatus] = React.useState(false);

    const classes = useStyles();
    return (
        <div className={classes.content}>

            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <Typography variant="h3" className={classes.title}>
                        LOGIN TO PORTAL
                    </Typography>
                </Toolbar>
            </AppBar>

            <main>
                <div className={classes.paper}>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="off"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{ background: '#00a152', color: '#FFFFFF', fontSize: 20 }}
                            className={classes.submit}
                            onClick={handleClick}
                        >
                            Log In
                         </Button>

                        <Grid container>
                            <Grid item xs>
                                <Link
                                    href="/forgotpassword"
                                    variant="body2"
                                    style={{ color: '#00a152' }}
                                >
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    href="/createaccount"
                                    variant="body2"
                                    style={{ color: '#00a152' }}>
                                    {"Create New Account"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Login