import { apiLogin } from './ApiCenter';
import router from "./router";
import axios from 'axios'

export async function login(usernameOrEmail: string, password: string) {
  const didLogin = await apiLogin(usernameOrEmail, password);
  if (didLogin) {
    localStorage.setItem("token", "test");
    router.push("/");
    return true;
  } else {
    return false;
  }
}

export function didLogin(): boolean {
  return !!localStorage.getItem("token"); // !!"" =  false
}

export async function getToken(): Promise<string | null> {
  return localStorage.getItem('token');
}

axios.interceptors.request.use(async function (config) {
  const token = await getToken();
  if (token) {
    config.headers["access-token"] = token;
  }
  return config;
});
