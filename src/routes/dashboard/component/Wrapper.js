import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//Relative Imports 
import IdeContainer from '../container/IdeContainer';
  
const Wrapper=(props)  =>{
    const {classes} = props;
    return(
        <div>
           <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={classes.grow}>
                            W-IDE 
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <IdeContainer/>
            <footer>
                <center>
                    <p>Bikram Bhattacharya &copy; 2018</p>
                </center>
            </footer>
        </div>
    )
}


const styles = () =>({
    appBar:{
        backgroundColor:'black'
    },
    root: {
        flexGrow: 1,
      },
      grow: {
        flexGrow: 1,
      },
      textField:{
          color:'white',
          height:'10px'
      }
})
export default withStyles(styles)(Wrapper);