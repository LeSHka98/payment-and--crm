// libraries
import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

type BreadCrumbsProps = {
  breadCrumbs: Array<{ title:string, link: string }>
};
const shiftIndex = 1;

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ breadCrumbs }) => (
  <Breadcrumb>
    {breadCrumbs.map((crumb, index) => (
      <BreadcrumbItem
        key={crumb.title}
        active={index === (breadCrumbs.length - shiftIndex)}
        className="breadcrumb-item"
        href={crumb.link}
        tag={index === (breadCrumbs.length - shiftIndex) ? 'span' : 'a'}
      >
        {crumb.title}
      </BreadcrumbItem>
    ))}
  </Breadcrumb>
);

export default BreadCrumbs;
