/** --- solutions --- **/

let solutions = {};

solutions.objBully = function (someObj) {
  if ("a" in someObj) {
    someObj["b"] = someObj["a"];
    someObj["a"] = "";
  }
  return someObj;
}

solutions.objShare = function (someObj) {
  if ("a" in someObj) {
    someObj["b"] = someObj["a"];
  }
  delete someObj["c"];
  return someObj;
}

solutions.objAB = function (someObj) {
  if ("a" in someObj && "b" in someObj) {
    let combinedString = someObj["a"] + someObj["b"];
    someObj["ab"] = combinedString;
  }
  return someObj;
}

solutions.topping1 = function (someObj) {
  if ("ice cream" in someObj) {
    someObj["ice cream"] = "cherry";
  }
  someObj["bread"] = "butter";
  return someObj;
}

solutions.topping2 = function (someObj) {
  if ("ice cream" in someObj) {
    someObj["yogurt"] = someObj["ice cream"];
  }
  if ("spinach" in someObj) {
    someObj["spinach"] = "nuts";
  }
  return someObj;
}

solutions.topping3 = function (someObj) {
  if ("potato" in someObj) {
    someObj["fries"] = someObj["potato"];
  }
  if ("salad" in someObj) {
    someObj["spinach"] = someObj["salad"];
  }
  return someObj;
}

solutions.objAB2 = function (someObj) {
  if ("a" in someObj && "b" in someObj) {
    if (someObj["a"] === someObj["b"]) {
      delete someObj["a"];
      delete someObj["b"];
    }
  }
  return someObj;
}

solutions.objAB3 = function (someObj) {
  if ("a" in someObj && !("b" in someObj)) {
    someObj["b"] = someObj["a"];
  }
  else if (!("a" in someObj) && "b" in someObj) {
    someObj["a"] = someObj["b"];
  }
  return someObj;
}

solutions.objAB4 = function (someObj) {
  if ("a" in someObj && "b" in someObj) {
    aLength = someObj["a"].length;
    bLength = someObj["b"].length;

    if (aLength > bLength) {
      someObj["c"] = someObj["a"];
    }
    else if (bLength > aLength) {
      someObj["c"] = someObj["b"];
    }
    else {
      someObj["a"] = "";
      someObj["b"] = "";
    }
  }
  return someObj;
}

 module.exports = solutions;
