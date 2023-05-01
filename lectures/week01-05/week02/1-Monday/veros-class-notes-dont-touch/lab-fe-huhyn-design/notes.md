

## Layout 

```html
<div class="container-fluid p-0">

    <header></header>

    <nav></nav>

    <main></main>

    <footer></footer>
 
</div>
```


## Header 

- bottom will be a layer for image and video 
    - medium devices and up, show the video
    - small devices (phone) show the image
- second layer will be for opacity 
    - image is too bright. Opacity layer will used to darken the video some so the text pops
- top layer will be for text
    - any text will reside on this layer
        - header
        - contact us button
        - other information
        - [example](https://vintage.agency/blog/12-yummy-examples-of-the-best-restaurant-websites/)

```html
<header>
    <div id="opacityLayer"></div>

    <div id="imageLayer"></div>

    <div id="videoLayer"></div>

    <div id="textLayer"></div>
</header>
```

### Positioning
- Parent layer = header 
- children
    - opacityLayer
    - videoLayer
    - textLayer 

- Doesn't matter the order of the children, because we can change the order with the z-index property.

- we are going to make the children have an absolute position
- when dealing with absolute positing the parent container must be set to relative positioning, otherwise, the movement of the children will be relative to the viewport
    - parent (header) relative position 
    - children (absolute position)
    - move each child to the top left corner of the header (parent)


```html
<header class="position-relative">
    <div id="opacityLayer" class="position-relative"></div>

    <div id="videoLayer" class="position-absolute"></div>

    <div id="textLayer" class="position-absolute"></div>
</header>
```

Positioning works in conjunction with top, bottom, right, left
- position: absolute
    - top: 5px

The `top` property needs to be set on each layer to bootstrap class `top-0`  which is equivalent top `top:0px`

- this will position all of the layers on top of each other starting at 0px.
- they will all line up at the top left corner


provide the `top` property to each layer 


```html
<header class="position-relative">
    <div id="opacityLayer" class="position-relative top-0"></div>

    <div id="videoLayer" class="position-absolute top-0"></div>

    <div id="textLayer" class="position-absolute top-0"></div>
</header>
```

### Height and Width 

- Need to set the height and the width of each of the layers to span 100% of the parent's width and height with the bs properties `w-100` and `h-100` 

```html
<header class="position-relative">
    <div id="opacityLayer" class="position-relative top-0 h-100 w-100"></div>

    <div id="videoLayer" class="position-absolute top-0  h-100 w-100"></div>

    <div id="textLayer" class="position-absolute top-0  h-100 w-100"></div>
</header>
```

### Define the z index 


```css
/* z-index */

.z10{
    z-index: 10;
}
.z15{
    z-index: 15;
}
.z20{
    z-index: 20;
}
.z25{
    z-index: 25;
}

```
- move around layers without the z-index, then apply the z index
- apply the z-index


```html
<header class="position-relative">
    <!--this sits in the middle -->
    <div id="opacityLayer" class="position-relative top-0 h-100 w-100 z20"></div>

    <!--this sits on bottom, so has the lowest z index -->
    <div id="videoLayer" class="position-absolute top-0  h-100 w-100 z10"></div>
    <!--this sits on top: has the highest z index -->
    <div id="textLayer" class="position-absolute top-0  h-100 w-100 z25"></div>
</header>
```


### Apply some background color to see the changes 
- header bgc is pink

- apply color the bottom most layer: video layer 
- apply color to the middle layer: opacity layer
- apply color to the top layer: text layer


## Video / Images Layer 

This layer will be an image for the small screens and a video for the large screens
- create a new div as a child of header with an id of imageLayer 
- apply the same class rules to the image layer as the video layer 
- they have the same z-index, because only one of these is going to show at a time (depending on the device)

```html 

<!--Image layer -->
<div id="imageLayer" class="position-absolute top-0 w-100 h-100 bg-info z10">
    <img src="images/noodles.jpg" alt="">
</div>

<!--Video layer layer -->
<div id="videoLayer" class="position-absolute top-0 bg-warning z10">

    
</div>

```

- comment out all other layers and just work with the image layer
- insert image tag to the image layer  to design for mobile first

```html
<!--Image layer -->
<div id="imageLayer" class="position-absolute top-0 w-100 h-100 bg-info z10">
    <img src="images/noodles.jpg" alt="">
</div>
```

- docs for hiding and displaying content
    - https://getbootstrap.com/docs/5.1/utilities/display/
    - add the following classs to the image layer so that it is only visible on small devices
    - `d-md-none d-lg-none d-xl-none`
        - hide on md devices, large and xl devices 
        - now should only see the image on small devices and pink screen on medium and larger devices


- insert video to the video layer
- video: https://www.youtube.com/watch?v=hz70ucYZyy4&t=1s
    - get the embed code and place in the video layer
- keeping aspect ratio: https://getbootstrap.com/docs/5.0/helpers/ratio/ 
    - ratio ratio-16x9
- google developer guide to youtube videos: https://developers.google.com/youtube/player_parameters 
    - Query string parameters (add these to the end of the embed link)
        - key values pairs.  First pair followed by question mark
        - all remaining key value pairs are followed by ampersand
        - passing information to googl'es backend to tell them how we want to play this vides
        - sending information to their back end
        - autoplay = 1 
        - mute = 1 
        - loop = 1

        - Mercer's continuous loop: https://www.youtube.com/embed/hz70ucYZyy4?autoplay=1&mute=1&start=10&end=30&loop=1&playlist=hz70ucYZyy4

- iframe 
    - width = 100% 
- Hide on small devices : https://getbootstrap.com/docs/5.1/utilities/display/ 
    - d-none d-md-block (hide on screens smaller than medium screens)
    - d-node(hide on all devices)
    - d-md-block: 


```html 
<!--Video layer layer -->
<div id="videoLayer" class="position-absolute top-0 bg-warning z10">

    <iframe width="100%"  src="https://www.youtube.com/embed/hz70ucYZyy4?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

```

## Opacity Layer 


## Text Layer 















