#!/usr/bin/env bash
#
# convert_to_webp.sh
# Usage: ./convert_to_webp.sh [QUALITY]
#
# Defaults:
#   SOURCE_DIR=./img
#   OUTPUT_DIR=./img
#   QUALITY=80

#–– Parse args with defaults
SRC="./img"
OUT="./img"
Q="${1:-80}"

#–– Ensure cwebp is installed
if ! command -v cwebp &>/dev/null; then
    echo "Error: cwebp not found. Install the webp package and try again."
    exit 1
fi

#–– Make sure source folder exists
if [[ ! -d "$SRC" ]]; then
    echo "Error: Source directory '$SRC' not found."
    exit 1
fi

#–– Loop over JPG/PNG only (nullglob so non-matches yield nothing)
shopt -s nullglob
for img in "$SRC"/*.{jpg,jpeg,png}; do
    # strip path and extension, add .webp
    base=$(basename "$img")
    name="${base%.*}"
    target="$OUT/$name.webp"

    # Skip if .webp already exists
    if [[ -f "$target" ]]; then
        echo "Skipping $img — $name.webp already exists."
        continue
    fi

    echo "Converting $img → $target (quality=$Q)"
    cwebp "$img" -q "$Q" -o "$target"
done

echo "Done! Any new .webp files are in: $OUT"
