import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//Relative Imports

import Ide from '../component/IdeComponent';
import evalCode from '../../../modules/Eval-code/actions/evaluate_code';

class IdeContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            abc : ''
        }
        this.handleCheck = this.handleCheck.bind(this);
    }
    handleCheck(sourcecode,lang,input)
    {
        this.props.evalCode(sourcecode,lang,input);
    }
    render(){
        return(
            <div>
                <Ide handleCheck={this.handleCheck} Result={this.props.Result} Compiler={this.props.Compiler} />
            </div>
        )
    }
}
IdeContainer.defaultProps ={
    Result:"",
    Compiler:""
}
IdeContainer.propTypes = {
    evalCode: PropTypes.func.isRequired,
    Result:PropTypes.string,
    Compiler:PropTypes.string
}

const mapStateToProps = (state) =>{
    return{
        Result: state.ide.Result,
        Compiler: state.ide.Compiler
    }
}
export default connect(mapStateToProps, {evalCode})(IdeContainer);