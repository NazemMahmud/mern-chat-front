import React, {useState} from "react";
import Snackbar from "@mui/material/Snackbar";

const SnackBar = ({data}) => {
    // TODO: autoHideDuration not working
    // close not working
    const [snackbarState, setSnackbarState] = useState({
        open: true,
        vertical: 'top',
        horizontal: 'right',
    });

    const close = () => {
        setSnackbarState({...snackbarState, open: false});
    };

    return (
        <Snackbar style={{display: "block", height: '100%'}}
                  anchorOrigin={{vertical: snackbarState.vertical, horizontal: snackbarState.horizontal}}
                  open={true}
                  message={data.message}
                  autoHideDuration={2000}
                  onClick={close}
                  key={snackbarState.vertical + snackbarState.horizontal}/>
    )
}

export default SnackBar;