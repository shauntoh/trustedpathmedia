# Standard Operating Procedure: Social Media Image Carousels

This guide provides the default instructions for processing and posting image carousels generated from Gamma.app for ToolNav.

## 1. Remove the Watermark (Crop)
When you export PNGs from Gamma, they include a "Made with Gamma" watermark at the bottom.
Run this script in your terminal to crop the bottom 60 pixels off all PNGs in a folder:

```python
import os
from PIL import Image

# 1. Change this to the folder where your Gamma PNGs are saved
input_dir = "/Users/shermin.lee/Downloads/Your-Gamma-Folder"
output_dir = input_dir + "-cropped"

os.makedirs(output_dir, exist_ok=True)
crop_amount = 60

for filename in sorted(os.listdir(input_dir)):
    if filename.endswith(".png"):
        img_path = os.path.join(input_dir, filename)
        img = Image.open(img_path)
        width, height = img.size
        cropped_img = img.crop((0, 0, width, height - crop_amount))
        output_path = os.path.join(output_dir, filename)
        cropped_img.save(output_path)
        print(f"Cropped {filename}")

print("All PNGs cropped successfully.")
```

## 2. Convert to Video (For TikTok/Reels)
If you prefer to post a video instead of a Photo Mode carousel, use this script to stitch the cropped PNGs into an MP4 video with a 0.5-second crossfade transition between slides.

```python
import os
from moviepy import ImageClip, concatenate_videoclips, vfx

# 1. Change this to your cropped images folder
input_dir = "/Users/shermin.lee/Downloads/Your-Gamma-Folder-cropped"
output_path = input_dir + "-video.mp4"

image_files = sorted([os.path.join(input_dir, f) for f in os.listdir(input_dir) if f.endswith(".png")])

clips = []
for i, img_path in enumerate(image_files):
    # Each slide shows for 3.5 seconds
    clip = ImageClip(img_path).with_duration(3.5)
    if i > 0:
        # Add a 0.5s crossfade to all clips except the first
        clip = clip.with_effects([vfx.CrossFadeIn(0.5)])
    clips.append(clip)

# Concatenate with crossfade overlap
video = concatenate_videoclips(clips, padding=-0.5, method="compose")
video.write_videofile(output_path, fps=24, codec="libx264")
print("Video created successfully.")
```

## 3. Posting on TikTok
**Format:** Upload the video (or use Photo Mode with the PNGs).
**Standard Caption Template:**
> [Engaging Hook/Question about the topic] 👇
> 
> Link in bio for the full playbook/review! 🔗
> 
> #TechTools #SaaS #AI #Productivity #ToolNav #[SpecificTopic]

## 4. Posting on X (Twitter)
**Format:** X only allows up to 4 images per post. If your carousel has 5 or 6 slides, you must select the 4 most impactful ones.
**Selection Strategy (The 4-Card Framework):**
1.  **Image 1 (The Hook):** Always include Slide 1. This grabs attention.
2.  **Image 2 (The Meat):** Pick the slide with the most valuable or surprising piece of information (e.g., Step 1 or the biggest "Pro").
3.  **Image 3 (The Proof/Action):** Pick a slide showing how it works or the final step.
4.  **Image 4 (The CTA):** Always include the final slide that tells them to click the link in your bio.

**Standard X Caption Template:**
> [Engaging Hook/Summary]
> 
> 🧵 Swipe through the cards below for the breakdown.
> 
> Read the full guide here: [Link to specific toolnav.io page]
