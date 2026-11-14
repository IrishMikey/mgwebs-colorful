#!/bin/sh
set -e

if LC_ALL=C.UTF-8 grep -rnP "[\x{2014}\x{2013}]" app components lib \
  --include=*.ts --include=*.tsx --include=*.md --include=*.mdx --include=*.json; then
  echo "Em or en dash found above. Replace with a full stop, comma, colon or brackets. See agents/plan.md section 1." >&2
  exit 1
fi

echo "lint:dashes OK: no em or en dashes found."
