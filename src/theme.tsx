import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles"

export const tokens = (mode: string) => ({
   ...(mode === 'dark'
    ? {
        black: {
            100: "#d4d3d3",
            200: "#a8a7a8",
            300: "#7d7a7c",
            400: "#514e51",
            500: "#262225",
            600: "#1e1b1e",
            700: "#171416",
            800: "#0f0e0f",
            900: "#080707"
        },
        darkblue: {
            100: "#d4d7db",
            200: "#a9aeb7",
            300: "#7f8693",
            400: "#545d6f",
            500: "#29354b",
            600: "#212a3c",
            700: "#19202d",
            800: "#10151e",
            900: "#080b0f"
        },
        blue: {
            100: "#dbe7e9",
            200: "#b7cfd3",
            300: "#94b8bd",
            400: "#70a0a7",
            500: "#4c8891",
            600: "#3d6d74",
            700: "#2e5257",
            800: "#1e363a",
            900: "#0f1b1d"
        },
        gray: {
            100: "#ecf4f3",
            200: "#d9e9e7",
            300: "#c6dedb",
            400: "#b3d3cf",
            500: "#a0c8c3",
            600: "#80a09c",
            700: "#607875",
            800: "#40504e",
            900: "#202827"
        },
        white: {
            100: "#fbfbfb",
            200: "#f7f7f6",
            300: "#f4f3f2",
            400: "#f0efed",
            500: "#ecebe9",
            600: "#bdbcba",
            700: "#8e8d8c",
            800: "#5e5e5d",
            900: "#2f2f2f"
        },
    } : {
        black: {
            100: "#080707",
            200: "#0f0e0f",
            300: "#171416",
            400: "#1e1b1e",
            500: "#262225",
            600: "#514e51",
            700: "#7d7a7c",
            800: "#a8a7a8",
            900: "#d4d3d3",
        },
        darkblue: {
            100: "#080b0f",
            200: "#10151e",
            300: "#19202d",
            400: "#212a3c",
            500: "#29354b",
            600: "#545d6f",
            700: "#7f8693",
            800: "#a9aeb7",
            900: "#d4d7db",
        },
        blue: {
            100: "#0f1b1d",
            200: "#1e363a",
            300: "#2e5257",
            400: "#3d6d74",
            500: "#4c8891",
            600: "#70a0a7",
            700: "#94b8bd",
            800: "#b7cfd3",
            900: "#dbe7e9",
        },
        gray: {
            100: "#202827",
            200: "#40504e",
            300: "#607875",
            400: "#80a09c",
            500: "#a0c8c3",
            600: "#b3d3cf",
            700: "#c6dedb",
            800: "#d9e9e7",
            900: "#ecf4f3",
        },
        white: {
            100: "#2f2f2f",
            200: "#5e5e5d",
            300: "#8e8d8c",
            400: "#bdbcba",
            500: "#ecebe9",
            600: "#f0efed",
            700: "#f4f3f2",
            800: "#f7f7f6",
            900: "#fbfbfb",
        },

    }),
});

export const themeSettings = (mode: string) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...( mode === 'dark'
            ? {
                primary: {
                    main: colors.black[500],
                },
                secondary: {
                    main: colors.darkblue[500],
                },
                neutral: {
                    dark: colors.black[700],
                    main: colors.black[500],
                    light: colors.black[100]
                },
                background: {
                    default: colors.darkblue[600]
                }
            } : {
                primary: {
                    main: colors.black[100],
                },
                secondary: {
                    main: colors.darkblue[100],
                },
                neutral: {
                    dark: colors.black[300],
                    main: colors.black[200],
                    light: colors.black[100]
                },
                background: {
                    default: colors.white[300]
                }
            }),
        }
    }
}
