class AgentOperations {
  constructor(mass, radius, color, vectorPos, vectorVel, vectorAcc, isStatic){
    this.mass = mass;
    this.radius = radius;
    this.color = color;
    this.vectorPos = vectorPos;
    this.vectorVel = vectorVel;
    this.vectorAcc = vectorAcc;
    this.isStatic = isStatic;
  }
  
  // NEW 03-01 11:26
  // integrating Shiffman's approach
  applyForce(force) {
    let vectorForce = force.copy();
    vectorForce.div(this.mass);
    this.vectorAcc.add(vectorForce);
  }

// NEW 03-01 11:32
// integrating Shiffman's approach
  update() { 
    if (!this.isStatic){
    this.vectorVel.add(this.vectorAcc);
    this.vectorPos.add(this.vectorVel);
    }
    
    this.vectorAcc.mult(0);
  }
  
// NEW 03-01 09:25
// integrating Shiffman's Collision Detection and Resolution
  collision(other){
    // get a snapshot of the collision
    let vectorImpact = p5.Vector.sub(other.vectorPos, this.vectorPos);
    // get the magnitude of the impact (aka distance)
    let d = vectorImpact.mag();
    // check if the shapes overlap 
    if ( d < this.radius + other.radius ) {
      // adjust positions so no overlap
      let overlap = d - ( this.radius + other.radius );
      let direction = vectorImpact.copy();
      direction.setMag(overlap*0.5);
      if (!this.isStatic) this.vectorPos.add(direction);
      if (!other.isStatic) other.vectorPos.add(direction);
      // update magnitude of impact (aka distance)
      vectorImpact.setMag( this.radius + other.radius ); // #TODO check code
      // simplify numerators and denominators
      let massSum = this.mass + other.mass;
      let velocityDiff = p5.Vector.sub(other.vectorVel, this.vectorVel);
      // calc PARTICLE A *this*
      let numerator = velocityDiff.dot(vectorImpact);
      let denominator = massSum * sq(this.radius + other.radius);
      let deltaVA = vectorImpact.copy(); // what's deltaVA?
      deltaVA.mult( ( 2 * other.mass * numerator ) / denominator ); 
      if (!this.isStatic) this.vectorVel.add(deltaVA);
      // calc PARTICLE B *other*
      let deltaVB = vectorImpact.copy();
      deltaVB.mult( ( -2 * this.mass * numerator ) / denominator ) ; 
      if (!other.isStatic) other.vectorVel.add(deltaVB);
    }
  }
  
  edges(){
    // x axis
    if ( this.vectorPos.x > width - this.radius ) {
      this.vectorPos.x = width - this.radius;
      this.vectorVel.x *= -1;
    } else if ( this.vectorPos.x < this.radius ) {
      this.vectorPos.x = this.radius;
      this.vectorVel.x *= -1;
    }
    
    // y axis // plinka has no use for top or bottom bounds
    if ( this.vectorPos.y > height - this.radius ) { 
      // nothing, let them fall off
      // this.vectorPos.y = height - this.radius;
      // this.vectorVel.y *= -1;
    } else if ( this.vectorPos.y < this.radius ) {
      // this.vectorPos.y = this.radius;
      // this.vectorVel.y *= -1;
    }
  }
    
  show() {
    fill(this.color);
    circle(this.vectorPos.x, this.vectorPos.y, this.radius*2);
  }

}