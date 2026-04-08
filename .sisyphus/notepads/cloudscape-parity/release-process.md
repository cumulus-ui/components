# Release Process

## Steps
1. Bump version in components: `npm version minor --no-git-tag-version`
2. Build: `npm run build`
3. Commit + push via gh-push
4. Create GitHub release: `gh release create vX.Y.Z`
5. **STOP** — automation handles the rest:
   - npm publish (triggered by release)
   - docs dependency bump (repository_dispatch → github-actions[bot])
   - docs deploy

## DO NOT
- Manually bump docs dependency — the release chain does this
- Push to docs repo after a components release — causes duplicate commits
