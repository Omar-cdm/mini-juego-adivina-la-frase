const request = new Request("https://thesimpsonsapi.com/api/characters");

export async function traerObejto () {
    const homer = await fetch(request)
    const homerObjeto = await homer.json()
    const arrayObjetos = Object.values(homerObjeto.results)
    return arrayObjetos.filter((objeto) => objeto.phrases != "" && objeto.id != 10);
};