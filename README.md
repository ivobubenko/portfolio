# 💼 Portfolio

Personal portfolio built with React, TypeScript, and Vite. The site is served through CloudFront from a private S3 bucket; AWS CloudFormation manages the infrastructure.

## 🛠️ Local development

Install dependencies and start the Vite development server:

```bash
npm ci
npm run dev
```

Before opening a pull request, check the code with `npm run lint` and `npm run build`.

## 🗂️ Repository structure

| Path                             | What lives there                                    |
| -------------------------------- | --------------------------------------------------- |
| `src/`                           | React app, styles, and theme                        |
| `src/components/`, `src/layout/` | Page sections and shared layout                     |
| `src/i18n/`                      | English and Slovak content                          |
| `src/assets/`, `public/`         | Images and static files                             |
| `cloud_infrastructure/`          | CloudFormation template shared by both environments |
| `.github/workflows/`             | Code checks and deployment workflows                |

## 🚀 Environments and deployment

| Branch | GitHub environment | Site                                                      |
| ------ | ------------------ | --------------------------------------------------------- |
| `dev`  | `dev`              | [🧪 Development site](https://d2yqc7kwqij02v.cloudfront.net) |
| `main` | `prod`             | [🌐 Production site](https://d1iow15lsokf9h.cloudfront.net)  |

Both environments use the same app code and CloudFormation template. Configure separate AWS roles, stack names, domains, and certificates in their GitHub environments.

On a push to `dev` or `main`, `main.yaml` checks what changed. It calls `infrastructure.yaml` to deploy the CloudFormation stack when infrastructure changes, then calls `website.yaml` to build the site, sync it to the stack's S3 bucket, and invalidate CloudFront. Site changes alone deploy only the website; infrastructure changes also redeploy the website after the stack succeeds.

Each GitHub environment needs `INFRA_ROLE_ARN`, `S3CF_ROLE_ARN`, `CFN_ROLE`, `STACK_NAME`, and `DOMAIN_NAME` as variables, plus `ACM_ARN` as a secret. Deployments use AWS OIDC authentication in `eu-central-1`.
