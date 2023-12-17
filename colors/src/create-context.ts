import React from "react";

export const createContext = <T extends {}>() => {
    const Context = React.createContext<T | undefined>(undefined);

    const useContext = () => {
        const ctx = React.useContext(Context);

        if (!ctx) {
            throw new Error("useContext must be used within a Provider");
        }

        return ctx;
    }

    return [useContext, Context.Provider] as const;
};
