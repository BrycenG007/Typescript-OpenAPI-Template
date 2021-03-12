import path from "path";
import prettier from "prettier";
import { swaggerVersion } from "./utils";
import { transformAll } from "./transform/index";
import { OpenAPI2, OpenAPI3, SchemaObject, SwaggerToTSOptions } from "./types";
export * from "./types"; // expose all types to consumers

export const WARNING_MESSAGE = `/**
* This file was auto-generated by openapi-typescript.
* Do not make direct changes to the file.
*/


`;

export default function swaggerToTS(
  schema: OpenAPI2 | OpenAPI3 | Record<string, SchemaObject>,
  options?: SwaggerToTSOptions
): string {
  // 1. determine version
  const version = (options && options.version) || swaggerVersion(schema as OpenAPI2 | OpenAPI3);

  // 2. generate output
  let output = `${WARNING_MESSAGE}
  ${transformAll(schema, { version, rawSchema: options && options.rawSchema })}
`;

  // 3. Prettify output
  let prettierOptions: prettier.Options = { parser: "typescript" };
  if (options && options.prettierConfig) {
    try {
      const userOptions = prettier.resolveConfig.sync(path.resolve(process.cwd(), options.prettierConfig));
      prettierOptions = {
        ...prettierOptions,
        ...userOptions,
      };
    } catch (err) {
      console.error(`❌ ${err}`);
    }
  }
  return prettier.format(output, prettierOptions);
}
