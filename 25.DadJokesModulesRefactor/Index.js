export async function handleJokes(){
    return await fetch("https://icanhazdadjoke.com",{
        headers:{Accept:'application/json'}
    }).then(response=>response.json());
}