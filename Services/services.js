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

export async function getUsuarioById(user) {
  let response = await fetch(`${URLbase}/usuarios/${id}`)
}