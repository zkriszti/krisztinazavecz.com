---
title: Let's start a Git journey - Basic Git concepts in PLAIN English
subtitle: "vol.1.: Snapshot-based logic explained through movement photography"
pubDate: 2019.08.04
blogImagePath: "../media/journey.jpg"
blog-image-credit: "Photo by Annie Spratt on Unsplash"
blog-image-alt: "boy with a map in his hands"
post_lg: en
cld-img-url: "/v1588504233/webdizz/journey.jpg"
---

**How I met... git**

When I started out as a frontend developer, I basically knew nothing about git. The online courses I took haven't covered the topic. One I took "showed" us how to host projects on GitHub, and that was all I had been left with. The fundamental concepts of version control and specifically git were simply _just not taught_. Git, GitHub, commit, push, what?! All I had seen was that it is omnipresent in job postings, and just felt the urge to get familiar with it if I didn't want to fall behind.

**The serious problem I faced as a beginner**

Even though there are tons of literature on git, I couldn't really find any piece that would approach the topic _in_ _plain_ _English_. Basically I felt that concepts are explained along their respective synonyms and I was feeling I'm just not getting any further.

Then, at my first workplace - where management was contemplating about introducing git to replace a rather outdated version control solution - I was assigned the task to introduce basic concepts to other team members. Heaven knows why it was me as the most junior team member, maybe I seemed to be the most eager. :) So I needed to do my research. Fast forward few months and a new workplace, I'm using basic git daily.

Given my above struggles, in this post, I am trying to lay down git basics in _absolutely_ plain, say, everyday terms. This is by no way a comprehensive guide to git, please regard this post as what it is: just a small piece that makes starting your git journey a bit easier.

**So what is git? Why should I care?**

When you are just starting out, you might as well get along with file names such as "mySuperbCode_v1.js", "mySuperbCode_v3.js"... or commenting parts you deem unnecessary in & out. But you will soon get to a point where this all feels clumsy and unprofessional. One day you might decide to completely rewrite a function, but you mess up seriously. You just wish you could revert back to where you started before refactoring. What if you could just rollback to any previous phase of your project.

You will also get to a point in your career where you will be working in a professional environment, where different states of the same project need to co-exist (ie. developer version vs. live version or separated "units" for developing relatively independent new feature sets). Handling a codebase like this would soon turn into an unmanageable mess without version control.

**I want it all, I want it now**

Let's dive in. :)

Broadly speaking, there are two distinct concepts of version control, "delta" and "snapshot". The "delta" approach means that the changes in each file are controlled. While with a "snapshot" based approach, all states of the _whole project_ are kept track of.

Bear with me here and let me explain this with the analogy of photographing a dancer.

- your separate files are the dancer's body parts, like arms, trunk, heads, legs, hips.
- the dancer is your project.

![a dancer jumping in the air](../media/dancer.jpg)

<p class="inline-img-credit">Photo by David Hoffmann on Unsplash</p>

How would you photograph this dancer? You may choose to separately catch all movements of each bodypart. That is:

- create a separate streak of photos of arm movements
- ...another streak of the legs
- ...another streak of the hips, etc...

Sure, you can definitely store all these photos. But will you know how they match together for any arbitrary moment in time? Where the fingers were pointing at 0:15? The feet position only changed at 0:35, but what were the fingers doing at that time? It would be absolutely hard to follow.

Sure, we can do better than this, because we have the right tools! Imagine that you are taking a photo in burst mode with your camera. Within your chosen timeframe and with your chosen frequency, each second is captured, and matching body part states are synchronized second by second, movement by movement. If you create photo in burst mode, you could have one picture for each second. And each picture tells you the position of ALL bodyparts at any given moment. Now, this is what we are looking for, and this is the advantage of the "snapshot" based approach in version control. (Now, I know that a second is way too much time in photography, but you get the idea :) ).

![sequence](../media/sequence.jpg "Status is retraceable for any given moment in time - for us, this means any given state of a project")
<a class='inline-img-credit' href="https://pxhere.com/en/photo/1365738">Photo from pxhere.com</a>

Status is retraceable for any given moment in time - for us, this means any given state of a project.

...contrary to a change-only based approach: (imagine that FileA, FileB etc. are different body parts of the dancer - you have no information of body part representing "FileB" at, say, 0:02 and 0:03).

![delta-based version control](../media/delta.png "Delta-based version control")

...and now, thinking back to movement photography:

![snapshot-based version control](../media/snapshot.png "Snapshot-based version control")

<a class='inline-img-credit' href="https://git-scm.com/book/en/v2">Above images are from the ProGit book by Scott Chacon and Ben Straub</a>

I hope I could bring this concept closer, and you will go on with your git journey way easier! :)
