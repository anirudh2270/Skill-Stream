import React from "react";
import DashboardSidebar from "@/components/dashboardSidebar";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ResizablePanelGroup
			autoSaveId="persistence"
			direction="horizontal"
			className=" w-full min-h-[100vh] border">
			<ResizablePanel defaultSize={17} minSize={7} maxSize={17}>
				<main className="hidden border-r h-full bg-muted/40 md:block">
					<DashboardSidebar />
				</main>
			</ResizablePanel>
			<ResizableHandle withHandle />
			<ResizablePanel defaultSize={75}>
				<main className="flex flex-1 flex-col gap-4 lg:gap-6">
					<div className="p-6">{children}</div>
				</main>
			</ResizablePanel>
		</ResizablePanelGroup>
	);
};

export default layout;
