var pressedX = 0;
var pressedY = 0;
var pressedTime = 0;
var dropY = 0;

function draw() {
	var width = 1080;
	var height = 1080;
	colorMode(HSB, 360, 100, 100, 1);
	
	frameRate(8);
	
	createCanvas(width, height);
	background(215, 10, 74, 1);
	strokeWeight(12);
	
	for (var g = 0; g <= 32; g++){
		if (g >= 16){
			s = (64-g*2)+10; 
		} else {
			s = 42;
		}
		
		skyGradient = color(215, s, g*2+10, 1);
		stroke(skyGradient);

		d = g*4+g*g/16+random(1);
		line(0, d, width, d);
	}
	
	for (var g2 = 0; g2 <= 64; g2++){
		if (g2 <=64){
			s = 10+(g2*2)/64*90;
			b = 74+(g2*2)/64*26;
		} else {
			s = 100;
			b = 100;
		}
			
		waterGradient = color(215, s, b, 1);
		stroke(waterGradient);

		d2 =(g2*4+g2*g2/16)+680+random(1);
		line(0, d2, width, d2);
		
	}
	
	
	
	textSize(18);
	fill(0, 0, 100, 0.75);
	noStroke();
	textAlign(CENTER);
	text('《西邊小島》', 0, 240, 1080, 30);
	text('試試瞇起眼，或者找它頭頂的紅燈，偶爾有船經過，你也可能可以見到小島的身影。', 0, 280, 1080, 30);
	
	blendMode(OVERLAY);
	noStroke();
	redLight = color(350, 80, random(80,100), 1);
	light1 = color(60, 60, random(80,100), 1);
	
	light2 = color(60, 60, random(80,100), 1);
	light3 = color(60, 60, random(80,100), 1);
	
	fill(redLight);
	ellipse(540+random(1), 515+random(1), 10);
	
	fill(light1);
	ellipse(24+random(1), 680+random(1), 10);
	ellipse(860+random(1), 680+random(1), 10);
	ellipse(1045+random(1), 680+random(1), 10);
	
	ellipse(random(1)+(millis()/48+720)%1080, 688+random(1), 10);
	ellipse(random(1)+(millis()/84+120)%1080, 686+random(1), 10);
	
	fill(light2);
	ellipse(960+random(1), 680+random(1), 10);
	ellipse(60+random(1), 680+random(1), 10);
	
	ellipse(random(1)+(millis()/60+240)%1080, 687+random(1), 10);
	
	fill(light3);
	ellipse(1020+random(1), 680+random(1), 10);
	ellipse(72+random(1), 680+random(1), 10);
	
	ellipse(random(1)+(millis()/72+360)%1080, 689+random(1), 10);
	ellipse(random(1)+(millis()/36+72)%1080, 685+random(1), 10);
	

	
	
	var passedTimeY = pressedY+(millis()-pressedTime);
	var mouseColor = color((millis()/10)%360, 80, 100, 1);
	var mousePressedColor = color(60, 60, random(80,100), 1);
	
	if (pressedTime > 0) {
	mousePressedColor = color((pressedTime/10)%360, 80, 100, 1);
	}
	
	fill(mouseColor);
	
	if (mouseIsPressed) {
		ellipse(mouseX, mouseY, 12);
	}
	
	fill(mousePressedColor);
	
	if (pressedTime > 0 && passedTimeY<685){
		dropY = passedTimeY;
		ellipse(pressedX, dropY, 12-dropY/685*2);
	} else if (pressedTime > 0){
		ellipse(random(1)+((millis()-pressedTime)/36+pressedX-(24-pressedY/685*24))%1080, 685+random(1), 12-dropY/685*2);
	}
	
	blendMode(BLEND);
	
	for (var m = 0; m <= 180; m++){
		strokeWeight(5);
		
		if (m <= 90){
			mountGradient =  color(215, 20-(m/90*10), 63+(m/90*10), 1);
		} else {
			mountGradient =  color(215, 10, 73, 1);
		}
	
		stroke(mountGradient);
		line(240+(300-m/180*300)-random(10)-pow(m*200,0.5)/5, 540+m, width-240-(300-m/180*300)+random(10)+pow(m*200,0.5)/5, 540+m);
		
	}

	for (i = 0; i < 3; i++){

	strokeWeight(1);
	rainX = random(1080);
	rainY = random(0, 600);
	rain = color(215, 10, 90, 1-(rainY)/1200);
	stroke(rain);
	
	line(rainX, rainY, rainX+random(-25, 50), random(360,480)+rainY);
	
	}

	noFill();
	
	for (r = 0; r < 20; r++){
	rippleX = random(1080);
	rippleY = random(720,1080);
	ripple = color(215, 10, 90, (rippleY-720)/360);
	stroke(ripple);
	
	ellipse(rippleX, rippleY, ((rippleY-720)/360)*84, ((rippleY-720)/360)*((rippleY-720)/360)*36);
	}
	
}

function mouseReleased() {
	if (mouseX <= 1080 && mouseY <= 1080){
	
    pressedX = mouseX;
	pressedY = mouseY;
	pressedTime = millis();
	
	}

}

