import axios from 'axios';

export default (code, langId,input) => {
  const payload = {
    code:code,
    langId:langId,
    input:input
  };
  return dispatch => {
    const url = 'REPLACETHISWITHVALIDAPI';
    axios.post(
      url,
      payload
    ).then(response => {
      dispatch({
        type: 'CODE_EVALUATION_SUCCESS',
        payload: response.data
      });
    }).catch(error => {
      console.log(error);
    });
  };
};
