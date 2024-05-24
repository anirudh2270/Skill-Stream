import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const Navbar = () => {
	const { userId } = auth();

	return (
		<header className="sticky z-50 top-0 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60  px-4 md:px-6">
			<nav className="hidden mx-auto max-w-screen-xl w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-16">
				<Link href={"/"} className="flex items-center gap-3">
					<Image
						width={25}
						height={25}
						src={"images/logo.svg"}
						alt="logo"></Image>
					<h1 className="text-xl font-bold">SkillStream</h1>
				</Link>
				<div className="flex items-center gap-7 flex-grow">
					<Link
						href="#"
						className="text-muted-foreground transition-colors hover:text-foreground">
						Dashboard
					</Link>
					<Link
						href="#"
						className="text-muted-foreground transition-colors hover:text-foreground">
						Orders
					</Link>
					<Link
						href="#"
						className="text-muted-foreground transition-colors hover:text-foreground">
						Products
					</Link>
					<Link
						href="#"
						className="text-muted-foreground transition-colors hover:text-foreground">
						Customers
					</Link>
					<Link
						href="#"
						className="text-foreground transition-colors hover:text-foreground">
						Settings
					</Link>
				</div>

				<div>
					{!userId && (
						<Link href={"/sign-in"}>
							<Button size={"sm"} className="">
								Sign In
							</Button>
						</Link>
					)}

					<UserButton />
				</div>
			</nav>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="shrink-0 md:hidden">
						<Menu className="h-5 w-5" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<nav className="grid gap-6 text-lg font-medium">
						<Link
							href="#"
							className="flex items-center gap-2 text-lg font-semibold">
							<span className="sr-only">Acme Inc</span>
						</Link>
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground">
							Dashboard
						</Link>
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground">
							Orders
						</Link>
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground">
							Products
						</Link>
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground">
							Customers
						</Link>
						<Link href="#" className="hover:text-foreground">
							Settings
						</Link>
					</nav>
				</SheetContent>
			</Sheet>
		</header>
	);
};

export default Navbar;
