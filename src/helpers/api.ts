import axios, {AxiosResponse} from 'axios';
import {queryType} from '../types/types';
import {API_URL, API_TOKEN} from '@env';

let response: AxiosResponse<any, any>;
export const handlePress = async ({
  input,
  setImage,
  setIsLoading,
  setProgress,
}: queryType) => {
  try {
    setIsLoading(true);
    setProgress(0.2);
    setTimeout(async () => {
      response = await axios.post(
        API_URL,
        {inputs: input},
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN} `,
          },
          responseType: 'blob',
        },
      );
      setProgress(0.5);
      if (response.status === 200) {
        const blob = await response.data;
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result;
          setImage(base64data);
          setIsLoading(false);
        };
        reader.readAsDataURL(blob); // convert to base64 for preview image
      }
      setProgress(1);
    }, 5000);
  } catch (error) {
    console.error(error);
  }
};
