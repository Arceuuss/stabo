import axios from 'axios';
import {queryType} from '../types/types';
import {API_URL, API_TOKEN} from '@env';
export const handlePress = async ({
  input,
  setImage,
  setIsLoading,
}: queryType) => {
  try {
    setIsLoading(true);

    const response = await axios.post(
      API_URL,
      {inputs: input},
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN} `,
        },
        responseType: 'blob',
      },
    );

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
  } catch (error) {
    console.error(error);
  }
};
