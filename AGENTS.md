<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Rules

- The hero world map is pre-generated static data rendered as inline SVG (`src/components/WorldMap.tsx`); never fetch geography or run a map library at render time.
- Chef portraits are CDN asset pointers under `src/assets/chefs/` imported by `src/routes/index.tsx`; swap a portrait by uploading a new file to the same pointer filename, never by hand-editing the URL inside the pointer.
- Keep compact phone-only presentation below the sm breakpoint, with a two-column e-book grid and condensed informational rows; preserve desktop composition and keep unique content accessible.
