import { BaseNode } from './BaseNode';
import { llmConfig } from './config/llm.config';

export const LLMNode = ({ id, data }) => {
  return <BaseNode id={id} data={data} config={llmConfig} />;
};
