/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                navbar: "500px"
            },
            colors: {
                body: "var(--main-bg-color)",

                "default-1": "var(--default-1)",
                "default-2": "var(--default-2)",
                "default-3": "var(--default-3)",
                "default-4": "var(--default-4)",
                "default-5": "var(--default-5)",
                "default-6": "var(--default-6)",
                "default-7": "var(--default-7)",
                "default-8": "var(--default-8)",
                "default-9": "var(--default-9)",
                "default-10": "var(--default-10)",
                "default-11": "var(--default-11)",
                "default-12": "var(--default-12)",
                "default-13": "var(--default-13)",
                "default-14": "var(--default-14)",
                "default-15": "var(--default-15)",
                "default-16": "var(--default-16)",
                "default-17": "var(--default-17)",
                "default-18": "var(--default-18)",

                "default-1-dark": "var(--default-1-dark)",
                "default-2-dark": "var(--default-2-dark)",
                "default-3-dark": "var(--default-3-dark)",
                "default-4-dark": "var(--default-4-dark)",
                "default-5-dark": "var(--default-5-dark)",
                "default-6-dark": "var(--default-6-dark)",
                "default-7-dark": "var(--default-7-dark)",
                "default-8-dark": "var(--default-8-dark)",
                "default-9-dark": "var(--default-9-dark)",
                "default-10-dark": "var(--default-10-dark)",
                "default-11-dark": "var(--default-11-dark)",
                "default-12-dark": "var(--default-12-dark)",
                "default-13-dark": "var(--default-13-dark)",
                "default-14-dark": "var(--default-14-dark)",
                "default-15-dark": "var(--default-15-dark)",
                "default-16-dark": "var(--default-16-dark)",
                "default-17-dark": "var(--default-17-dark)",
                "default-18-dark": "var(--default-18-dark)",
            },
            keyframes: {
                spin: {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
                "fade-out": {
                    "0%": { opacity: "1" },
                    "80%": { opacity: "1" },
                    "100%": { opacity: "0" },
                },
                "infinite-scroll": {
                    "0%": { transform: "translate(100%, 0)" },
                    "100%": { transform: "translate(-170%, 0)" },
                },
                "blur-int-out": {
                    "0%": { opacity: "1" },
                    "50%": { opacity: "0.4" },
                    "100%": { opacity: "1" },
                },
            },
        },
        animation: {
            spin: "spin 0.7s ease-in-out infinite",
            "fade-out-spinner": "fade-out 2s ease-out forwards",
            "blur-in-out": "blur-int-out 2.7s ease-in-out infinite",
            "infinite-x-scroll": "infinite-scroll 4s linear infinite",
        },
    },
    plugins: [],
    darkMode: "selector",
};
