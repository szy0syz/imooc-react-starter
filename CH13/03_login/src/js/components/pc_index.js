import React from 'react';
import PCHeader from './pc_header';
import PCfooter from './pc_footer';

export default class PCIndex extends React.Component {
  render(){
    return(
      <div>
        <PCHeader></PCHeader>
        <PCfooter></PCfooter>
      </div>
    );
  };
}