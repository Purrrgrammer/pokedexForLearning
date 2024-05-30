export const getInitialFormObjects = (formArr: any) => {
  return formArr.reduce((r: any, v: any) => ({ ...r, [v.name]: "" }), {});
};

export const objectToArray = (arr: any) => {
  let mmock: any = [];
  Object.entries(arr).forEach((el) => {
    mmock.push({ pokemon_id: el[0], score: el[1] });
  });
  console.log("mmock", mmock);
  return mmock;
};
