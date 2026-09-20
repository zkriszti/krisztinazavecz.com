---
title: Quick troubleshooting handles for SVGs not displaying
pubDate: 2019.07.06
blogImagePath: "../media/svg-code.jpg"
blog-image-credit: "Photo by Florian Olivo on Unsplash"
blog-image-alt: "code on screen"
post_lg: en
cld-img-url: "/v1588504270/webdizz/svg-code.jpg"
---

So you have engaged in using SVG for your graphic elements, because you have heard all the fantastic features that it holds:

- SVG images are of smaller size than regular image formats (in most cases)
- being a vector format, it will provide you a crisp, flawless visual impression on all screen sizes without the need for a larger file size
- it has its own markup syntax, so you might as well set parameters programmatically (if using SVG as a standalone `<svg>` element)

But using SVG in your web pages is not always straightforward. One of the most frequent problems you will run into is that your SVG just won't display (or at least, not visible in the viewport). In this post, I would like to point out some starting directions for solving these problems. This post doesn't intend to be a comprehensive 101 on SVG, I just want to line up a few points that can be of help as a starting point.

So, you have checked file paths, it is not your CSS that is causing the issue and still...

...help! My .svg is still not displaying!

The .svg format has a decent support in all modern browsers, even on mobile ones (from Android 2.3+), so browser support will be a rare issue these days.

So what else can be the culprit?

**Is your .svg a text logo?**

If yes, you might need to think about the way you are fetching the font itself. I have recently had this problem myself. The svg displayed fine on my notebook locally, but not on my mobile browsers. As it turned out, linking the font from Google would only make it available for using in CSS, but the SVG document won't pick it up. The reason I initially missed this glitch on my laptop is that I have the font installed locally.
To make svg pick up your Google-fonts, _you need to use svg as inline code_ and not as an image.
Or, if you need to keep your svg as an image - you will need to _trace your text (to path) in your favourite vector editor_. Now, this might be a trivial point for graphic designers, but not so much for web developers. ;)

**Does your svg has an irregular shape? (anything that is not rectangle)**

A similar problem I had not so long ago was related to a circle-shaped icon. Same problem as above: showing on desktop, not showing on mobile.
The solution here was a bit different though: _tracing and re-saving the svg file as a rectangular shape_. Mobile browsers didn't seem to support circle-shaped svgs.

**Check your viewBox / viewPort / preserveAspectRatio values**

SVG is - however it may seem - not an image but a document. Its viewBox attribute lets you define exactly what parts you want to show, but getting them right can be tricky sometimes.
The best tutorial I have ever come accross is [this series from Sara Soueidan](https://www.sarasoueidan.com/blog/svg-coordinate-systems/) (who is the goddess of SVG-related knowledge anyway in today's frontend-scene). :)

Usage of SVGs in webdesign is quite a broad topic and I just wanted to shed light on some not-so-densely documented problems. For further readings, I also recommend this primer:
https://css-tricks.com/scale-svg/
