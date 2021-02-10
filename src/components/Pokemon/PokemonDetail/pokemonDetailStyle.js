import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    statContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: 650,
        height: 555,
    },
    stats: {
        backgroundColor: '#f0e7ff',
        height: 200,
        borderRadius: 10,
        borderStyle: 'outset',
        borderColor: 'black',
        borderWidth: 'medium',
        width: 'inherit',
    },
    infoContainer: {
        backgroundColor: '#f0e7ff',
        width: 650,
        height: 555,
        borderRadius: 10,
        borderStyle: 'outset',
        borderColor: 'black',
        borderWidth: 'medium',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    info: {
        backgroundColor: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 35
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: 30
    },
    imgPokemon: {
        backgroundColor: 'white',
        width: 'inherit',
        height: 350
    },
    nameContainer: {
        backgroundColor: 'inherit',
        display: 'flex',
        flexDirection: 'row',
        height: 60
    },
    titlePokemon: {
        marginTop: 'auto',
        fontSize: 38,
        color: 'black',
        fontWeight: 'bold',
    },
    infoPokemon: {
        paddingBottom: 20,
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
    },
    statItemContainer: {
        backgroundColor: 'inherit',
        display: 'flex',
        flexDirection: 'row'
    },
    statItemWrap: {
        backgroundColor: 'inherit'
    },
    statItem: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        paddingBottom: 5
    },
    chipContainer: {
        marginTop:'auto'
    },
    chip: {
     
    }
}));
