# Band Website

- Create a new Node application inside of your Digital Crafts folder :dc-wrench:  . 
- Run npm init
- Install express and ejs
- Create an app.js file and set up your server
- Create the following folders inside of your application: public, data, views, routes
- Create the data.json file inside of your data folder (data/data.json)
run git init to initialize this as a git repo
- Create a .gitignore file and add the node_modules folder to it
- Create 2 routes inside of the routes folder: index.js and albums.js
- Create 2 views inside of the views folder: index.ejs and albums.ejs
- Connect your routes to your app.js file
- Connect your views folder to your app.js file
- Inside of your public folder, make an images folder (public/images)
- Find the album cover for each album in your data file and put the images in the images folder.
- Design the index.ejs page which is the front page of your application.  You can use bootstrap, flexbox or pure css. The front page is just a landing page about your artist. - Here is a video of one of my student’s taylor swift site.  Just work on the front page. You will using the data from your json file to populate the albums page on Monday
https://www.youtube.com/watch?v=6RSOrFk6Vgo


Inside of the  data/data.json, create a json object with your favorite music artist/band with the following information:
- Album Name
- Short Name (can be used as a query parameter on url, i.e. localhost:3000/album/taylorswift  where Taylor Swift is the album name and taylorswift is the short name
- summary (short description of the album)
- artwork (album cover)
- track list
- link to where you can purchase it (optional)
- link to where you can listen to it on Spotify (optional)
- Add any other information that you want to go on your site



The format should be an object with the key “albums”.  The value should be and array of objects.  Each object should represent an album with all of the information from above. Remember that this is a json object, not a JS object, so the keys should be strings (include quotes)

```js◊
{
“albums”: [{  }, {  }, { } ]
}
Below is an example for Taylor Swift 
```

```js
{
"albums": [{
    "name": "Taylor Swift",
    "shortname": "taylorswift",
    "albumname" : "Taylor Swift (Debut Album)",
    "summary" : "Taylor Swift is the debut studio album by American singer-songwriter Taylor Swift, released on October 24, 2006, by Big Machine Records. Swift was 16 years old at the time of the album's release and wrote its songs during her freshman year of high school. Swift has writing credits on all of the album's songs, including those co-written with Liz Rose. Swift experimented with several producers, ultimately choosing Nathan Chapman, who had produced her demo album. Musically, the album is country music styled, and lyrically it speaks of romantic relationships, a couple of which Swift wrote from observing relationships before being in one. Lyrics also touch on Swift's personal struggles in high school.",
    "artwork": ["taylorswift_ts.png"],
    "tracklist": "1. Tim McGraw<br>2. Picture to Burn<br>3. Teardrops on My Guitar<br>4. A Place In This World<br>5. Cold ad You<br>6. The Outside<br>7. Tied Together with a Smile<br>8. Stay Beautiful<br>9. Should've Said No<br>10. Mary's Song (Oh My My My)<br>11. Our Song",
    "albumAM": "https://itunes.apple.com/us/album/taylor-swift-bonus-track-version/275621626",
    "albumSM": "https://open.spotify.com/album/7mzrIsaAjnXihW3InKjlC3"
},{
    "name": "Taylor Swift",
    "shortname": "fearles",
    "albumname" : "Fearless",
    "summary": "Fearless is the second studio album by the American singer-songwriter Taylor Swift. The album was released on November 11, 2008, by Big Machine Records. Fearless was an international breakthrough and huge commercial success for Swift. It debuted at No. 1 in the United States, and later became the best-selling album of 2009, selling over 3.2 million copies. It gave Swift, 18 at the time, the distinction of being the youngest artist in history to have the year's best-selling album. It has sold over 7 million copies in the United States.",
    "artwork": ["fearles_ts.png"],
    "tracklist": "1. Fearless<br>2. Fifteen<br>3. Love Story <br>4. Hey Stephen <br>5. White Horse <br>6. You belong with me <br>7. Breathe <br>8. Tell Me Why <br>9. You're Not Sorry <br>10. The Way I loved You <br>11. Forever & Always <br>12. Best Day <br>13. Change",
    "albumAM": "https://itunes.apple.com/us/album/fearless/295757174",
    "albumSM": "https://open.spotify.com/album/2dqn5yOQWdyGwOpOIi9O4x"
},{
    "name": "Taylor Swift",
    "shortname": "speaknow",
    "albumname" : "Speak Now",
    "summary": "Speak Now is the third studio album by American singer-songwriter Taylor Swift. It was released on October 25, 2010, by Big Machine Records. Production for the album took place during 2009 to 2010 at several recording studios, and was handled by Swift and Nathan Chapman. Written entirely by Swift as the follow-up to Fearless, Speak Now expands on the country pop style of her previous work, and features lyrical themes including love, romance and heartbreak. Speak Now debuted at number one on the U.S. Billboard 200 chart, giving Swift her second consecutive chart-topper in the U.S. Its first-week sales of 1,047,000 copies was the fifth-biggest debut in history for a female artist, the third biggest ever by a country album (the first being Swift's own Red album later released in 2012), the biggest in five and a half years, and the biggest first week sales of 2010.",
    "artwork" : ["speaknow_ts.png"],
    "tracklist": "1. Mine<br>2. Sparks Fly<br>3. Back to December<br>4. Speak Now<br>5. Dear John<br>6. Mean<br>7. The Story of Us<br>8. Never Grow Up<br>9. Enchanted<br>10. Better Than Revenge<br>11. Innocent<br>12. Haunted<br>13. Last Kiss<br>14. Long Live",
    "albumAM": "https://itunes.apple.com/us/album/speak-now/399727924",
    "albumSM": "https://open.spotify.com/album/5EpMjweRD573ASl7uNiHym"
},{
    "name": "Taylor Swift",
    "shortname": "red",
    "albumname" : "Red",
    "summary": "Red is the fourth studio album by American singer-songwriter Taylor Swift. It was released on October 22, 2012, by Big Machine Records, as the follow-up to her third studio album, Speak Now. The album title was inspired by the semi-toxic relationships that Swift experienced during the process of conceiving this album, with Swift describing the emotions she felt as red emotions due to their intense and tumultuous nature. Red touches on Swift's signature themes of love and heartbreak, however, from a more mature perspective while exploring other themes such as fame and the pressure of being in the limelight. Worldwide, Red has sold 7 million copies as of December 2017. It was Swift's third consecutive top-selling album of the year in the United States, managing to be the second best-selling album of 2012 across all genres only two months after its release.",
    "artwork" : ["red_ts.png"],
    "tracklist": "1. State of Grace<br>2. Red<br>3. Treacherous<br>4. I Knew You Were Trouble<br>5. All Too Well<br>6. 22<br>7. I Almost Do<br>8. We Are Never Getting Back Together<br>9. Stay Stay Stay<br>10. The Last Time (feat. Gary Lightbody)<br>11. Holy Ground<br>12. Sad Beautiful Tragic<br>13. The Lucky One<br>14. Everything Has Changed (feat. Ed Sheeran)<br>15. Starlight<br>16. Begin Again",
    "albumAM": "https://itunes.apple.com/us/album/red/571445253",
    "albumSM": "https://open.spotify.com/album/1EoDsNmgTLtmwe1BDAVxV5"
},{
    "name": "Taylor Swift",
    "shortname": "1989",
    "albumname" : "1989",
    "summary": "1989 is the fifth studio album by American singer-songwriter Taylor Swift, released on October 27, 2014 through Big Machine Records. Swift began composing the album following the release of her previous studio effort, Red (2012). The album represents a departure from the country music of Swift's previous albums, and is described by the singer as her first documented official pop album. 1989 sold 1.287 million copies in the United States during its first week of release and debuted at number one on the Billboard 200 albums chart. It became the best-selling album of 2014 in the United States, with total sales of 6.11 million copies as of December 2017, while selling 10.1 million worldwide.",
    "artwork" : ["1989_ts.png"],
    "tracklist": "1. Welcome To New York<br>2. Blank Space <br>3. Style<br>4. Out Of The Woods<br>5. All You Had To Do Was Stay<br>6. Shake It Off<br>7. I Wish You Would<br>8. Bad Blood<br>9. Wildest Dreams<br>10. How You Get The Girl<br>11. This Love<br>12. I Know Places<br>13. Clean<br>14. Wonderland<br>15. You Are In Love<br>16. New Romatics",
    "albumAM": "https://itunes.apple.com/us/album/1989/907242701",
    "albumSM": "https://open.spotify.com/album/2QJmrSgbdM35R67eoGQo4j"
},{
    "name": "Taylor Swift",
    "shortname": "reputation",
    "albumname" : "Reputation",
    "summary": "Reputation (stylized as reputation) is the sixth studio album by American singer and songwriter Taylor Swift. It was released on November 10, 2017, through Big Machine Records. The album has topped charts in Australia, Austria, Belgium, Canada, Ireland, the Netherlands, New Zealand, Norway, Scotland, Switzerland, the United Kingdom, and the United States. According to Nielsen SoundScan, Reputation moved 1.238 million album-equivalent units (1.216 million copies sold) in the United States during its first week of release, making it the country's best-selling album of 2017.",
    "artwork" : ["reputation_ts.png"],
    "tracklist": "1. ...Ready For It?<br>2. End Game (feat. Ed Sheeran & Future)<br>3. I Did Something Bad<br>4. Don't Blame Me<br>5. Delicate<br>6. Look What You Made Me Do<br>7. So It Goes...<br>8. Gorgeous<br>9. Getaway Car<br>10. King of My Heart<br>11. Dancing With Our Hands Tied<br>12. Dress<br>13. This Is Why We Can't Have Nice Things<br>14. Call It What You Want<br>15. New Year's Day",
    "albumAM": "https://itunes.apple.com/us/album/reputation/1274999981",
    "albumSM": "https://open.spotify.com/album/6DEjYFkNZh67HP7R9PSZvv"
}]
}
```

Make sure your json is valid by running it through a json validator:https://www.freeformatter.com/json-validator.html