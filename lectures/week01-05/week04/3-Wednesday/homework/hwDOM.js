

const createNodeWClass = (node, className) => {

    let newNode = document.createElement(node)

    newNode.setAttribute('class', className)

    return newNode;
}

let containerDiv = createNodeWClass('div', 'container')
// line 63 -> Hold's everything

//*-------------------------------------------------------------------

let divRow1 = createNodeWClass('div', 'row')
// line 65
let nav = createNodeWClass('nav', 'header d-flex')
// nav (line 66-72)
let mainNavDiv = createNodeWClass('div', 'container-fluid d-flex align-items-center')
nav.append(mainNavDiv)
// div (line 67-71)
let innerNavDiv1 = createNodeWClass('div', 'col-4 bigHeaderWord')
let innerNavDiv1Bold = document.createElement('b') // bold "High on Coding"
mainNavDiv.append(innerNavDiv1) // step 1
innerNavDiv1Bold.innerText = "High On Coding"
innerNavDiv1.append(innerNavDiv1Bold) // brings bold into innermost bold div 1
//^ line 68

let innerNavDiv2 = createNodeWClass('div', 'col-2 headerWords')
let innerNavDiv2Bold = document.createElement('b')
mainNavDiv.append(innerNavDiv2) // step 1
innerNavDiv2Bold.innerText = "Home"
innerNavDiv2.append(innerNavDiv2Bold)
//^ line 69
let innerNavDiv3 = createNodeWClass('div', 'col-2 headerWords')
innerNavDiv3.innerText = "Categories"
mainNavDiv.append(innerNavDiv3)
divRow1.append(nav)
containerDiv.append(divRow1)

//* End div Row 1
//*-------------------------------------------------------------
//* Begin div Row 2

let divRow2 = createNodeWClass('div', 'body1 row')
// line 74
let body1Div1 = createNodeWClass('div', 'container-fluid d-flex')
divRow2.append(body1Div1)
let body1Div1Bold = createNodeWClass('b', 'blessings')
body1Div1Bold.innerText = "Blessings and Peace"
body1Div1.append(body1Div1Bold)
let body1Div2 = document.createElement('div')
body1Div2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam tempore quia voluptate molestiae minus voluptates neque, inventore provident voluptatum, nam laboriosam doloribus, illum ullam blanditiis cumque quasi libero laborum?"
divRow2.append(body1Div2)
containerDiv.append(divRow2)

//* End div Row 2
//*-------------------------------------------------------------
//* Begin div Row 3

let divRow3 = createNodeWClass('div', 'bg-white row')
// line 80
let row3Div1 = createNodeWClass('div', 'container-fluid d-flex')
let row3Div1Bold = createNodeWClass('b', 'blessings2')
row3Div1Bold.innerText = "Hello WatchKit"
row3Div1.append(row3Div1Bold)
divRow3.append(row3Div1)

let row3Div2 = document.createElement('div')
row3Div2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam tempore quia voluptate molestiae minus voluptates neque, inventore provident voluptatum, nam laboriosam doloribus, illum ullam blanditiis cumque quasi libero laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam tempore quia voluptate molestiae minus voluptates neque, inventore provident voluptatum, nam laboriosam doloribus, illum ullam blanditiis cumque quasi libero laborum?"
divRow3.append(row3Div2)

let row3Div3 = createNodeWClass('div', 'botBlessing d-flex align-items-center')
let row3Div3Bold1 = createNodeWClass('b', 'col-2')
row3Div3Bold1.innerText = "12 Comments"
row3Div3.append(row3Div3Bold1)
let row3Div3Bold2 = createNodeWClass('b', 'col-2')
row3Div3Bold2.innerText = "124 Likes"
row3Div3.append(row3Div3Bold2)
divRow3.append(row3Div3)
containerDiv.append(divRow3)

//* End div Row 3
//*-------------------------------------------------------------
//* Begin div Row 4

let divRow4 = createNodeWClass('div', 'bg-white row')
// line 88
let row4Div1 = createNodeWClass('div', 'container-fluid d-flex')
let row4Div1Bold = createNodeWClass('b', 'blessings2')
row4Div1Bold.innerText = "Introduction to Swift"
row4Div1.append(row4Div1Bold)
divRow4.append(row4Div1)

let row4Div2 = document.createElement('div')
row4Div2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam tempore quia voluptate molestiae minus voluptates neque, inventore provident voluptatum, nam laboriosam doloribus, illum ullam blanditiis cumque quasi libero laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam tempore quia voluptate molestiae minus voluptates neque, inventore provident voluptatum, nam laboriosam doloribus, illum ullam blanditiis cumque quasi libero laborum?"
divRow4.append(row4Div2)

let row4Div3 = createNodeWClass('div', 'botBlessing d-flex align-items-center')
let row4Div3Bold1 = createNodeWClass('b', 'col-2')
row4Div3Bold1.innerText = "15 Comments"
row4Div3.append(row4Div3Bold1)
let row4Div3Bold2 = createNodeWClass('b', 'col-2')
row4Div3Bold2.innerText = "45 Likes"
row4Div3.append(row4Div3Bold2)
divRow4.append(row4Div3)
containerDiv.append(divRow4)


let body = document.querySelector('body')
body.append(containerDiv)