import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';

const Tables = (props) => {
  
  return(
    <MDBTable btn>
      <MDBTableHead columns={props.columns} />
      <MDBTableBody rows={props.rows} />
    </MDBTable>
  );
};

export default Tables;