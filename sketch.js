// Plinka!
// Like Plinko but worse.

// IMGD 5010 Assignment 5 Noise & Complexity

/*
sources for inspiration and code support:
(1) Coding Train Collision & Resolution Challenge
    https://thecodingtrain.com/challenges/184-elastic-collisions
(2) Collision Checker
    https://editor.p5js.org/mbnelson86/sketches/kpl8np_9P
*/


let agentArray = [];

function setup() {
  createCanvas(500, windowHeight);
  colorMode(HSB);
  
  // add plinka pegs
  let rows = 18;
  let cols = 11; 
  for (let i = 0; i <= rows; i++){
    if(i < 2 || i > 16) {
      // do nothing
    } else {
      for (let j = 0; j <= cols; j++){
        if ( (i + j) % 2 ) { 
          let x = j * width / cols;
          let y = i  *height / rows;
          new plinkaPeg(x, y);
        }
      }
    }
  }
  
  vectorGravity = createVector(0,20);

// end setup()
}

function draw() {
  background(265,100,10,0.8);

// marching orders for agents
  for (let agent of agentArray){
    agent.applyForce(vectorGravity); 
    agent.update();
    agent.edges();
    agent.show();
    for (let other of agentArray){
      if (agent !== other){
          agent.collision(other); 
      }
    }
  }

// add a new plinka puck every second
  if ( frameCount%60 == 0 ){
   new plinkaPuck(frameCount%500, 0);
  }
  
// remove the plinka pucks that fall off
  for ( let i = 0; i < agentArray.length; i++ ){
    if(agentArray[i].vectorPos.y > height + agentArray[i].radius){
      agentArray.splice(i,1);
    }
  }
    
  if(frameCount%180==0){ 
    console.log('@' + frameCount/60 + ' seconds, array length = ' + agentArray.length);
  }

// end draw
}

function plinkaPuck(x,y){
    let mass = 90;
    let radius = sqrt(mass) * 2;
    let vectorPos = createVector(x,y);
    let vectorVel = createVector(random(-1,1), 0);
    let vectorAcc = createVector(0,0);
    let color = [map(vectorPos.x, 0, width, 50, 360), 80, 100, 0.9]; 
    let isStatic = false;
    let agent = new AgentOperations(mass, radius, color, vectorPos, vectorVel, vectorAcc, isStatic);
    agentArray.push(agent);
}

function plinkaPeg(x,y){
    let mass = 40;
    let radius = sqrt(mass) * 2;
    let vectorPos = createVector(x,y);
    let vectorVel = createVector(0,0);
    let vectorAcc = createVector(0,0);
    let color = [275, 25, 50, 0.25];
    let isStatic = true;
    let agent = new AgentOperations(mass, radius, color, vectorPos, vectorVel, vectorAcc, isStatic);
    agentArray.push(agent);
}

function mousePressed() {
  new plinkaPuck(mouseX, mouseY)
}