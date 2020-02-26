function glitch() {
  for (let i = 0; i < img.height / 60; i++) {
    //dist(pmouseX, pmouseY, mouseX, mouseY) * 0.04; i++) {
    drawStreak();
  }
}
function coloredGlitch() {
  for (let i = 0; i < img2.height / 60; i++) {
    //dist(pmouseX, pmouseY, mouseX, mouseY) * 0.04; i++) {
    drawStreakColored();
  }
}
function drawStreak() {
  let y = floor(random(height));
  let h = floor(random(40, 60)); //floor(random(1, 100));
  let xChange = floor(
    map(
      noise(y * yNoiseChange, (mouseY * 0.3 + frameCount) * timeNoiseChange),
      0.06,
      0.94,
      -maxXChange,
      maxXChange
    )
  ); //floor(random(-maxXChange, maxXChange));
  let yChange = floor(
    xChange * (maxYChange / maxXChange) * random() > 0.1 ? -1 : 1
  );
  if (
    random() <
    (dist(pmouseX, pmouseY, mouseX, mouseY) / width) * 0.3 + 0.0015
  )
    filter(POSTERIZE, floor(random(2, 6)));
  if (mouseIsPressed && abs(mouseY - y) < 60) {
    if (!inverted) filter(INVERT);
    inverted = true;
  } else {
    if (inverted) filter(INVERT);
    inverted = false;
  }
  //if(random()<0.03)tint(random(255), random(255), random(255));

  //copy(img, 0, y, img.width, h, xChange - maxXChange, -maxYChange + y + yChange, img.width, h);
  image(
    img,
    xChange - 0 + width / 2,
    height - y + yChange,
    img.width,
    h,
    0,
    y,
    img.width,
    h
  );
}
function drawStreakColored() {
  let y = floor(random(height));
  let h = floor(random(20, 40)); //floor(random(1, 100));
  let xChange = floor(
    map(
      noise(y * yNoiseChange, (mouseY * 0.3 + frameCount) * timeNoiseChange),
      0.06,
      0.94,
      -maxXChange,
      maxXChange
    )
  ); //floor(random(-maxXChange, maxXChange));
  let yChange = floor(
    xChange * (maxYChange / maxXChange) * random() > 0.1 ? -1 : 1
  );
  if (
    random() <
    (dist(pmouseX, pmouseY, mouseX, mouseY) / width) * 0.3 + 0.0015
  )
    filter(POSTERIZE, floor(random(2, 6)));
  if (mouseIsPressed && abs(mouseY - y) < 60) {
    if (!inverted) filter(INVERT);
    inverted = true;
  } else {
    if (inverted) filter(INVERT);
    inverted = false;
  }
  //if(random()<0.03)tint(random(255), random(255), random(255));

  //copy(img, 0, y, img.width, h, xChange - maxXChange, -maxYChange + y + yChange, img.width, h);
  image(
    img2,
    xChange - 0 + width / 2,
    height - y + yChange,
    img2.width,
    h,
    0,
    y,
    img2.width,
    h
  );
}
