import Axios, { AxiosResponse } from "axios";

export const baseUrl = "http://localhost:3000/";

export interface AuthErrorResponse {
  code: number;
  message: string;
}

export interface AuthOkResponse {
  token: string;
}

export interface UserLogin {
  loginId: string;
  password: string;
  email: string;
  id: number;
}

export interface UserRegister {
  user: string;
  password: string;
  email: string;
}

export interface SingleVideo {
  id: number;
  title: string;
  url: string;
  poster: string;
  price: number;
}

export async function apiSignUp(
  username: string,
  password: string,
  email: string
) {
  const users: AxiosResponse<UserLogin[]> = await Axios.get(baseUrl + "users");
  const usernameExists = users.data.find((x) => x.loginId == username);
  const emailExists = users.data.find((x) => x.email == email);
  if (usernameExists) {
    return { error: "username is taken" };
  }
  if (emailExists) {
    return { error: "email is taken" };
  }
  const response: AxiosResponse<any> = await Axios.post(baseUrl + "users", {
    loginId: username,
    password: password,
    email: email,
  });
  localStorage.setItem("token", "test");
  return response.data;
}

export async function apiLogin(username: string, password: string) {
  const response: AxiosResponse<UserLogin[]> = await Axios.get(
    baseUrl + "users"
  );

  const signedInUser = response.data.find((x) => x.loginId == username);
  if (signedInUser && signedInUser.password == password) {
    return true;
  } else return false;
}

function generateRandomPrice() {
  return Math.ceil(Math.random() * 101);
}

export async function getVideos(searchText = ""): Promise<SingleVideo[]> {
  return [
    {
      id: 1,
      title: "stream1",
      url: "//vjs.zencdn.net/v/oceans.webm",
      poster: "https://picsum.photos/400/251",
      price: generateRandomPrice(),
    },
    {
      id: 2,
      title: "stream2",
      url: "//vjs.zencdn.net/v/oceans.webm",
      poster: "https://picsum.photos/400/252",
      price: generateRandomPrice(),
    },
    {
      id: 3,
      title: "stream3",
      url: "//vjs.zencdn.net/v/oceans.webm",
      poster: "https://picsum.photos/400/253",
      price: generateRandomPrice(),
    },
    {
      id: 4,
      title: "stream4",
      url: "//vjs.zencdn.net/v/oceans.webm",
      poster: "https://picsum.photos/400/254",
      price: generateRandomPrice(),
    },
    {
      id: 5,
      title: "stream5",
      url: "//vjs.zencdn.net/v/oceans.webm",
      poster: "https://picsum.photos/400/255",
      price: generateRandomPrice(),
    },
    {
      id: 6,
      title: "stream6",
      url: "//vjs.zencdn.net/v/oceans.webm",
      poster: "https://picsum.photos/400/256",
      price: generateRandomPrice(),
    },
    {
      id: 7,
      title: "stream7",
      url: "//vjs.zencdn.net/v/oceans.webm",
      poster: "https://picsum.photos/400/257",
      price: generateRandomPrice(),
    },
    {
      id: 8,
      title: "stream8",
      url: "//vjs.zencdn.net/v/oceans.webm",
      poster: "https://picsum.photos/400/258",
      price: generateRandomPrice(),
    },
    {
      id: 9,
      title: "stream9",
      url: "//vjs.zencdn.net/v/oceans.webm",
      poster: "https://picsum.photos/400/259",
      price: generateRandomPrice(),
    },
    {
      id: 10,
      title: "stream10",
      url: "//vjs.zencdn.net/v/oceans.webm",
      poster: "https://picsum.photos/400/260",
      price: generateRandomPrice(),
    },
  ].filter(v => v.title.includes(searchText));
}

export async function getVideoById(
  videoId: number
): Promise<SingleVideo | undefined> {
  const allVideos = await getVideos();
  return allVideos.find((v) => v.id === videoId);
}

export interface SingleComment {
  from: string;
  text: string;
  id: number;
}

export async function getCommentsForVideo(id: number): Promise<SingleComment[]> {
  const response = await Axios.get("https://jsonplaceholder.typicode.com/comments?_limit=15")
  return response.data;

}
