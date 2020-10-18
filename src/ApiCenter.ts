import Axios, { AxiosResponse } from 'axios';


export const baseUrl = 'https://spect8-streams-backend.dev.vaudience.net/api/';

export interface AuthErrorResponse {
  code: number;
  message: string;
}

export interface AuthOkResponse {
  token: string;
}

export interface UserLogin{
    user: string;
    password: string;
}

export interface UserRegister{
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

export async function apiSignUn(username: string, password: string, email: string){
  const response: AxiosResponse<AuthOkResponse> = await Axios.post(baseUrl + 'auth/signup', {
    "loginId" : username,
    "password" : password,
    "email" : email
  });
  return response.data;
}

export async function apiLogin(username: string, password: string) {
  const response: AxiosResponse<AuthOkResponse> = await Axios.post(baseUrl + 'auth/signin', {
    "loginId" : username,
    "password" : password
  });
  return response.data;
}

function generateRandomPrice() {
  return Math.ceil(Math.random() * 101);
}


export async function getVideos(): Promise<SingleVideo[]> {
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
  ];
}

export async function getVideoById(videoId: number): Promise<SingleVideo | undefined>  {
  const allVideos = await getVideos();
  return allVideos.find(v => v.id === videoId);
}

export interface SingleComment {
  from: string;
  text: string;
  id: number;
}

export async function getCommentsForVideo(id: number): Promise<SingleComment[]> {
  return [{id: 0, from: 'user1', text: 'first comment'}, {id: 1,from: 'user2', text: 'second comment'}];
}