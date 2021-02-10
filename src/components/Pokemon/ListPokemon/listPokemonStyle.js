import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    containerBackGround: {
        paddingTop: 10,
        backgroundColor: '#ffff',
        height: '100vh',
        display: 'flex',        
        flexDirection: 'column',
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#cfe8fc',
        borderRadius: 10,
        height: 235,
        width: 235,
        border: 'solid',
        borderWidth: 3,
    },
    button: {
        width: 200,
        marginLeft:'auto',
        marginRight:'auto',        
    }
}));