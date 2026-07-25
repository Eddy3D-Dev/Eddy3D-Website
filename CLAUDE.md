# CLAUDE.md

Marketing/landing site for Eddy3D (MkDocs), served at https://www.eddy3d.com/ from the
`gh-pages` branch, which `deploy.yml` rebuilds **from `main`**. Public repo: Actions run
free here even when the org's private-repo CI billing is broken.

## Branch model — read before pushing

- **`dev` is the working branch**: land all changes here directly.
- **`main` is the published branch and it is protected**: direct pushes are rejected
  (GH013 "Changes must be made through a pull request"). Nothing on `dev` reaches the
  live site until a `dev → main` PR is merged (that merge triggers the gh-pages deploy).
- Publishing flow: push `dev` → `gh pr create --base main --head dev` → `gh pr merge --merge`
  → verify `curl -s https://www.eddy3d.com/download/ | grep <version>`.
- `prevent-main-into-dev.yml` guards the reverse direction — never merge `main` into `dev`.

## Release coupling

On every Eddy3D plugin release (see the main repo's `.claude/skills/release-eddy3d/SKILL.md`):

- `docs/download.md`: current-version line, stable-release table row, and the install
  link's `aria-label`.
- `docs/versions.md`: bump the top marker line and **add** a `### NEW.VER (Month D, YYYY)`
  changelog entry above the previous one (body from
  `gh release view v<NEW.VER> --repo Eddy3D-Dev/Eddy3D --json body`); keep old entries.
- Then the `dev → main` PR — the release is not done until it merges and the deploy runs.
