const URLbase = "http://localhost:3000";

export async function getUsuarios(){
    let response = await fetch(`${URLbase}/usuarios`);
    const data = response.json();
    return data;
}


export async function getUsuarioById(id) {
    let response = await fetch(`${URLbase}/usuarios/${id}`);
    const data = response.json();
    return data;
}

export async function agregarUsuario(user) {
  let response = await fetch(`${URLbase}/usuarios`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user) 
    });
}

export async function updateUSer(id,user) {
  await fetch(`${URLbase}/users/${id}`,{
    method: "PUT",
    headers: {
      "content-type": "aplication/json"
    },
    body: JSON.stringify(user)
  })
}


export async function deleteUser(id){
  await fetch(`${URLbase}/users/${id}`,{
    method: "DELETE"
  })
}