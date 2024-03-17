# @cyrilolanolan/bluesight-dto

The shared library for all the DTOs in the exposed API endpoints. This is used to make sure that the types and data structure in both frontend and backend are synchronized.

## 🏁 Get Started

### ⚙️ Running in Development Mode

If you are making active changes to the library, and you want the changes to be applied immediately, run the `dev` mode. All the file changes would be detected and will be compiled incrementally.

Assuming you are in the bluesight root directory:

```bash
pnpm dev:dto
```

or if you are in libs/dto directory:

```bash
pnpm dev
```

### 🛠️ Installation

1. Add this to the `devDependencies` in the `package.json` of your project.

   ```json
   {
     "devDependencies": {
       "@cyrilolanolan/bluesight-dto": "workspace:*"
     }
   }
   ```

   For more information about PNPM workspace protocol, [refer to the documentation](https://pnpm.io/workspaces).

2. Use the module.
   ```javascript
   import { SampleType } from '@cyrilolanolan/bluesight-dto';
   ```
