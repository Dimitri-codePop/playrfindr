
export function getAge(date) { 
    var diff = Date.now() - Date.parse(date);
    var age = new Date(diff); 
    return Math.abs(age.getUTCFullYear() - 1970);
}
