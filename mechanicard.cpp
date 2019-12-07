// define the pin mapping for the nano hardware
# define directionrelay 8
# define OnOff 9
# define L1 2 //closed limit
# define L2 3 //open limit
# define ST 4 // start output

// define the possible states that the card can assume
enum CardState {
  opening,
  closing,
  posing,
  idle
};

// declare two variables pertaining to card state/
// cs keeps track of the current state
// cs_last keeps track of the past card state. so that we can print announcements regarding changes in state
CardState cs = idle;
CardState cs_last = idle;

// MotorOff() is a function that acts as a "verb" to turn the motor off
void MotorOff() {
  digitalWrite(OnOff, LOW); // turn the motor off
}

// MotorRev() is a function that acts as a "verb" to run the motor in reverse
void MotorRev() {
  digitalWrite(directionrelay, HIGH); // turn the reverse relay on
  digitalWrite(OnOff, HIGH); // turn on the motor
}

// MotorRev() is a function that acts as a "verb" to run the motor forward
void MotorFwd() {
  digitalWrite(directionrelay, LOW); // turn off motor reverse
  digitalWrite(OnOff, HIGH); // motor forward
}

// handleL1 is the interrupt handler for the "closed" limit switch
// it is designed t handle interrupts on the falling edge of the switch input
void handleL1() {
  if (cs == closing) {
    MotorOff(); //motor off
    cs = idle;
  }
}

// handleL2 is the interrupt handler for the "opened" limit switch
// it is designed t handle interrupts on the falling edge of the switch input
void handleL2() {
  if (cs == opening) {
    MotorOff(); //motor off
    cs = posing;
  }
}

// setup() will set up all of the hardware mapping
// and will normally set the card's stat to "idle"
// but it will also check to see if the open limit switch is pressed, 
// in which case it will set the card state to "closing" and will move the motor to close the card
void setup() {

  // Set up the discrete outputs that control the direction and motor relays
  pinMode(directionrelay, OUTPUT);
  pinMode(OnOff, OUTPUT);
  
  // turn the motor off immediately ..
  MotorOff();

  // set up the inputs that read the switches
  // these are pulled up .. pressing any switch causes a falling-edge signal
  pinMode(L1, INPUT_PULLUP);
  pinMode(L2, INPUT_PULLUP);
  pinMode(ST, INPUT_PULLUP);

  // attach falling-edge interrupts for the limit switches to respective interrupt handlers
  attachInterrupt(digitalPinToInterrupt(L1), handleL1, FALLING);
  attachInterrupt(digitalPinToInterrupt(L2), handleL2, FALLING);

  // set up the serial port so that we can monitor stuff
  Serial.begin(115200);

  // see if the system is stuck at the 
  // "opened" limit switch ., if is is, then close the card
  if (digitalRead(L2) == 0) {
    cs = closing;
    MotorRev();
    Serial.println("closing service");

  } 
  // if we are not stuck at the closed limit switch, then put the card in "idle" mode
  else {
    cs = idle;
    Serial.println("state=idle");
  }

}

// the loop routine runs over and over
// currently,it monitors for a start button press
// and also handles the "pose" delay when we are in the "posing" state
void loop() {

  // if start pressed, and we're in idle state
  // Turn motor on, and set card state to "opening"
  if ((digitalRead(ST) == 0)) {
    if (cs == idle) {
      MotorFwd(); // open
      cs = opening;
    }
  }

  // if w're in the posing state, then hold there for four seconds
  // and then set the state to "closing" and start closing the card
  if (cs == posing) {
    Serial.println("posing 4 seconds");
    delay(4000);
    cs = closing;
    MotorRev(); //reverse motor
  }

  // just print out the state of the card, if we see a changes
  // change is  determined by compating cs_last to cs
  // if se see a change, then print a little message, and update cs_last to match cs
  if (cs != cs_last) {
    cs_last = cs;
    switch (cs) {
    case idle:
      Serial.println("idle");
      break;

    case opening:
      Serial.println("opening");
      break;

    case posing:
      Serial.println("posing");
      break;

    case closing:
      Serial.println("closing");
      break;

    }
  }
}
