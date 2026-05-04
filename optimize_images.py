"""
Image Optimization Script
=========================
Converts .png, .jpg, and .jpeg images to .webp format using Pillow.
Preserves the original directory structure in the output folder.

Usage:
    python optimize_images.py [--source SRC_DIR] [--output OUT_DIR] [--quality Q]

Defaults:
    --source  src/assets
    --output  src/assets_optimized
    --quality 80
"""

import argparse
import sys
from pathlib import Path

from PIL import Image


# File extensions to process (case-insensitive matching via Path.suffix.lower())
SUPPORTED_EXTENSIONS = {".png", ".jpg", ".jpeg"}


def optimize_image(src_path: Path, dest_path: Path, quality: int) -> dict:
    """
    Open an image, convert it to WebP, and save it to dest_path.

    Returns a dict with source size, destination size, and savings info.
    Raises on any Pillow or I/O error.
    """
    src_size = src_path.stat().st_size

    with Image.open(src_path) as img:
        # Convert palette / RGBA images appropriately
        if img.mode in ("RGBA", "LA") or (
            img.mode == "P" and "transparency" in img.info
        ):
            img = img.convert("RGBA")
        else:
            img = img.convert("RGB")

        dest_path.parent.mkdir(parents=True, exist_ok=True)
        img.save(dest_path, format="WEBP", quality=quality)

    dest_size = dest_path.stat().st_size
    saved = src_size - dest_size
    pct = (saved / src_size * 100) if src_size > 0 else 0.0

    return {
        "src_size": src_size,
        "dest_size": dest_size,
        "saved": saved,
        "pct": pct,
    }


def human_size(num_bytes: int) -> str:
    """Return a human-readable file-size string."""
    for unit in ("B", "KB", "MB", "GB"):
        if abs(num_bytes) < 1024:
            return f"{num_bytes:.1f} {unit}"
        num_bytes /= 1024
    return f"{num_bytes:.1f} TB"


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Optimize images by converting them to WebP format."
    )
    parser.add_argument(
        "--source",
        type=str,
        default="src/assets",
        help="Source directory containing images (default: src/assets)",
    )
    parser.add_argument(
        "--output",
        type=str,
        default="src/assets_optimized",
        help="Output directory for optimized images (default: src/assets_optimized)",
    )
    parser.add_argument(
        "--quality",
        type=int,
        default=80,
        help="WebP quality setting, 1-100 (default: 80)",
    )
    args = parser.parse_args()

    source_dir = Path(args.source).resolve()
    output_dir = Path(args.output).resolve()
    quality = args.quality

    # ── Validation ──────────────────────────────────────────────────────
    if not source_dir.is_dir():
        print(f"ERROR: Source directory not found: {source_dir}")
        sys.exit(1)

    if quality < 1 or quality > 100:
        print(f"ERROR: Quality must be between 1 and 100 (got {quality})")
        sys.exit(1)

    # Collect all matching images
    images = sorted(
        p
        for p in source_dir.rglob("*")
        if p.is_file() and p.suffix.lower() in SUPPORTED_EXTENSIONS
    )

    if not images:
        print(f"No .png / .jpg / .jpeg images found in {source_dir}")
        sys.exit(0)

    print(f"Source      : {source_dir}")
    print(f"Output      : {output_dir}")
    print(f"Quality     : {quality}")
    print(f"Images found: {len(images)}")
    print("-" * 70)

    # ── Processing ──────────────────────────────────────────────────────
    total_src = 0
    total_dest = 0
    success_count = 0
    error_count = 0

    for img_path in images:
        # Preserve sub-directory structure, but change extension to .webp
        relative = img_path.relative_to(source_dir)
        dest_path = output_dir / relative.with_suffix(".webp")

        try:
            result = optimize_image(img_path, dest_path, quality)
            total_src += result["src_size"]
            total_dest += result["dest_size"]
            success_count += 1

            status = (
                f"  [OK] {relative}  ->  {relative.with_suffix('.webp')}  "
                f"({human_size(result['src_size'])} -> {human_size(result['dest_size'])}, "
                f"-{result['pct']:.1f}%)"
            )
            print(status)

        except Exception as exc:
            error_count += 1
            print(f"  [FAIL] {relative}  -- ERROR: {exc}")

    # ── Summary ─────────────────────────────────────────────────────────
    print("-" * 70)
    print(f"Completed: {success_count} converted, {error_count} errors")
    if success_count > 0:
        total_saved = total_src - total_dest
        pct_saved = (total_saved / total_src * 100) if total_src > 0 else 0
        print(
            f"Total size : {human_size(total_src)} -> {human_size(total_dest)}  "
            f"(saved {human_size(total_saved)}, -{pct_saved:.1f}%)"
        )


if __name__ == "__main__":
    main()
