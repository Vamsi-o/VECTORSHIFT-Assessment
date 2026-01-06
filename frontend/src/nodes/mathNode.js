import { BaseNode } from './BaseNode';
import { mathConfig } from './config/math.config';

export const MathNode = ({ id, data }) => {
  return <BaseNode id={id} data={data} config={mathConfig} />;
};
