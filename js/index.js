/*
TODO:
  -Implement password copying to clipboard
  -implement dynamic description
*/
function generatePassword() {
  // generate password
  characters_in_pass = Math.floor((Math.random() * 15) + 13);
  let characters = [
    "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\",
    "]", "^", "_", "`", "{", "|", "}", "~", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
  ]
  let password = ""
  for (char_count = 0; char_count <= characters_in_pass; char_count++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  password_tag = document.getElementById('password')
  password_tag.innerText = password;

  // calculates time to crack
  time_taken = document.getElementById('description-time');
  const entropy_bits_per_character = 6.55458885; // calculated using log base 2(x) assuming x is the number of characters in the set (in this case 94)
  const password_length = password.length;

  let entropy = entropy_bits_per_character * password.length;
  let seconds = BigInt(Math.pow(2, entropy) / 2800000000);

  // conversions
  // TODO - clean this shit
  /* So I'm gonna get rid of this for now. But Ill hold onto the code so that we dont have to do the math again
  let millennium = seconds / 31536000000n;
  seconds -= millennium * 31536000000n;
  let centuries = seconds / 3153600000n;
  seconds -= centuries * 3153600000n;
  let decades = seconds / 315360000n;
  seconds -= decades * 315360000n;
  let years = seconds / 31536000n;
  seconds -= years * 31536000n;
  let days = seconds / 86400n;
  seconds -= days * 86400n;
  let hrs = seconds / 3600n;
  seconds -= hrs * 3600n;
  let mnts = seconds / 60n;
  seconds -= mnts * 60n;
  time_taken.innerText = millennium + " Millennium, " + centuries + " Centuries, " + decades + " Decades, " + years + " Years, " + days + " Days, " + hrs + " Hours, " + mnts + " Minutes, " + seconds + " Seconds";
  */

  let years = seconds / 31536000n;
  time_taken.innerText = years + "     Years";

}

// binding spacebar to generatePassword() function
document.onkeydown = function (e) {
  if (e.which == 32 || e.keyCode == 32) {
    generatePassword()
  } else {
    return;
  }
}

function copyToClipboard() {
  let password_text = document.getElementById('password').innerText;
  temp_textfield = document.getElementById('copy');
  temp_textfield.value = password_text;
  temp_textfield.select();
  document.execCommand("copy");
}
