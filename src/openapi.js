import { zodToJsonSchema } from 'zod-to-json-schema';
import { toolDefinitions } from './tools.js';

export function generateOpenApiSpec() {
  const tools = toolDefinitions();
  const paths = {};

  for (const tool of tools) {
    paths[`/api/tools/${tool.name}`] = {
      post: {
        operationId: tool.name,
        summary: tool.name,
        description: tool.description,
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: zodToJsonSchema(tool.schema)
            }
          }
        },
        responses: {
          '200': {
            description: 'Success',
            content: {
              'application/json': {
                schema: { type: 'object' }
              }
            }
          }
        }
      }
    };
  }

  return {
    openapi: '3.1.0',
    info: {
      title: 'SocialOS Custom Action API',
      version: '1.0.0',
      description: 'API for SocialOS ChatGPT Custom Action.'
    },
    servers: [
      {
        url: 'https://YOUR_NGROK_URL.ngrok.app',
        description: 'Replace with your actual public URL'
      }
    ],
    paths
  };
}
