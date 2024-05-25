import DotPattern from "@/components/dot-pattern";
import { cn } from "@/lib/utils";
import React from "react";

const Home = () => {
	return (
		<main>
			<section className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
				<div className=" mx-auto sm:px-6 lg:px-8 max-w-screen-xl">
					<div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
						<div className="self-center lg:col-span-4">
							<h1 className="text-3xl font-black text-gray-900 text-balance sm:text-4xl xl:text-5xl">
								Unlock Your Potential 🚀 with SkillStream
							</h1>
							<p className="mt-5 text-base font-normal leading-7 text-gray-500">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Vehicula massa in enim luctus.
							</p>
							<div className="relative inline-flex mt-9 group">
								<div className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200" />
								<a
									href="#"
									className="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
									role="button">
									Read Exclusive Blog
								</a>
							</div>
						</div>
						<div className="self-end lg:order-last lg:pb-20 lg:col-span-3">
							<p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
								⚡️ Latest Picks
							</p>
							<div className="mt-6 space-y-6 lg:space-y-8">
								<div className="relative overflow-hidden">
									<div className="flex items-start lg:items-center">
										<img
											className="object-cover w-12 h-12 rounded-lg shrink-0"
											src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-1.png"
										/>
										<p className="ml-5 text-base font-bold leading-6 text-gray-900">
											<a href="#">
												How a visual artist redefines success in graphic design
												<span className="absolute inset-0" aria-hidden="true" />
											</a>
										</p>
									</div>
								</div>
								<div className="relative overflow-hidden">
									<div className="flex items-start lg:items-center">
										<img
											className="object-cover w-12 h-12 rounded-lg shrink-0"
											src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-2.png"
										/>
										<p className="ml-5 text-base font-bold leading-6 text-gray-900">
											<a href="#">
												How a visual artist redefines success in graphic design
												<span className="absolute inset-0" aria-hidden="true" />
											</a>
										</p>
									</div>
								</div>
								<div className="relative overflow-hidden">
									<div className="flex items-start lg:items-center">
										<img
											className="object-cover w-12 h-12 rounded-lg shrink-0"
											src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-3.png"
										/>
										<p className="ml-5 text-base font-bold leading-6 text-gray-900">
											<a href="#">
												How a visual artist redefines success in graphic design
												<span className="absolute inset-0" aria-hidden="true" />
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="self-end lg:col-span-5">
							<img
								className="w-full mx-auto"
								src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/author.png"
							/>
						</div>
					</div>
				</div>
			</section>
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
		</main>
	);
};

export default Home;
