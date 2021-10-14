
const avatarUrl = `https://api.github.com/users/diogocroxo`

fetch(avatarUrl)
.then((response) => response.json())
        .then((data) => {
         
              const avatarPerfil = document.getElementById("avatarPerfil");
            
              const avatar = document.createElement("img");
              avatar.src = data.avatar_url;
              avatar.classList.add("avatarId");
                
              avatarPerfil.append(avatar);

 });

  

  

