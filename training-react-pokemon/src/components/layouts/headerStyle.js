import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    width: 100,
    marginRight: 20,
  },
  nav: {
    backgroundColor: 'black',
  },
  containerNav: {    
    flexDirection:'row',
    alignSelf: 'center'
  },
}));