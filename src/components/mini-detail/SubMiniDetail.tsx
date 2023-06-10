import React from 'react'

interface subMiniDetailProps {
  label?: string;
  value?: string;
}

const SubMiniDetail = ({ label, value }: subMiniDetailProps) => {
  return (
    <div style={{ display: 'flex', fontSize: '14px', marginBottom: '8px' }}>
        <span style={{ color: '#666666', marginRight: '10px' }}>{label}</span>
        <span>{value}</span>
    </div>
  )
}

export default SubMiniDetail;
