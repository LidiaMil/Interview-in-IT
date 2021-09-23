import * as React from 'react';
export default function ActionAreaCard(vacanprom) {
  console.log(vacanprom.vacanprom.type)
  return (
<div className="job-overview-card">
       <div className="job-card overview-card">
        <div className="overview-wrapper">
           <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
          <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" /></svg>
         <div className="overview-detail">
          <div className="job-card-title">{vacanprom.vacanprom.name}</div>
          <div className="job-card-subtitle">
          {vacanprom.vacanprom.employer.name}
          </div>
         </div>
         {/* <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart">
          <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" /></svg> */}
        </div>
        <div className="job-overview-buttons">
         <div className="search-buttons time-button">Full Time</div>
         {/* <div className="search-buttons level-button">Senior Level</div>
         <div className="job-stat">New</div>
         <div className="job-day">4d</div> */}
        </div>
       </div>
      </div>
      
// {/* <a href = {vacanprom.vacanprom.alternate_url}>{vacanprom.vacanprom.name}</a> */}
  );
}
