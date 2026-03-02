<p align="center">Todd Stewart &bull; 02 MARCH 2026</p> 

# IMGD 5010 &bull; Assignment 05: Noise and Complexity

### [Sketch & Edit](https://editor.p5js.org/GitAlongLittleCodies/sketches/v5OJeVHTJ) -or- [Sketch Only](https://editor.p5js.org/GitAlongLittleCodies/full/v5OJeVHTJ)

## Plinka, a discussion

Plinka is an approach to creating Plinko. When running the code, colorful pucks drop from the top of the canvas, about once per second, colliding with pegs, stationary shapes latticed across the canvas, and other pucks along the way. When operating correctly, the pucks should appear to take a random path as they bump and slide around obstacles. The collision detection and resolution method requires more work, though. Currently, the pucks can ball together and appear as though they are "fighting." Additional plinka pucks can be added with the tap of the mouse.

Coming out of the assignment, I went deep to learn vectors, especially how to handle them. On a previous approach to the assignment, I worked with Perlin Noise and feel that I have a good grasp on how to use it now. 

## Assignment Requirments
* Create and control at least 100 "agents"
  - At any single moment, there are anywhere from 90 to 100 static, pegs, and non-static, pucks, agents drawn on the canvas.
  - Agents that fall off the bottom of the canvas, the balls, are removed from the array.
  
* Use randomness to influence agent properties -or- use noise to do the same
  - When a puck is first added to the canvas, it is assigned a small, random velocity.
    * The velocity is only applied along the x-axis.
    * Applying a velocity along the y-axis doesn't contribute much to the randomness of the system considering gravity is 10 to 15x greater in magnitude. 
  - As pucks fall, they bump into pegs and pucks that further transfer their random properties to the puck. 
  
* Add some type of mouse-based interaction to your sketch, influencing the agents
  - Mouse clicks add more pucks at the mouse's position.
