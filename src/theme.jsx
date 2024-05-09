import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === "light"
        ? {
            // palette values for light mode
            myColor: {
                main: "#f6f9fc",
            },
            bbg:{
                main:"#f6f6f6"
            },
            
            text: {
                primary: "#2B3445",
            },
            neutral: {
                main: "#64748B",
            },

            favColor: {
                main: grey[300],
            },
            }
        : {
          // palette values for dark mode
            myColor: {
                main: "#252b32",
            },
            bbg:{
                main:"#1d2021"
            },
            neutral: {
                main: "#64748B",
            },

            favColor: {
                main: grey[800],
            },
            text: {
                primary: "#fff",
            },
            }),
    },
});

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {},
    });

    export const useMode = () => {
    const [mode, setMode] = useState(
        localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
    );

    const colorMode = useMemo(
        () => ({
        toggleColorMode: () =>
            setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    return [theme, colorMode];
};