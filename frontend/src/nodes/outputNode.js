
import { BaseNode } from './BaseNode';
import { outputConfig } from './config/utput.config';

export const OutputNode = ({ id, data }) => {
  return <BaseNode id={id} data={data} config={outputConfig} />;
};

