// DrawRectangle.js
function main() {
    // Retrieve <canvas> element
    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }
    // Get the rendering context for 2DCG
    var ctx = canvas.getContext('2d');
    // Draw a blue rectangle
    ctx.fillStyle = 'rgba(0, 0, 0)';
    ctx.fillRect(0, 0, 400, 400);
    let v1 = new Vector3([2.25, 2.25, 0]);
    drawVector(v1, 'red');
}

function drawVector(v, color) {
    var ctx = document.getElementById('example').getContext('2d');
    let originX = ctx.canvas.width / 2;
    let originY = ctx.canvas.height / 2;
    let endX = originX + v.elements[0] * 20;
    let endY = originY - v.elements[1] * 20;

    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = color;
    ctx.stroke();
}

function handleDrawEvent() {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    var v1x = parseFloat(document.getElementById('V1XCoor').value);
    var v1y = parseFloat(document.getElementById('V1YCoor').value);
    var v2x = parseFloat(document.getElementById('V2XCoor').value);
    var v2y = parseFloat(document.getElementById('V2YCoor').value);

    // Validate input
    if (isNaN(v1x) || isNaN(v1y)|| isNaN(v2x) || isNaN(v2y)) {
        alert('Please enter valid inputs.');
        return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let v1 = new Vector3([v1x, v1y, 0]);
    let v2 = new Vector3([v2x, v2y, 0]);
    drawVector(v1, 'red');
    drawVector(v2, 'blue');
}

function angleBetweenVectors(v1, v2) {
    let dotProduct = Vector3.dot(v1, v2);
    let mag1 = v1.magnitude();
    let mag2 = v2.magnitude();
    let radians = Math.acos(dotProduct / (mag1 * mag2));
    return radians * 180 / Math.PI;
}

function areaTriangle(v1, v2) {
    let crossProduct = Vector3.cross(v1, v2);
    let parallelogramArea = crossProduct.magnitude();
    return parallelogramArea / 2;

}

function handleDrawOperationEvent() {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    var v1x = parseFloat(document.getElementById('V1XCoor').value);
    var v1y = parseFloat(document.getElementById('V1YCoor').value);
    var v2x = parseFloat(document.getElementById('V2XCoor').value);
    var v2y = parseFloat(document.getElementById('V2YCoor').value);
    var operation = document.getElementById('operation').value;
    var scalar = parseFloat(document.getElementById('scalar').value);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    let v1 = new Vector3([v1x, v1y, 0]);
    let v2 = new Vector3([v2x, v2y, 0]);
    drawVector(v1, 'red');
    drawVector(v2, 'blue');

    let v3, v4;
    switch(operation) {
        case 'add':
            v3 = v1.add(v2);
            drawVector(v3, 'green');
            break;
        
        case 'sub':
            v3 = v1.sub(v2);
            drawVector(v3, 'green');
            break;
        
        case 'mul':
            v3 = v1.mul(scalar);
            v4 = v2.mul(scalar);
            drawVector(v3, 'green');
            drawVector(v4, 'green');
            break;
        
        case 'div':
            v3 = v1.div(scalar);
            v4 = v2.div(scalar);
            drawVector(v3, 'green');
            drawVector(v4, 'green');
            break;
        
        case 'agl':
            console.log("Angle between V1 and V2:", angleBetweenVectors(v1, v2));
            break;

        case 'are':
            console.log("Area is:", areaTriangle(v1, v2));
            break;

        case 'are':
            console.log("Area is:", areaTriangle(v1, v2));
            break;
        
        case 'mag':
            console.log("V1 magnitude:", v1.magnitude());
            console.log("V2 magnitude:", v2.magnitude());
            break; 
        
        case 'nor':
            drawVector(v1.normalize(), 'green');
            drawVector(v2.normalize(), 'green');
    }
    
}
