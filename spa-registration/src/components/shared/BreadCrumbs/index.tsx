// libraries
import React from 'react';

type Props = {
  elements: string[]
};

const BreadCrumbs = ({ elements }: Props) => {
  const breadcrumbs = elements.map((el) => (
    <div key={el} className="crumb">
      <span className="crumb-text">{el}</span>
    </div>
  ));

  return (
    <div className="bread-crumbs">
      { elements.length ? breadcrumbs : null }
    </div>
  );
};

export default BreadCrumbs;
