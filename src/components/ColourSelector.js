import React from 'react';
import '../styles/Child.css'

const ColourSelector = ({ config, selectNextBackground }) => {
  const { background, label, classname } = config;
  
  return (
    <button 
      className={classname} 
      data-testid = {config.key}
      onClick={() => selectNextBackground({background: background})}>
      {label}
    </button>
  )
}
export default ColourSelector;

