export interface IUser {
  __v: number;
  _id: string;
  createdAt: string;
  email: string;
  firstname: string;
  lastname: string;
  profilePicture: string;
  updatedAt: string;
}

export interface ILocationResponse {
  lat: number;
  lng: number;
}

export interface IReport {
  __v: 0;
  _id: string;
  category: string;
  createdAt: string;
  description: string;
  location: ILocationResponse;
  title: string;
  updatedAt: string;
  user: IUser;
  userId: string;
}

export interface IPostPayload {
  title: string;
  description: string;
  category: string;
}
