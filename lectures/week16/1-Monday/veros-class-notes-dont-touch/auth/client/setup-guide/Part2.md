[Part 1](./Part1.md) | [Part 2](./Part2.md) | [Part 3](./Part3.md) | [Part 4](./Part4.md) | [Part 5](./Part5.md)

[JWT-Client Presentation](http://dc-houston.herokuapp.com/p2/Authentication/JWT-Client.html#1)

# Part2: Connect React Application to Node Server


- open your package.json in the client folder
- add a key to the json object 

```json
"proxy": "http://localhost:3001",
```

- this allows us to make fetch calls to backend without including the domain name 
    - /register
- without this proxy, would have to make api calls with http://localhost:3001/register


- run your node server