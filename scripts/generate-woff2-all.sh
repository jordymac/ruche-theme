#!/bin/bash
set -e

# Convert all fonts under assets/fonts to woff2
cd "$(dirname "$0")/.."

# Function to convert a font file to woff2
convert_to_woff2() {
  local input="$1"
  local ext="${input##*.}"
  local dir="$(dirname "$input")"
  local base="$(basename "$input" .$ext)"
  local name="${base%.*}"  # Remove any remaining extension
  local output="$dir/$name.woff2"

  if [ -f "$output" ]; then
    echo "SKIP (exists): $output"
    return
  fi

  if [ "$ext" = "otf" ]; then
    # Convert OTF to TTF first, then to WOFF2
    local ttf_temp="$dir/$base.temp.ttf"
    echo "Converting $input -> $ttf_temp -> $output"
    echo "Step 1: Converting OTF to TTF..."
    fontforge -lang=ff -c "Open('$input'); Generate('$ttf_temp')" 2>/dev/null
    if [ ! -f "$ttf_temp" ]; then
      echo "ERROR: Failed to create temporary TTF file"
      return 1
    fi
    echo "Step 2: Converting TTF to WOFF2..."
    woff2_compress "$ttf_temp"
    echo "Looking for woff2 file..."
    # The output includes .temp.woff2 not .temp.ttf.woff2
    local woff2_temp="$dir/$base.temp.woff2"
    if [ -f "$woff2_temp" ]; then
      echo "Found generated file at: $woff2_temp"
      mv "$woff2_temp" "$output"
      rm -f "$ttf_temp"
      return 0
    fi
    echo "ERROR: Could not find generated woff2 file at $woff2_temp"
    return 1
  else
    # Convert TTF directly to WOFF2
    echo "Converting $input -> $output"
    woff2_compress "$input"
    # Debug info
    echo "Looking for generated file..."
    ls -la "$dir"/*.woff2 || true
    # Try both potential output names
    if [ -f "$input.woff2" ]; then
      mv "$input.woff2" "$output"
    elif [ -f "$dir/$base.woff2" ]; then
      mv "$dir/$base.woff2" "$output"
    else
      echo "ERROR: Could not find generated woff2 file"
      exit 1
    fi
  fi

  echo "CREATED: $output"
}

# Process all font files
find assets/fonts -type f \( -name "*.otf" -o -name "*.ttf" \) | while read -r font; do
  convert_to_woff2 "$font"
done

echo "Done converting fonts to woff2"