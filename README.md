# Demo

https://react-animated-lists.firebaseapp.com

//npm i react-animated-lists AND you need to install styled-components!!
//NEED a duration prop AND direction minimum for all child items to move in specified direction
//no duration = no smooth transition
//direction = which direction the list will to towards toLeft,toRight, toTop, toBottom,
//translate = distance child item will travel, can be a static value or dynamic (index/`0.${index}` etc)
//duration = how long the animation will last for each child item, a static value will make it last the same for
//all items, a dynamic will apply different duration values to each item either static or dynamic suggested
//delay = give a small (or long) delay to each child item, see notes below:
//if delay is given a static / fixed value, all items will move at the same time,
//the best practice for this is to give delay a changing number for each child item, eg: `0.${index}`
//both blurIn and fadeIn props can be used at same time, no fadeIn prop with blurIn = you will see the child item pre-animation
//optional blurValue = number, specifcy initial blur intensity to start from

//easingFunction = cubic-bezier to give a bounce effect of your choice
//value = "cubic-bezier(0.68, -0.55, 0.265, 1.95)")
//https://easings.net/en for your choice of easings
//show examples of several easing functions examples with child items

1.  react animated lists intro
    -what is it and what does it do

2.  installation

3.  demo

4.  playground

5.  how to use
    -how to import
    -how to include in list mapping

6.  props guide
    -explain props
    -props list table
    -explain prop quirks/features/best suggested practices
    -examples of different easing functions, different translate + delay + duration values

7.  license
    -mit, made by me
