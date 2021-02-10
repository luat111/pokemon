import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    imgPokemon: {
        backgroundColor: '#c4b8d6',
        width: 170,
        height: 170,
        paddingTop: 10
    },
    imgBgPokemon: {
        backgroundColor: '#c4b8d6',
        width: 170,
        height: 170,
        paddingTop: 10
    },
    containerPokemon: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 10,
        paddingBot: 10,
    },
    gifPokemon: {
        width: 40
    },
    avatar: {
        paddingBottom: 10
    },
    chip: {
        display: 'flex',
        borderColor: 'black'
    },
    label: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    }
}));
