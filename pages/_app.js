import "../styles/globals.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { useRouter } from "next/router";

const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ClerkProvider
      frontendApi={clerkFrontendApi}
      navigate={(to) => router.push(to)}
    >
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
