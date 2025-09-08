# Contributing / Working Agreement

## Branching Strategy
- `main` is always stable and deployable.
- Create a branch **per issue**:
  - `feature/<short-name>` e.g. `feature/login-form`
  - `bugfix/<short-name>` e.g. `bugfix/navbar-overlap`
  - `docs/<short-name>` e.g. `docs/readme-polish`

## Conventional Commits
- `feat:` new user-facing feature
- `fix:` bug fix
- `docs:` documentation-only changes
- `style:` formatting, missing semi colons, etc.
- `refactor:` neither fixes a bug nor adds a feature
- `perf:` performance improvement
- `test:` adding or fixing tests
- `chore:` build tools or housekeeping

**Examples**
- `feat: add email/password validation to login form`
- `fix: correct flex layout on mobile navbar`
- `docs: update README with setup instructions`

## Daily Routine (Mandatory)
1. **Pull latest**: `git pull origin main`
2. **Pick ONE issue** from GitHub Issues.
3. **Create/checkout branch** for that issue.
4. **Work in small steps**, commit frequently with clear messages.
5. **Push** your branch at least once per day.
6. Update **daily-log.md** (plan → complete → blockers).
7. If done, open a **Pull Request** (PR) to `main` using the PR template.

## Definition of Done (DoD) for an Issue
- [ ] Code compiles / runs.
- [ ] Meets acceptance criteria.
- [ ] Self-tested (describe how in PR).
- [ ] Screenshots / GIF (if UI) added to PR.
- [ ] Docs updated (README or docs/* if needed).
- [ ] Linked Issue closed by PR.

## Review & Merge
- Use the PR template checklist.
- Another person (mentor/peer) reviews OR you do a **self-review** using the checklist before merge.
- **Squash & merge** preferred for clean history.
