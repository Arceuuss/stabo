export type queryType = {
  input: string;
  setImage: React.Dispatch<React.SetStateAction<sstring | ArrayBuffer | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
