import { wrapPromise } from "./wrapPromise";

const fetchPerson = () => {
  return fetch("https://randomuser.me/api")
    .then(x => x.json())
    .then(x => x.results[0]);
};

const fetchNumber = async () => {
  return new Promise(res => setTimeout(() => res(Math.random()), 3000));
};

export const createResource = () => {
  return {
    person: wrapPromise(fetchPerson()),
    number: wrapPromise(fetchNumber())
  };
};
