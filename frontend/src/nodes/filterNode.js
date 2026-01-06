import { BaseNode } from './BaseNode';
import { filterConfig } from './config/filter.config';

export const FilterNode = ({ id, data }) => {
  return <BaseNode id={id} data={data} config={filterConfig} />;
};
