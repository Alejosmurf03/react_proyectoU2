import { createContext } from "react"
import axios from "axios"

const baseURL = "http://20.115.89.250:8000/";

export const Context = createContext()

export function ContextProvider(props) {
    function getBaseURL() {
        return baseURL;
    }

    function manejarSubmitLogin(form) {
        return new Promise((resolve, reject) => {
            let code = ""

            axios
                .post(baseURL + "api/token/", form)
                .then((response) => {
                    if (response.statusText === "OK") {
                        code = response.statusText
                        let data = response.data
                        resolve(data)
                    } else if (response.statusText == "Unauthorized") {
                        resolve(null)
                    }
                })
                .catch((err) => {
                    resolve(null)
                    console.log(err);
                });
        })
    }

    return (
        <Context.Provider
            value={{
                manejarSubmitLogin
            }}
        >
            {props.children}
        </Context.Provider>
    );
}