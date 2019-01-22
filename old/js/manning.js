const n = 0.013; // roughness coefficient 

let nominalDiameter = [150, 200, 250, 300, 375, 450, 525, 600, 675, 750, 825, 900, 975, 1050, 1200, 1350, 1500, 1650, 1800, 1950, 2100, 2250, 2400, 2550];
let actualDiameter = [152.4, 203.2, 254, 304.8, 381, 457.2, 533.4, 609.6, 685.8, 762, 838.2, 914.4, 990.6, 1066.8, 1219.2, 1371.6, 1524.0, 1676.4, 1828.8, 1981.2, 2133.6, 2286, 2438.4, 2590.8];    

function displayDiameters() {
  let selection = document.getElementById('diameters');
  for(var i = 0; i < nominalDiameter.length; i++) {
    let option = document.createElement('option');
    option.innerHTML = nominalDiameter[i];
    option.value = nominalDiameter[i];
    selection.appendChild(option);
  }
}

displayDiameters();

function selectedDiameters() {
  let diameterList = document.getElementById("diameters");
  let diameterChosen = diameterList.options[diameterList.selectedIndex].value;
  
  for (i=0; i < nominalDiameter.length; i++)
    if (actualDiameter[i]/diameterChosen === actualDiameter[i]/nominalDiameter[i])
      return calculationDiameter = actualDiameter[i];
  }

function calculateHydaulicRadius() {
  return hydraulicRadius = selectedDiameters()/1000/4;
}

function getSlope() {
  return slope = (document.getElementById('slope').value)/100
}

function calculateVelocity() {
  return velocity = (1/n) * ((calculateHydaulicRadius())**(2/3))*(getSlope()**(1/2)); //unit in m/sec
}

function calculateCapacity() {
  let crossSectionalArea = Math.PI * ((selectedDiameters()/1000/2)**2);
  return capacity = calculateVelocity() * crossSectionalArea; //units in m3/sec or x10^3 L/sec
}

function calculateCapacityLS() {
  return capacityLS = calculateCapacity() * 1000; //units in L/sec
}

document.getElementById('btn').onclick = function() {
    document.getElementById('velocity').value = calculateVelocity().toFixed(2);
    document.getElementById('capacity').value = calculateCapacity().toFixed(3);
    document.getElementById('capacityL-S').value = calculateCapacityLS().toFixed(2);
}


//User can press enter on slope to calculate Velocity and Slope
// Get the input field
var input = document.getElementById("slope");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("btn").click();
  }
});



// function compareDiameters() {
//     var ratios = [];
//     for (i=0; i < actualDiameter.length; i++) {
//       ratios[i] = (actualDiameter[i]/nominalDiameter[i]);
//       console.log(ratios[i]);
//     }
// }

// compareDiameters();

