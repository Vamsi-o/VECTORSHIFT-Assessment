import { BaseNode } from './BaseNode';
import { inputConfig } from './config/input.config';

export const InputNode = ({ id, data }) => {
  return <BaseNode id={id} data={data} config={inputConfig} />;
};
