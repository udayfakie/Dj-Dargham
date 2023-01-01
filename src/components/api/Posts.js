import axios from "axios";

export default axios.create({
  baseURL:
    "https://graph.facebook.com/v15.0/17866681364783155?fields=username,media_url,permalink,children&access_token=EAAJqkH24Hn4BANkw1GNoH1GDZC3eX5dS6y3NtdvOFhFQTjErX7SPGQ65KeG1FP0ZC4MO6p411vVHDZClkBEizivNg8FNf4EKs0cC4BjbaHhRUEXEORVU9nkGKHgtX6ZClGcvvoyGK3LBTZBNxghszl3ZCFC4XGZBlyHIAfwQwWsLjlg68mFOxOrXrLIYBiNWJwUc5GZB6uM7m2OEmZCqqWyv2q2ZBO7BLnmnjuMJJCAdOCyO2KJB5PwnfYTmI2ZAfFOm2kZD",
    
  });