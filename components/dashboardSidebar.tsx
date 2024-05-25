import Link from "next/link";
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-react";
import { Button } from "./ui/button";

const DashboardSidebar = () => {
	return (
		<div className="flex h-full max-h-screen flex-col gap-2 ms-4 pt-6">
			<div className="flex-1">
				<nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-1">
					<Link
						href="#"
						className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
						<Home className="h-4 w-4" />
						Dashboard
					</Link>
					<Link
						href="#"
						className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
						<ShoppingCart className="h-4 w-4" />
						Orders
					</Link>
					<Link
						href="#"
						className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary">
						<Package className="h-4 w-4" />
						Products{" "}
					</Link>
					<Link
						href="#"
						className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
						<Users className="h-4 w-4" />
						Customers
					</Link>
					<Link
						href="#"
						className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
						<LineChart className="h-4 w-4" />
						Analytics
					</Link>
				</nav>
			</div>
			<div className="mt-auto p-4">
				<Card x-chunk="dashboard-02-chunk-0">
					<CardHeader className="p-2 pt-0 md:p-4">
						<CardTitle className="text-base font-bold">
							Upgrade to Pro
						</CardTitle>
						<CardDescription>
							Unlock all features and get unlimited access to our support team.
						</CardDescription>
					</CardHeader>
					<CardContent className="p-2 pt-0 md:p-4 md:pt-0">
						<Button size="sm" className="w-full">
							Upgrade
						</Button>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default DashboardSidebar;
