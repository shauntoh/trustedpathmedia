# Standard Operating Procedure: Social Media Image Carousels

This guide provides the default instructions for processing and posting image carousels generated from Gamma.app for ToolNav.

## 1. The All-In-One Automation Script
To save time, use this single Python script. It will automatically:
1. Crop the "Made with Gamma" watermark off the bottom of all images.
2. Create a new incrementally numbered folder (e.g., `Post_001`, `Post_002`) inside `social_media_assets/`.
3. Stitch the cropped images into a smooth crossfade video.
4. Generate a `posting_instructions.txt` file inside the folder with your TikTok caption, hashtags, and X 4-card framework.
5. Move the original downloaded Gamma folder to your Mac's Trash.

**Note:** The `Post_XXX` folders are ignored by Git (`.gitignore`), so these heavy image and video files will NOT sync to your GitHub repository and won't bloat your codebase.

### How to use:
1. Download your PNGs from Gamma (unzip them if necessary).
2. Copy the path to that downloaded folder.
3. Paste it into the `input_dir` variable in the script below.
4. Run the script!

```python
import os
import shutil
from PIL import Image
from moviepy import ImageClip, concatenate_videoclips, vfx

# --- CONFIGURATION ---
# Change this to the folder you downloaded from Gamma
input_dir = "/Users/shermin.lee/Downloads/Your-Gamma-Folder"

# Do not change this
assets_dir = "/Users/shermin.lee/Desktop/Personal/TrustedPathMedia/social_media_assets"
# ---------------------

# 1. Determine next post number
os.makedirs(assets_dir, exist_ok=True)
existing_posts = [d for d in os.listdir(assets_dir) if d.startswith("Post_")]
next_num = len(existing_posts) + 1
post_folder_name = f"Post_{next_num:03d}"
output_dir = os.path.join(assets_dir, post_folder_name)
os.makedirs(output_dir, exist_ok=True)

# 2. Crop images and save to new folder
crop_amount = 60
image_files = []
for filename in sorted(os.listdir(input_dir)):
    if filename.endswith(".png"):
        img_path = os.path.join(input_dir, filename)
        img = Image.open(img_path)
        width, height = img.size
        cropped_img = img.crop((0, 0, width, height - crop_amount))
        output_path = os.path.join(output_dir, filename)
        cropped_img.save(output_path)
        image_files.append(output_path)
        print(f"Cropped {filename}")

# 3. Create Video
video_output_path = os.path.join(output_dir, f"{post_folder_name}_video.mp4")
clips = []
for i, img_path in enumerate(image_files):
    clip = ImageClip(img_path).with_duration(3.5)
    if i > 0:
        clip = clip.with_effects([vfx.CrossFadeIn(0.5)])
    clips.append(clip)

if clips:
    video = concatenate_videoclips(clips, padding=-0.5, method="compose")
    video.write_videofile(video_output_path, fps=24, codec="libx264")
    print("Video created successfully.")

# 4. Create Posting Instructions Text File
instructions_path = os.path.join(output_dir, "posting_instructions.txt")
with open(instructions_path, "w") as f:
    f.write("=== TIKTOK CAPTION ===\n")
    f.write("[Insert Hook/Question Here] 👇\n\n")
    f.write("Link in bio for the full playbook/review! 🔗\n\n")
    f.write("#TechTools #SaaS #AI #Productivity #ToolNav\n\n")
    f.write("----------------------------------------\n\n")
    f.write("=== X (TWITTER) 4-CARD FRAMEWORK ===\n")
    f.write("X only allows 4 images. Select these 4 from the folder:\n")
    f.write("1. The Hook (Slide 1)\n")
    f.write("2. The Meat (Best value/step slide)\n")
    f.write("3. The Action (How it works/next step slide)\n")
    f.write("4. The CTA (Last slide with link in bio)\n\n")
    f.write("Caption (Must be under 280 characters):\n")
    f.write("[Insert Hook/Summary Here]\n\n")
    f.write("🧵 Swipe for the breakdown.\n\n")
    f.write("Full guide: [Link to toolnav.io]\n")

print("Posting instructions created.")

# 5. Move original folder to Trash
trash_dir = os.path.expanduser("~/.Trash")
try:
    shutil.move(input_dir, os.path.join(trash_dir, os.path.basename(input_dir)))
    print("Moved original folder to Trash.")
except Exception as e:
    print(f"Could not move to trash automatically: {e}")

print(f"\n✅ All done! Your files are ready in: {output_dir}")
```
