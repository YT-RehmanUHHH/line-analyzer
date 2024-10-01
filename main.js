// Line Analyzer

// Add Event Listener
document.getElementById("analyze").addEventListener("click", analyzeLine);

// Event Function
function analyzeLine() {
  // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
  let pt1x = Number(document.getElementById("pt1x").value);
  let pt1y = Number(document.getElementById("pt1y").value);
  let pt2x = Number(document.getElementById("pt2x").value);
  let pt2y = Number(document.getElementById("pt2y").value);

  // Call Analyze Functions and Display results

  document.getElementById("length").innerHTML = getLength(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("slope").innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
  document.getElementById("description").innerHTML = getDescription(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("location-1").innerHTML = getPointLocation(
    pt1x,
    pt1y
  );
  document.getElementById("location-2").innerHTML = getPointLocation(
    pt2x,
    pt2y
  );
  document.getElementById("slope-point").innerHTML = getPointSlope(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("equation").innerHTML = getEquation(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
}

// Line Analyzer Functions Write your solutions here.

function getLength(x1, y1, x2, y2) {
  let ans = Math.sqrt([(x2 - x1) ** 2 + (y2 - y1) ** 2]);
  return ans.toFixed(2);
}

function getSlope(x1, y1, x2, y2) {
  let ans = (y2 - y1) / (x2 - x1);
  return ans.toFixed(2);
}

function getDescription(x1, y1, x2, y2) {
  if (x1 == x2) {
    return "Vertical";
  } else if (y1 == y2) {
    return "Horizontal";
  } else if ((x1, y1, x2, y2 >= 0)) {
    return "Increasing";
  } else if ((x1, y1, x2, y2 <= 0)) {
    return "Decreasing";
  }
}

function getPointLocation(x1, y1) {
  if (x1 == 0 && y1 == 0) {
    return "Origin";
  } else if (x1 == 0) {
    return "Y-Axis";
  } else if (y1 == 0) {
    return "X-Axis";
  } else if (x1 >= 0 && y1 >= 0) {
    return "Quad 1";
  } else if (x1 < 0 && y1 > 0) {
    return "Quad 2";
  } else if (x1 < 0 && y1 < 0) {
    return "Quad 3";
  } else if (x1 > 0 && y1 < 0) {
    return "Quad 4";
  }
}

function getPointLocation(x2, y2) {
  if (x2 == 0 && y2 == 0) {
    return "Origin";
  } else if (x2 == 0) {
    return "Y-Axis";
  } else if (y2 == 0) {
    return "X-Axis";
  } else if (x2 >= 0 && y2 >= 0) {
    return "Quad 1";
  } else if (x2 < 0 && y2 > 0) {
    return "Quad 2";
  } else if (x2 < 0 && y2 < 0) {
    return "Quad 3";
  } else if (x2 > 0 && y2 < 0) {
    return "Quad 4";
  }
}

function getPointSlope(x1, y1, x2, y2) {
  let slope = ((y2 - y1) / (x2 - x1)).toFixed(2);
  let sign = "";

  if (x1 == 0 && slope == 0) {
    return `y = ${y1}`;
  } else if (x1 < 0) {
    sign = "+";
    return `y - ${y1} = ${slope}(x ${sign} ${x1})`;
  } else if (x1 == 0) {
    return `y - ${y1} = ${slope}`;
  } else {
    sign = "-";
    return `y - ${y1} = ${slope}(x ${sign} ${x1})`;
  }
}

function getEquation(x1, y1, x2, y2) {
  if (x1 == x2) {
    return `x = ${x1}`; // Return equation in the form x = [value]
  }

  let slope = ((y2 - y1) / (x2 - x1)).toFixed(2);
  let yInt = y1 - slope * x1;

  // Check if the y-intercept is negative
  if (yInt < 0) {
    return `y = ${slope}x ${yInt}`;
  } else if (slope == 0) {
    return `y = ${yInt}`;
  } else {
    return `y = ${slope}x + ${yInt}`;
  }
}
