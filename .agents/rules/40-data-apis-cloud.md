---
activation: model_decision
description: >
  Apply when designing or modifying REST/GraphQL APIs, database schemas,
  migrations, Docker/container configuration, CI/CD pipelines, or cloud
  infrastructure/configuration.
---

# APIs, Data, Docker & CI/CD

## API Design

- Match existing API conventions before introducing changes:
  - Request and response naming.
  - Validation approach.
  - Pagination/filtering patterns.
  - Error response structure.
  - Authentication and authorization flow.

- Do not silently break existing API contracts.
  - Introduce explicit versioning or migration strategy for breaking changes.
  - Confirm affected consumers before changing public contracts.

- Validate external input at the API boundary.
  - Reject invalid data early.
  - Keep business rules inside the appropriate application/domain layer.

- Avoid exposing internal implementation details:
  - Database entities.
  - Stack traces.
  - Internal identifiers unless intentionally part of the contract.

## Database & Migrations

- Before changing database structure:
  - Review existing schema and usage.
  - Identify affected queries, services, and consumers.
  - Confirm whether migration is required.

- Migrations should be:
  - Reversible where practical.
  - Minimal and scoped to the requirement.
  - Reviewed carefully before applying.

- Explicit approval is required before:
  - Dropping tables or columns.
  - Removing data.
  - Changing data types in a way that may lose information.
  - Running migrations against staging/production databases.

- Never run database migrations against non-local environments unless explicitly requested.

- Avoid inefficient data access patterns:
  - Check for N+1 queries.
  - Avoid unnecessary full-table scans.
  - Add indexes when introducing new high-volume query patterns and document the reason.

## Docker & Containers

- Keep container builds reproducible:
  - Prefer pinned base image versions when stability matters.
  - Avoid relying on floating `latest` tags for production workloads.

- Use multi-stage builds where appropriate:
  - Keep runtime images smaller.
  - Exclude build tools and unnecessary dependencies.

- Never store secrets inside:
  - Dockerfiles.
  - Image layers.
  - Build arguments committed to source control.
  - Container configuration files.

- Use environment variables or approved secret-management systems for runtime secrets.

## CI/CD

- Keep pipeline changes focused:
  - Modify only what is required for the task.
  - Do not restructure pipelines during unrelated changes.

- Store secrets only in approved CI/CD secret stores.
  - Never commit tokens, API keys, passwords, or credentials.

- Preserve existing build and deployment workflows unless the task explicitly requires changing them.

- Verify pipeline changes before completion:
  - Confirm affected jobs.
  - Check configuration syntax.
  - Validate that required permissions and secrets are available.

## General Rules

- Investigate existing patterns before introducing new infrastructure, API styles, database approaches, or deployment methods.

- Prefer simple, maintainable solutions over unnecessary abstractions.

- Record unrelated improvements as follow-up suggestions instead of expanding the current scope.