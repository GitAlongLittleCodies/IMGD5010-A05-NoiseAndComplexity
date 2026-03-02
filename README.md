<p align="center">Todd Stewart &bull; 2026 MAR 02</p> 

# IMGD 5010 &bull; Assignment 05: Noise and Complexity

### [Sketch & Edit](https://editor.p5js.org/GitAlongLittleCodies/sketches/v5OJeVHTJ) -or- [Sketch Only](https://editor.p5js.org/GitAlongLittleCodies/full/v5OJeVHTJ)

## Plinka, a discussion

Plinka is an approach to creating Plinko. When running the code, colorful balls drop from the top of the canvas, about once per second, colliding with pegs, stationary shapes latticed across the canvas, and other balls along the way. When operating correctly, the balls should appear to take a random path as they bump and slide around obstacles. The collision detection and resolution method requires more work, though. Currently, the balls can group together and appear as though they are "fighting." Additional plinka pucks can be added with the tap of the mouse.

This is something that I would consider continued work on; eventually taking it from a passive system to something more like pinball. 

Coming out of the assignment, I went deep to learn vectors, especially how to handle them. On a previous approach to the assignment, I worked with Perlin Noise and feel that I have a good grasp on how to use it now. 

## Assignment 
* Create and control at least 100 "agents"
  - At any single moment, there are anywhere from 90 to 100 "agents" stored in the agentArray.
* Use randomness to influence agent properties -or- use noise to do the same
* Add some type of mouse-based interaction to your sketch, influencing the agents
