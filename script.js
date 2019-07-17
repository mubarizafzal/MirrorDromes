

// The functions used for the iterative method begin here:

function search(s, j, i, result) {
  if (j - i > 1) {
    var total = 0;
    for (var k = 1; k <= ((j - i) / 2); k++) {
      if (s[i + k] == 'i' || s[i + k] == 'l' || s[i + k] == 'm' || s[i + k] == 'n' || s[i + k] == 'o' || s[i + k] == 't' || s[i + k] == 'u' || s[i + k] == 'v' || s[i + k] == 'w' || s[i + k] == 'x') {
        if (s[i + k] == s[j - k]) {
          total = total + 1;
        }
      }
      if ((s[i + k] == 'b' && s[j - k] == 'd') || (s[i + k] == 'd' && s[j - k] == 'b')) {
        total = total + 1;
      }
      if ((s[i + k] == 'p' && s[j - k] == 'q') || (s[i + k] == 'q' && s[j - k] == 'p')) {
        total = total + 1;
      }
      if ((s[i + k] == 's' && s[j - k] == 'z') || (s[i + k] == 'z' && s[j - k] == 's')) {
        total = total + 1;
      }
    }
    if (total == k - 1) {
      result.push(s.slice(i, j + 1));
    }
  } else {
    result.push(s.slice(i, j + 1));
  }
}

function mirrorDrome() {
  var s = document.forms["calc"]["sentenceI"].value;
  var result = [];
  for (var i = 0; i <= s.length; i++) {
    for (var j = i + 1; j <= s.length; j++) {
      if (s[i] == 'i' || s[i] == 'l' || s[i] == 'm' || s[i] == 'n' || s[i] == 'o' || s[i] == 't' || s[i] == 'u' || s[i] == 'v' || s[i] == 'w' || s[i] == 'x') {
        if (s[i] == s[j]) {
          search(s, j, i, result);
        }
      }
      if ((s[i] == 'b' && s[j] == 'd') || (s[i] == 'd' && s[j] == 'b')) {
        search(s, j, i, result);
      }
      if ((s[i] == 'p' && s[j] == 'q') || (s[i] == 'q' && s[j] == 'p')) {
        search(s, j, i, result);
      }
      if ((s[i] == 's' && s[j] == 'z') || (s[i] == 'z' && s[j] == 's')) {
        search(s, j, i, result);
      }
    }
    if (s[i] == 'i' || s[i] == 'l' || s[i] == 'm' || s[i] == 'n' || s[i] == 'o' || s[i] == 't' || s[i] == 'u' || s[i] == 'v' || s[i] == 'w' || s[i] == 'x') {
      result.push(s[i]);
    }
  }
  if (result.length > 0) {
    document.getElementById("outI").innerHTML = result;
  } else {
    document.getElementById("outI").innerHTML = "No MirrorDromes were found in the sentence.";
  }
}

// The functions used for the recursive method begin here:

function mirrorCheck(s) {
  if (s.length <= 1) {
    if (s == 'i' || s == 'l' || s == 'm' || s == 'n' || s == 'o' || s == 't' || s == 'u' || s == 'v' || s == 'w' || s == 'x') {
      return true;
    } else {
      return false;
    }
  } else {
    if (mirror(s) === true) {
      return true;
    } else {
      return false;
    }
  }
}

function mirror(s) {
  var j = s.length - 1;
  if (s.length > 0) {
    if ((s[0] == 'b' && s[j] == 'd') || (s[0] == 'd' && s[j] == 'b')) {
      return mirror(s.slice(1, j));
    } else if (s[0] == 'i' || s[0] == 'l' || s[0] == 'm' || s[0] == 'n' || s[0] == 'o' || s[0] == 't' || s[0] == 'u' || s[0] == 'v' || s[0] == 'w' || s[0] == 'x') {
      if (s[0] == s[j]) {
        return mirror(s.slice(1, j));
      }
    } else if ((s[0] == 'p' && s[j] == 'q') || (s[0] == 'q' && s[j] == 'p')) {
      return mirror(s.slice(1, j));
    } else if ((s[0] == 's' && s[j] == 'z') || (s[0] == 'z' && s[j] == 's')) {
      return mirror(s.slice(1, j));
    } else {
      return false;
    }
  } else {
    return true;
  }
}

function recursive1(s, result) {
  if (mirrorCheck(s) === true) {
    result.push(s);
  }
  if (s.length > 1) {
    return recursive1(s.slice(1, s.length), result);
  }
}

function recursive2(s, result) {
  if (s.length >= 1) {
    recursive1(s, result);
    recursive2(s.slice(0, s.length - 1), result);
  }
}

function recursiveMirrorDrome() {
  var s = document.forms["calc"]["sentenceR"].value;
  var result = [];
  recursive2(s, result);
  if (result.length > 0) {
    document.getElementById("outR").innerHTML = result;
  } else {
    document.getElementById("outR").innerHTML = "No MirrorDromes were found in the sentence.";
  }
}