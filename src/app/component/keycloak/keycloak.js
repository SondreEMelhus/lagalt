import Keycloak from "keycloak-js";

/**
 * Keycloak object used to handle user login, registration and logout
 */
const keycloak = new Keycloak("/keycloak_dev.json");

/**
 * Method used to intialize a keycloak object with the proper config file
 */
export const initialize = () => {
  const config = {
    checkLoginIframe: false,
    onLoad: "check-sso"
  };
  return keycloak.init(config);
};

export default keycloak;