
function registerUser(name: string, birthYear: number): void{
    if (checkAge(birthYear))
        console.log(name,"successfully registered!");
    else
        console.log("Resigration failed")
}
function checkAge(birthYear: number): boolean{
    const current_year = new Date().getFullYear()
    if(current_year - birthYear >= 18)
        return true
    else
        return false
}
registerUser("Vasanthi",2004)
export{}