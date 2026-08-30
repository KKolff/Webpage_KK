Photos currently live here as `photo-01.jpg` through `photo-22.jpg`, numbered in the order the originals were shot (full-resolution originals backed up in `originals/`, not linked from any page).

The grid displays them as square thumbnails (cropped to fit). There's no lightbox/expand and no download link anywhere on the page — clicking, right-clicking, and dragging the images are all disabled as a basic deterrent against casual copying (note this isn't a real technical barrier; anyone determined can still get the image from a loaded page, same as any website).

To add more photos later: drop a new file in here (e.g. `photo-23.jpg`), compress/resize it to something web-sized (existing ones are already down to ~1600px wide, a few hundred KB each), then add a matching block in the `.gallery-grid` section of `photography.html`:

```html
<div class="gallery-item"><img src="images/gallery/photo-23.jpg" alt="Photography 23" loading="lazy" draggable="false"></div>
```
