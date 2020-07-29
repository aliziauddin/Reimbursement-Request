import React,{Component} from 'react';
import Tables from '../../components/Tables/Tables';
import {MDBBtn} from 'mdbreact'

class userhome extends Component{

  state = {
    columns :[
      {
        label: '#',
        field: 'id',
        sort: 'asc'
      },
      {
        label: 'First',
        field: 'first',
        sort: 'asc'
      },
      {
        label: 'Last',
        field: 'last',
        sort: 'asc'
      },
      {
        label: 'Handle',
        field: 'handle',
        sort: 'asc'
      }
    ],

    rows : [
      {
        'id': 1,
        'first': <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        'last': 'Otto',
        'handle': '@mdo'
      },
      {
        'id': 2,
        'first': 'Jacob',
        'last': <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        'handle': '@fat'
      },
      {
        'id': 3,
        'first': 'Larry',
        'last': 'the Bird',
        'handle': <MDBBtn color="purple" size="sm">Button</MDBBtn>
      }
    ]
  }
 
  render ()
  {
    return(
      <div>
        <Tables
        columns = {this.state.columns}
        rows  ={this.state.rows}
        />
      </div>
    );
  }
  
}
export default userhome;