import router from "./router";

export function login(token: string) {
    localStorage.setItem('token', token);
    router.push("/home")
}
function didLogin(): boolean {
    return !!localStorage.getItem("token"); // !!"" =  false
}
