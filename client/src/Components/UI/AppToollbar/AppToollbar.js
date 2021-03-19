import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import Typography from "@material-ui/core/Typography";

import makeStyles from "@material-ui/core/styles/makeStyles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainLink: {
        color: "inherit",
        textDecoration: "none",
        "&:hover": {
            color: "inherit",
        },
    },
    staticToolbar: {
        marginBottom: theme.spacing(2),
    },
}));

const AppToollbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" >
                <Toolbar>
                    <Typography variant="h6">
                        <Button>Add</Button>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar className={classes.staticToolbar} />
        </>
    );
};

export default AppToollbar;