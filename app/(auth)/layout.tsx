import DotPattern from "@/components/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<div className="grid m-auto grid-cols-2 justify-center items-center h-[100vh] max-w-screen-xl ">
				<div className="flex flex-col gap-5 max-w-[90%]">
					<Image
						height={250}
						width={250}
						src={"images/graduation.svg"}
						alt="party popper"></Image>

					<h1 className="text-5xl font-black text-balance">
						Unlock Your Potential with SkillStream
					</h1>

					<p className="text-muted-foreground  text-xl">
						Where Every Click Paves the Path to Personal Growth, Professional
						Mastery, and Lifelong Success.
					</p>
				</div>
				<div className="flex justify-center mt-16">{children}</div>
			</div>
			<DotPattern
				width={20}
				height={20}
				cx={1}
				cy={1}
				cr={1}
				className={cn(
					"[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
				)}
			/>
		</div>
	);
};

export default layout;
