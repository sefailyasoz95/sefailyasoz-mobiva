import axios from 'axios';
import {API_BASE_URL} from '../../Constants/api';
import {GetPostsParams} from '../../Constants/types';

export const GetPostsAsync = async (data: GetPostsParams) => {
  let response;
  try {
    response = await axios.get(
      `${API_BASE_URL}?limit=${data.limit}&after=${
        data.after ? data.after : null
      }`,
    );
    return response.data;
  } catch (error) {
    console.log('error: ', error);

    return error;
  }
};
