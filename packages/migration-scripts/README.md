
## Migration Scripts

Located in `/scripts`, these node scripts will perform various tasks to re-arrange files and lines within files to be compatible with docusaurus.

`migrate-components.js` moves react components from `src/components` in the source repo to `src/components` in this repo, updating the import paths.

`migrate-content.js` walks the `src/pages` directory in the source repo, moving imports from  `prependJS` in frontMatter into the body of the markdown, replacing `{{` and `}}` syntax used around components, and other transformations necessary for compatibility with docusaurus.

`node migrate-content ~/Sites/some-repo/src/pages ./src/docs`

`consolidate-split-pages` consolidates docs pages that batfish would combine into a single markdown file.  These pages have `splitPage: true` in the frontMatter in the source repo and live in `{page-path}/section/{split-page}.md`

