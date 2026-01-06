import { BaseNode } from './BaseNode';
import { transformConfig } from './config/transform.config';

export const TransformNode = ({ id, data }) => {
  return <BaseNode id={id} data={data} config={transformConfig} />;
};
