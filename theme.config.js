import { useRouter } from "next/router";

const Logo = ({ height }) => (
    <svg
        viewBox="0 0 200 200"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinejoin: 'round',
            strokeMiterlimit: 2
        }}
        height={height * 2}
    >
        <path
            d="M100,0.078c-27.167,0 -30.583,0.125 -41.25,0.584c-10.625,0.5 -17.917,2.208 -24.25,4.666c-6.672,2.513 -12.716,6.452 -17.708,11.542c-5.09,4.993 -9.029,11.036 -11.542,17.708c-2.5,6.334 -4.167,13.625 -4.667,24.25c-0.458,10.667 -0.583,14.084 -0.583,41.25c0,27.084 0.125,30.542 0.583,41.167c0.5,10.667 2.209,17.917 4.667,24.292c2.513,6.672 6.452,12.715 11.542,17.708c4.992,5.09 11.036,9.029 17.708,11.542c6.333,2.458 13.625,4.166 24.25,4.625c10.667,0.5 14.083,0.583 41.25,0.583c27.083,-0 30.542,-0.083 41.167,-0.583c10.666,-0.5 17.916,-2.167 24.291,-4.625c6.672,-2.513 12.716,-6.452 17.709,-11.542c5.089,-4.993 9.028,-11.036 11.541,-17.708c2.459,-6.375 4.167,-13.625 4.625,-24.292c0.5,-10.625 0.584,-14.042 0.584,-41.208c-0,-27.125 -0.084,-30.542 -0.584,-41.209c-0.5,-10.625 -2.166,-17.916 -4.625,-24.25c-2.513,-6.672 -6.452,-12.715 -11.541,-17.708c-4.993,-5.09 -11.037,-9.029 -17.709,-11.542c-6.375,-2.5 -13.625,-4.166 -24.291,-4.666c-13.714,-0.593 -27.442,-0.788 -41.167,-0.584Zm0,18c26.667,0 29.833,0.125 40.375,0.584c9.75,0.458 15,2.083 18.542,3.458c4.666,1.792 8,3.958 11.5,7.5c3.324,3.212 5.886,7.127 7.5,11.458c1.333,3.542 3,8.834 3.416,18.584c0.5,10.541 0.584,13.708 0.584,40.416c-0,26.667 -0.084,29.834 -0.584,40.375c-0.416,9.75 -2.083,15 -3.416,18.542c-1.608,4.346 -4.171,8.276 -7.5,11.5c-3.224,3.329 -7.154,5.892 -11.5,7.5c-3.5,1.333 -8.792,3 -18.542,3.417c-10.542,0.5 -13.75,0.583 -40.417,0.583c-26.666,-0 -29.833,-0.083 -40.416,-0.583c-9.709,-0.417 -15,-2.084 -18.542,-3.417c-4.346,-1.608 -8.276,-4.171 -11.5,-7.5c-3.329,-3.224 -5.892,-7.154 -7.5,-11.5c-1.333,-3.5 -2.958,-8.792 -3.417,-18.542c-0.587,-13.463 -0.781,-26.941 -0.583,-40.416c0,-26.667 0.125,-29.834 0.583,-40.417c0.459,-9.708 2.084,-15 3.459,-18.542c1.607,-4.346 4.171,-8.276 7.5,-11.5c3.211,-3.324 7.127,-5.886 11.458,-7.5c3.542,-1.333 8.833,-2.958 18.583,-3.416c10.542,-0.459 13.709,-0.584 40.417,-0.584Zm0,30.625c-28.161,0 -51.333,23.173 -51.333,51.334c-0,28.16 23.172,51.333 51.333,51.333c28.161,-0 51.333,-23.173 51.333,-51.333c0,-28.161 -23.172,-51.334 -51.333,-51.334Zm0,84.709c-18.286,-0 -33.333,-15.048 -33.333,-33.334c-0,-18.286 15.047,-33.333 33.333,-33.333c18.286,-0 33.333,15.047 33.333,33.333c0,18.286 -15.047,33.334 -33.333,33.334Zm65.333,-86.667c0,-6.583 -5.417,-12 -12,-12c-6.583,-0 -12,5.417 -12,12c0,6.583 5.417,12 12,12c6.583,-0 12,-5.417 12,-12Z"
            style={{ fill: 'url(#_Linear1)', fillRule: 'nonzero' }}
        />
        <defs>
            <linearGradient
                id="_Linear1"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(199.917,0,0,199.995,0,99.9975)"
            >
                <stop offset="0" style={{ stopColor: '#a955f7', stopOpacity: 1 }} />
                <stop offset="1" style={{ stopColor: '#eb489b', stopOpacity: 1 }} />
            </linearGradient>
        </defs>
    </svg>
);

export default {
    projectLink: "https://github.com/itroger/doc",
    docsRepositoryBase: "https://github.com/itroger/doc",
    titleSuffix: " – 文档",
    search: true,
    unstable_flexsearch: true,
    floatTOC: true,
    feedbackLabels: "feedback",
    logo: () => {
        return (
            <>
                <Logo height={12} />
                <span
                    className="mx-2 font-extrabold hidden md:inline select-none"
                    title=""
                >
          文档
        </span>
            </>
        );
    },
    head: ({ title, meta }) => {
        const { route } = useRouter();

        const ogImage =
            meta.image ||
            `https://swr-card.vercel.app${
                /\/index\.+/.test(route) ? "" : "?title=" + encodeURIComponent(title)
            }`;

        return (
            <>
                {/* Favicons, meta */}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/favicon/safari-pinned-tab.svg"
                    color="#000000"
                />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta httpEquiv="Content-Language" content="en" />
                <meta
                    name="description"
                    content={
                        meta.description ||
                        "SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again."
                    }
                />
                <meta
                    name="og:description"
                    content={
                        meta.description ||
                        "SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again."
                    }
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@vercel" />
                <meta name="twitter:image" content={ogImage} />
                <meta
                    name="og:title"
                    content={
                        title ? title + " – SWR" : "SWR: React Hooks for Data Fetching"
                    }
                />
                <meta name="og:image" content={ogImage} />
                <meta name="apple-mobile-web-app-title" content="SWR" />
            </>
        );
    },
    footerText: ( ) => <a
        href="/"
        rel="noopener"
        className="inline-flex items-center gap-2 no-underline text-current font-semibold"
    >
        <Logo height={15} />
       <span>Designed by itroger</span>
    </a>,
};
