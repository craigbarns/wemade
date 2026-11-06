import React from 'react';
import { HelpCircle, ArrowDown, ChevronLeft, ChevronRight, ListFilter, ChevronDown } from 'lucide-react';
import './IndexingReasonsTable.css';

const ExclamationCircle = ({ className }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="10" fill="#5F7381"/>
    <path d="M10 5V11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="10" cy="14" r="1" fill="white"/>
  </svg>
);

const ClockCircle = ({ className }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9" stroke="#80868B" strokeWidth="2"/>
    <path d="M10 5V10L13 13" stroke="#80868B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckCircle = ({ className }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9" stroke="#80868B" strokeWidth="2"/>
    <path d="M6 10.5L8.5 13L14 7" stroke="#80868B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Sparkline = ({ points }) => (
  <svg width="60" height="15" viewBox="0 0 60 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d={points} stroke="#80868B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IndexingReasonsTable = () => {
  const data = [
    {
      raison: "Autre page avec balise canonique correcte",
      source: "Site Web",
      validationIcon: <ExclamationCircle />,
      validationText: "Échec",
      validationClass: "status-echec",
      tendance: "M0 10 H35 C40 10, 42 2, 45 2 H60",
      pages: 19,
      isBold: false
    },
    {
      raison: "Page avec redirection",
      source: "Site Web",
      validationIcon: <ExclamationCircle />,
      validationText: "Échec",
      validationClass: "status-echec",
      tendance: "M0 10 H35 C40 10, 42 2, 45 2 H60",
      pages: 10,
      isBold: false
    },
    {
      raison: "Explorée, actuellement non indexée",
      source: "Systèmes Google",
      validationIcon: <ExclamationCircle />,
      validationText: "Non commencé",
      validationClass: "status-non-commence",
      tendance: "M0 10 H25 L28 8 L32 10 H45 C48 10, 50 12, 53 10 H60",
      pages: 2,
      isBold: true
    },
    {
      raison: "Page en double : Google n'a pas choisi la même URL canonique que l'utilisateur",
      source: "Systèmes Google",
      validationIcon: <ClockCircle />,
      validationText: "Commencé",
      validationClass: "status-commence",
      tendance: "M0 10 H60",
      pages: 2,
      isBold: false
    },
    {
      raison: "Détectée, actuellement non indexée",
      source: "Systèmes Google",
      validationIcon: <CheckCircle />,
      validationText: "Réussi",
      validationClass: "status-reussi",
      tendance: "M0 10 H30 L32 2 L35 10 H42 C45 10, 47 12, 50 10 H60",
      pages: 7,
      isBold: false
    }
  ];

  return (
    <div className="indexing-table-container">
      <div className="indexing-table-header-top">
        <div className="indexing-title-section">
          <div className="info-icon-large">i</div>
          <div className="indexing-title-text">
            <h2>Pourquoi des pages ne sont pas indexées</h2>
            <p>Les pages non indexées ne peuvent pas être diffusées sur Google</p>
          </div>
        </div>
        <button className="filter-btn">
          <ListFilter />
        </button>
      </div>

      <div className="indexing-table-wrapper">
        <table className="indexing-table">
          <thead>
            <tr>
              <th className="col-raison">Raison</th>
              <th className="col-source">
                <div className="th-content">
                  Source
                  <HelpCircle className="th-icon" />
                </div>
              </th>
              <th className="col-validation">
                <div className="th-content">
                  Validation
                  <ArrowDown className="th-icon" size={14} />
                </div>
              </th>
              <th className="col-tendance">Tendance</th>
              <th className="col-pages">Pages</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={row.isBold ? "row-bold" : ""}>
                <td className="col-raison">{row.raison}</td>
                <td className="col-source">{row.source}</td>
                <td className="col-validation">
                  <div className="status-cell">
                    {row.validationIcon}
                    <span className={row.validationClass}>{row.validationText}</span>
                  </div>
                </td>
                <td className="col-tendance">
                  <Sparkline points={row.tendance} />
                </td>
                <td className="td-pages">{row.pages}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="indexing-table-footer">
        <div className="pagination-controls">
          <div className="rows-per-page">
            Lignes par page :
            <div className="rows-dropdown">
              10
              <ChevronDown />
            </div>
          </div>
          <div>1-5 sur 5</div>
        </div>
        <div className="page-arrows">
          <button className="page-arrow" disabled>
            <ChevronLeft />
          </button>
          <button className="page-arrow" disabled>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndexingReasonsTable;
