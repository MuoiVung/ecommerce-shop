import CryptoJS from "crypto-js";

const SECRET_KEY = process.env.REACT_APP_SECRET_KEY || "";

const encryptAndSaveData = (name: string, data: any) => {
  const encrypted = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    SECRET_KEY
  ).toString();
  localStorage.setItem(name, encrypted);
  return encrypted;
};

const encryptAndReturnKey = (key: string) => {
  return CryptoJS.AES.encrypt(JSON.stringify(key), SECRET_KEY).toString();
};

const decryptData = (name: string) => {
  const encrypted = localStorage.getItem(name);

  if (!encrypted) {
    return null;
  }

  const decrypted = CryptoJS.AES.decrypt(encrypted, SECRET_KEY).toString(
    CryptoJS.enc.Utf8
  );

  return JSON.parse(decrypted);
};

const sessionEncryptData = (name: string, data: any) => {
  const encrypted = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    SECRET_KEY
  ).toString();
  sessionStorage.setItem(name, encrypted);
};

const sessionDecryptData = (name: string) => {
  const encrypted = sessionStorage.getItem(name);

  if (!encrypted) {
    return null;
  }

  const decrypted = CryptoJS.AES.decrypt(encrypted, SECRET_KEY).toString(
    CryptoJS.enc.Utf8
  );

  return JSON.parse(decrypted);
};

export {
  encryptAndSaveData,
  decryptData,
  sessionEncryptData,
  sessionDecryptData,
  encryptAndReturnKey,
};
