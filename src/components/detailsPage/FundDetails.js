import React, {useEffect} from 'react';
import './fundDetails.css';
const FundDetails = ({ details }) => {
    
    useEffect(() => {
        document.title = details.name;
      });
    
  return (
    <div className='details-page'>
      <div className="detail-item">
        <label className="title">Fund Name</label>
        <div className='detail-row'>{details.name}</div>
      </div>
      <div className="detail-item">
        <label className="title">Category</label>
        <div className='detail-row'>{details.category}</div>
      </div>
      <div className="detail-item">
        <label className="title">Fund Type</label>
        <div className='detail-row'>{details.fund_type}</div>
      </div>
      <div className="detail-item">
        <label className="title">Returns</label>
        <div className='detail-row'>1 Year: {details.returns.year_1}</div>
        <div className='detail-row'>3 Year: {details.returns.year_3}</div>
        <div className='detail-row'>5 Year: {details.returns.year_5}</div>
      </div>
      <div className="detail-item">
        <label className="title">Nav on {details.nav.date}</label>
        <div className='detail-row'>{details.nav.nav}</div>
      </div>
    </div>
  );
};

export default FundDetails;
