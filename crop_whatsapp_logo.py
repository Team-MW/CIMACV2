from PIL import Image

img_path = '/Users/elamine/Desktop/cimac-vitrine/WhatsApp Image 2026-07-09 at 14.00.17.jpeg'
img = Image.open(img_path)
gray = img.convert('L')
width, height = gray.size

col_min = []
for x in range(width):
    min_val = 255
    for y in range(height):
        val = gray.getpixel((x, y))
        if val < min_val:
            min_val = val
    col_min.append(min_val)

col_has_ink = [v < 150 for v in col_min]

ink_regions = []
in_ink = False
start = 0
for i, has_ink in enumerate(col_has_ink):
    if has_ink and not in_ink:
        start = i
        in_ink = True
    elif not has_ink and in_ink:
        ink_regions.append((start, i))
        in_ink = False
if in_ink:
    ink_regions.append((start, len(col_has_ink)))

print("Width:", width, "Height:", height)
print("Ink regions (start_col, end_col):", ink_regions)

if ink_regions:
    gaps = []
    for i in range(len(ink_regions)-1):
        gap = ink_regions[i+1][0] - ink_regions[i][1]
        gaps.append((gap, ink_regions[i][1], ink_regions[i+1][0]))
    
    if gaps:
        largest_gap = max(gaps, key=lambda x: x[0])
        print("Largest gap:", largest_gap)
        crop_x = largest_gap[1] + largest_gap[0] // 2
        
        cropped = img.crop((0, 0, crop_x, height))
        cropped.save('/Users/elamine/Desktop/cimac-vitrine/public/logo-icon.png')
        print("Saved cropped image to public/logo-icon.png with width", crop_x)
    else:
        # Just use first half
        crop_x = width // 3
        cropped = img.crop((0, 0, crop_x, height))
        cropped.save('/Users/elamine/Desktop/cimac-vitrine/public/logo-icon.png')
        print("Guessed crop at width", crop_x)

