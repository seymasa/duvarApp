
      import {createRequire as __cjsCompatRequire} from 'module';
      const require = __cjsCompatRequire(import.meta.url);
      const __ESM_IMPORT_META_URL__ = import.meta.url;
    
import {
  mainNgcc
} from "../chunk-KH76E4BH.js";
import "../chunk-HMWNYAAE.js";
import {
  clearTsConfigCache
} from "../chunk-6CDTGQDE.js";
import "../chunk-UXC2H2UF.js";
import "../chunk-NESWWMC7.js";
import "../chunk-V6TOSKSY.js";
import {
  ConsoleLogger,
  LogLevel
} from "../chunk-5FZBUSFV.js";
import "../chunk-56O2PTWU.js";
import "../chunk-TYIM47SK.js";
import {
  NodeJSFileSystem,
  setFileSystem
} from "../chunk-4NRCP3Y6.js";
import "../chunk-OLV72TYD.js";
import "../chunk-XYNRD7NE.js";

// bazel-out/darwin_arm64-fastbuild/bin/packages/compiler-cli/ngcc/index.mjs
import { dirname, join } from "path";
import { fileURLToPath } from "url";
function process(options) {
  setFileSystem(new NodeJSFileSystem());
  return mainNgcc(options);
}
var containingDirPath = typeof __dirname !== "undefined" ? __dirname : dirname(fileURLToPath(__ESM_IMPORT_META_URL__));
var ngccMainFilePath = join(containingDirPath, "./main-ngcc.js");
export {
  ConsoleLogger,
  LogLevel,
  clearTsConfigCache,
  containingDirPath,
  ngccMainFilePath,
  process
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
//# sourceMappingURL=index.js.map
