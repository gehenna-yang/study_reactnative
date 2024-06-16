import axiosInstance from './axios';
import {Category, Profile} from '../types/domain';
import {getEncryptStorage} from '../utils';
import {storageKeys} from '../constants';

type ReqUser = {
  email: string;
  pwd: string;
};

const postSignup = async ({email, pwd}: ReqUser): Promise<void> => {
  const {data} = await axiosInstance.post('/auth/signup', {
    email,
    pwd,
  });

  return data;
};

type ResToken = {
  accessToken: string;
  refreshToken: string;
};

const postLogin = async ({email, pwd}: ReqUser): Promise<ResToken> => {
  const {data} = await axiosInstance.post('/auth/signin', {
    email,
    pwd,
  });

  return data;
};

type ResProfile = Profile & Category;

const getProfile = async (): Promise<ResProfile> => {
  const {data} = await axiosInstance.get('/auth/me');

  return data;
};

const getAccessToken = async (): Promise<ResToken> => {
  const refreshToken = await getEncryptStorage(storageKeys.REFRESH_TOKEN);
  const {data} = await axiosInstance.get('/auth/refresh', {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  return data;
};

const logout = async () => {
  await axiosInstance.post('/auth/logout');
};

export {postSignup, postLogin, getProfile, getAccessToken, logout};
export type {ReqUser, ResProfile, ResToken};
