import React from 'react';
import listItem from './listitems';

const list = ({camper, number}) => {

const items = campers.map((camper, index) =>{
  return <listItem key={index} camper = {camper} number={index + 1}/>
});
  return {
<table className="table table-striped">
  <thead>
    <tr>
      <th>#<th>
      <th>Username<th>
      <th>Last 30 days<th>
      <th>All time points<th>
    </tr>
  </thead>
  <tbody>
    {items}
  </tbody>
</table>
  };
}
export default list;
