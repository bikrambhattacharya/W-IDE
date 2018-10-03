import React ,{Component} from 'react';
import Proptypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
const languages = [
    {
      value: '4',
      label: 'C (gcc 7.2.0)',
    },
    {
      value: '10',
      label: 'C++ (g++ 7.2.0)',
    },
    {
      value: '27',
      label: 'Java (OpenJDK 8)',
    },
    {
      value: '35',
      label: 'Python (3.5.3)'
    },
  ];
class Ide extends Component{
    constructor(props){
        super(props);
        this.state={
            code:'//Enter your code here :)',
            lang: '4',
            input:''
        }
        this.handleChange= this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleLangChange= this.handleLangChange.bind(this);
        this.handleInputChange= this.handleInputChange.bind(this);
    }
handleChange(e)
{
    this.setState({
        code:e.target.value
    })
}
handleClick()
{
    this.props.handleCheck(this.state.code,this.state.lang,this.state.input);
}
handleLangChange (e) {
    this.setState({
      lang: e.target.value
    })
  };
  handleInputChange(e){
      this.setState({
          input:e.target.value
      })
  }

    render(){
        const {classes} = this.props;
        return(
            <div className={classes.wrapper}>
            <textarea spellCheck="false" rows="20" className={classes.textarea} value={this.state.code} onChange={this.handleChange}/>
           <br /> <Button onClick={this.handleClick} className={classes.button}> 
                    Compile and run
                    </Button>
                    <TextField
                            id="select-currency"
                            select
                            label="Select"
                            className={classes.textField}
                            value={this.state.lang}
                            SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                             },
                            }}
                            onChange={this.handleLangChange}
                            helperText="Please select your language"
                            margin="normal"
                        >
                         {languages.map(option => (
                           <MenuItem key={option.value} value={option.value}>
                             {option.label}
                           </MenuItem>
                            ))}
                        </TextField>
            <div className={classes.flex}>
                <Card className={classes.cardOutput}>
                <CardContent>
                    <Typography className={classes.title} color="textPrimary">
                         Output:
                    </Typography>
                    <br/>
                    {
                        this.props.Compiler
                        ?this.props.Compiler:this.props.Result ?this.props.Result
                        :"Your program output will be shown here"
                        }
                </CardContent>
                </Card>
                <Card className={classes.cardInput}>
                <CardContent>
                    <Typography className={classes.title} color="textPrimary">
                         Input:
                    </Typography>
                    <textarea className={classes.inputarea} spellCheck="false" value={this.state.input} onChange={this.handleInputChange}/>
                </CardContent>
                </Card>
            </div>
            </div>
        )
    }
}

const styles = () =>({
    wrapper:{
        paddingLeft:'5px',
        paddingRight:'15px',
        paddingBottom:'10px',
        paddingTop:'10px'
    },
    button:{
        backgroundColor:'black',
        color:'white',
        borderRadius:'5px',
        border:'none',
        '&:hover':{
            backgroundColor:'black',
            color:'white',
            border:'none',
            borderRadius:'5px'
        },
        '&:active':{
            backgroundColor:'black',
            color:'white',
            border:'none',
            borderRadius:'5px'
        }

    },
    textarea:{
        width:'calc(100%)',
        border:'2px solid black',
        borderRadius:'2px',
        resize: 'none',
        '&:active':
        {
            borderRadius:'2px'
        }
    },
    flex:{
        display:'flex'
    },
    cardOutput:{
        width:'calc(60%)',
        minHeight:'150px',
        boxShadow:'none'
    },
    cardInput:{
        width:'calc(40%)',
        minHeight:'150px',
        boxShadow:'none'
    },
    inputarea:{
        width:'calc(100%)',
        resize: 'none',
        borderRadius:'2px',
        minHeight:'100px'
    },
    textField:{
        marginLeft:'10px'
    }
    
})
Ide.defaultProps = {
    Result:"",
    Compiler:""
}
Ide.propTypes = {
    handleCheck: Proptypes.func.isRequired,
    Result:Proptypes.string,
    Compiler:Proptypes.string
}
export default withStyles(styles)(Ide);
