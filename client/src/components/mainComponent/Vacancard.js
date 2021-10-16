import * as React from 'react';
export default function ActionAreaCard(vacanprom) {
  return (


    <div className="job-overview-card shadow border-radius">
      <div className="job-card overview-card">
        <div className="overview-wrapper">
          <div className="overview-detail">
            <div className="job-card-title">{vacanprom.vacanprom.name}</div>
            <div className="job-card-subtitle">
              {vacanprom.vacanprom.employer.name}
            </div>
          </div>

        </div>
        <div className="job-overview-buttons">
          <a href={vacanprom.vacanprom.alternate_url} target="_blank">Перейти</a>
        </div>
      </div>
    </div>

  );
}
