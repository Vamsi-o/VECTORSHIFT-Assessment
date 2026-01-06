import { BaseNode } from './BaseNode';
import { delayConfig } from './config/delay.config';

export const DelayNode = ({ id, data }) => {
  return <BaseNode id={id} data={data} config={delayConfig} />;
};
