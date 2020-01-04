import React from 'react';

const sellerInfo = props =>(
<React.Fragment>
<h4>{props.seller.name}</h4>
<p>{props.seller.rating}</p>
</React.Fragment>

);

export default sellerInfo;