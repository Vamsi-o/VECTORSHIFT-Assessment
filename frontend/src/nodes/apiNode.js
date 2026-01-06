import { BaseNode } from './BaseNode';
import { apiConfig } from './config/api.config';

export const APINode = ({ id, data }) => {
  return <BaseNode id={id} data={data} config={apiConfig} />;
};
