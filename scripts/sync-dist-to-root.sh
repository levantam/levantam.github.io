#!/usr/bin/env bash
# Copy Vite build output to repository root for GitHub Pages (master / root).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ ! -d dist ]]; then
  echo "dist/ not found. Run npm run build first." >&2
  exit 1
fi

copy_path() {
  local name="$1"
  if [[ ! -e "dist/$name" ]]; then
    return 0
  fi
  rm -rf "./$name"
  cp -a "dist/$name" "./$name"
}

for name in \
  404.html \
  assets \
  certificates \
  companies \
  data \
  profile \
  resume \
  favicon-32.png \
  favicon.ico \
  favicon.png \
  favicon.svg \
  index.html \
  logo.png \
  logo192.png \
  logo512.png \
  manifest.json \
  robots.txt
do
  copy_path "$name"
done

touch .nojekyll
echo "Synced dist/ → repo root (GitHub Pages). Dev entry remains index.vite.html."
