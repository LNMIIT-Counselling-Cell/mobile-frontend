import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
  const check = await tokenExpired()
  if (check) {
    const refreshtoken = await AsyncStorage.getItem("refreshToken");
    const accessToken = await AsyncStorage.getItem("accessToken");
    console.log("line 6 refresh token: " + refreshtoken);
    console.log("line 8 access token: " + accessToken);
    const token = await getValidTokenFromServer(refreshtoken);
    AsyncStorage.setItem("accessToken", token.accessToken);
    AsyncStorage.setItem("usrtok", token.idToken);
    AsyncStorage.setItem("expirationDate", JSON.stringify(newExpirationDate()));
    return token.idToken;
  } else {
    console.log("tokens.js 11 | token not expired");
    // const accessToken = await AsyncStorage.getItem("accessToken");
    const idToken = await AsyncStorage.getItem("usrtok");
    console.log("idtoken.js 19 | tok----  ", idToken);
    return idToken
  }
};

const newExpirationDate = () => {
  var expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  return expiration;
};

const tokenExpired = async () => {
  const now = Date.now();

  const expirationDate = JSON.parse(await AsyncStorage.getItem("expirationDate"))
  console.log("expirationDate: ", expirationDate);
  const expDate = new Date(expirationDate);

  console.log("expirationDate getTime: ", expDate.getTime());

  if (now > expDate.getTime()) {
    console.log("true")
    return true; // token expired
  }

  console.log("false")
  return false; // valid token
};

const getValidTokenFromServer = async (refreshToken) => {
  // get new token from server with refresh token
  try {
    const request = await fetch("https://ccelltestapi.herokuapp.com/getValidToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: refreshToken,
      }),
    });
    const token = await request.json();
    return token;
  } catch (error) {
    throw new Error("Issue getting new token", error.message);
  }
};
