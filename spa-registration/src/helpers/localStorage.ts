export const saveToLocalStorage = <T>(name: string, object: T) => {
  localStorage.setItem(name, JSON.stringify(object));
};

export const getFromLocalStorage = (name: string) => JSON.parse(localStorage.getItem(name));
