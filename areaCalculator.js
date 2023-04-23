function calculateRectangleArea(length, width) {
  var area = length * width;
  if (length > 0 || width > 0) return area;
}

function calculateTriangleArea(base, height) {
  var area = (base * height) / 2;
  if (base > 0 || height > 0) return area;
}

function calculateCircleArea(radius) {
  var area = Math.PI * Math.pow(radius, 2);
  if (radius > 0) return area;
}