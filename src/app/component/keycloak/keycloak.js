import Keycloak from "keycloak-js";

// NB! Leave the / or the relative path will use the Router path
const keycloak = new Keycloak("/keycloak.json");

export const initialize = () => {
  const config = {
    checkLoginIframe: false,
    onLoad: "check-sso"
  };
  return keycloak.init(config);
};
/** @type { Keycloak } keycloak */
export default keycloak;