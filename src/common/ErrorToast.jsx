import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const ErrorToast = function ({ open }) {
    return (
        <Snackbar open={open} autoHideDuration={30000}>
            <Alert severity="error">
                Unfortunately funny videos couldn&apos;t be loaded :(
                <br />
                Great opportunity to do smth useful!
            </Alert>
        </Snackbar>
    );
};

export default ErrorToast;
