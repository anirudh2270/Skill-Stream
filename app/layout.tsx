import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider
			appearance={{
				layout: {
					shimmer: true,
					animations: true,
				},
				variables: {
					colorPrimary: "#4A3AFF",
				},
			}}>
			<html lang="en">
				<body>
					<div className="absolute w-full">
						<Navbar />
					</div>
					<div className="px-4 lg:px-0">
						<div>{children}</div>
						<Footer />
					</div>
				</body>
			</html>
		</ClerkProvider>
	);
}
