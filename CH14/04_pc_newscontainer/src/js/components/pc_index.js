import React from 'react';
import PCHeader from './pc_header';
import PCfooter from './pc_footer';
import PCNewContainer from './pc_newscontainer';

export default class PCIndex extends React.Component {
  render(){
    return(
      <div>
        <PCHeader></PCHeader>
        <PCNewContainer></PCNewContainer>
        <PCfooter></PCfooter>
      </div>
    );
  };
}