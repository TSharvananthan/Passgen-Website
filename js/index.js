function generatePassword() {
  characters_in_pass =  Math.floor((Math.random() * 15) + 10);
  let characters = ["!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~","a","b","c","d","e",
  "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
  "R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"]

  let password = ""

  for (char_count = 0; char_count <= characters_in_pass; char_count++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }


  password_tag = document.getElementById('password')
  password_tag.innerText = password;
}
