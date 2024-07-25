export default function generatePass() {
    let password: string = '';
    let characters: string = 'Aa@$#123456789abcdefghijFfGHIJKkLMNOPpZz!';
    const passLength = 18;
    for (let i = 0; i < passLength; i++) {
        password += characters.charAt(Math.floor(Math.random()* characters.length));
        
    }
    return password;
}