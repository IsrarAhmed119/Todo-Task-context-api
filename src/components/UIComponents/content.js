import React from 'react';
import Typography from '@material-ui/core/Typography';
import Todos from './Todos';


const Content = (props) => {

    // console.log('Content--->>',props)


    return (
    <>
        {/* <Typography variant="h6" gutterBottom>
                  Todos here...
        </Typography> */}

        <Todos/>
    </>
    );
}
 
export default Content;