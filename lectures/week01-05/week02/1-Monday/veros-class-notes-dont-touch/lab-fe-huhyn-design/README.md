
# Huynh Restaurant Site


## Design Ideas
- [Ideas 1](https://www.squarespace.com/tour/restaurant-websites/?channel=pnb&subchannel=go&campaign=pnb-dr-go-us-en-verticals-bmm-blog-exp&subcampaign=(verticals-restaurant_restaurant-website_bmm)&utm_source=google&utm_medium=pnb&utm_campaign=pnb-dr-go-us-en-verticals-bmm&utm_term=%2Brestaurant%20%2Bwebsite&gclid=CjwKCAjwxLH3BRApEiwAqX9areGg6kGg84cPh7Q9jPFBdAvY_f-vWUy8Pg5b0mo5rkqdMGy-eLoeUBoChYwQAvD_BwE)
- [Ideas 2](https://restaurantden.com/50-amazing-restaurant-website-design-examples/)
- [Ideas 3](https://www.sitebuilderreport.com/inspiration/restaurant-websites)
- [Ideas 4](https://vintage.agency/blog/12-yummy-examples-of-the-best-restaurant-websites/)

[Huynh Restaurant](http://huynhrestauranthouston.com/cgi-bin/p/awtp-pa.cgi?d=huynh-restaurant&type=548&s=1656)

## General Layout

Create the following folder structure

- index.html
- /css 
    - headers.css 
    - footers.css 
    - global.css
- /images





## Color Palette

- [Coolors](https://coolors.co/palettes/trending)

```css 
/* black - #000000  
navy - #14213D
gold - #FCA311  (accent)
light gray - #E5E5E5 
white = #FFFFFF */

```


[Color Palette](https://coolors.co/000000-14213d-fca311-e5e5e5-ffffff)


### Define the 
- background colors 
- font colors
- page sections 

- normalize css
    - https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css

*make sure your index.html file links to these css files*


## Define the site colors

- Define background colors in the `global.css` file
- Define text colors in the `global.css` file


## Initial setup

- Define a parent class for the site with the bootstrap `container-fluid` class
- set the default setting to 0 so there is no space
- parent container will have the following sections.  These are called [semantic](https://www.w3schools.com/html/html5_semantic_elements.asp) tags
    - header
    - nav
    - main
    - footer

```html
<div class="container-fluid p-0">

    <header></header>

    <nav></nav>

    <main></main>

    <footer></footer>
 
</div>
```
## layout


## header

```html
<header>
    <div id="opacityLayer"></div>

    <div id="imageLayer"></div>

    <div id="videoLayer"></div>

    <div id="textLayer"></div>
</header>
```

![](./images/layers.svg)

### Opacity Layer
```html
<div id="opacityLayer" class="position-absolute top w-100 h-100  z15 bg-black opacity">
</div>
```

### Video Layer
```html
<div id="videoLayer" class="position-absolute ratio ratio-16x9 z10 d-none d-md-block">
    <!--video-->
    <iframe width="100%" class="embed-responsive-item"  src="https://www.youtube.com/embed/hz70ucYZyy4?autoplay=1&mute=1&enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
```

### Image Layer

```html
<div id="imageLayer" class="position-absolute w-100 h-100 d-md-none d-lg-none d-xl-none">
    <img src="images/noodles.jpg" alt="">
</div>
```

### Text Layer

```html
<div id="textLayer" class="position-absolute top w-100 h-100 z20 txt-accent d-flex flex-column justify-content-center align-items-center display-4">
    <div>Huhyn Restaurant</div>
    <div class="text-white h3">Vietnamese Cuisine</div>
    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Order Online
        </button>
    </div>
</div>

```

## nav


## main 


## footer





