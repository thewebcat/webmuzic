import React from 'react'

const Tags = ({tags}) => (
    tags ? <ul className="mb-0">{tags.map((tag, i) => <li key={i} className="d-inline-block pr-1" style={{color: tag.color}}>{tag.name}</li> )}</ul> : ''
);
export default Tags