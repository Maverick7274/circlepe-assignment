"use client";

import Tutorial from "@/Components/Tutorials/Tutorial";
import Bullet from "@/Assets/bulletpoint.png";
import Image from "next/image";
import Slider from "@/Components/Slider";
import HorizontalSlider from "@/Components/HorizontalSlider";
import { cn } from "@/libs/utils";
import { use, useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const steps = [
	{
		id: 0,
		title: "How does it work?",
		description:
			"We make it possible in a quick and easy few steps process, takes max 5 mins.",
		image: "https://res.cloudinary.com/da1x0nwv3/image/upload/v1725031973/how-it-works_oaxb1q.png",
	},
	{
		id: 1,
		title: "Step 1",
		description: (
			<div>
				<p className="text-active flex items-center justify-start gap-5">
					<span>
						<Image
							src={Bullet}
							alt="bullet"
							width={16}
							height={16}
							className="hidden md:flex"
						/>
					</span>
					<span className="font-medium">
						Tenant selects the property
					</span>
				</p>
				<p className="flex items-center justify-start gap-5">
					<span>
						<Image
							src={Bullet}
							alt="bullet"
							width={16}
							height={16}
							className="hidden md:flex"
						/>
					</span>
					<span className="font-medium">
						Tenant selects flexible rent tenure & corresponding
						amount
					</span>
				</p>
			</div>
		),
		image: "https://res.cloudinary.com/da1x0nwv3/image/upload/v1725031973/how-it-works_oaxb1q.png",
		arrowImage:
			"https://res.cloudinary.com/da1x0nwv3/image/upload/v1725062349/arrow_fcgub4.png",
	},
	{
		id: 2,
		title: "Step 1",
		description: (
			<div>
				<p className="flex items-center justify-start gap-5">
					<span>
						<Image
							src={Bullet}
							alt="bullet"
							width={16}
							height={16}
							className="hidden md:flex"
						/>
					</span>
					<span className="font-medium">
						Tenant selects the property
					</span>
				</p>
				<p className="text-active flex items-center justify-start gap-5">
					<span>
						<Image
							src={Bullet}
							alt="bullet"
							width={16}
							height={16}
							className="hidden md:flex"
						/>
					</span>
					<span className="font-medium">
						Tenant selects flexible rent tenure & corresponding
						amount
					</span>
				</p>
			</div>
		),
		image: "https://res.cloudinary.com/da1x0nwv3/image/upload/v1725034702/step-1_fwslws.png",
		arrowImage:
			"https://res.cloudinary.com/da1x0nwv3/image/upload/v1725062349/arrow_fcgub4.png",
	},
	{
		id: 3,
		title: "Step 2",
		description: (
			<div>
				<p className="text-active flex items-center justify-start gap-5">
					<span>
						<Image
							src={Bullet}
							alt="bullet"
							width={16}
							height={16}
							className="hidden md:flex"
						/>
					</span>
					<span className="font-medium">
						Tenant selects Pay with Circle enabling:
					</span>
				</p>
				<ul className="list-disc list-inside leading-7 ml-7">
					<li>Zero security deposit move-in</li>
					<li>Reduced rent offer</li>
					<li>3 months salary cover</li>
				</ul>
			</div>
		),
		image: "https://res.cloudinary.com/da1x0nwv3/image/upload/v1725034702/step-2_n4wyqj.png",
		arrowImage:
			"https://res.cloudinary.com/da1x0nwv3/image/upload/v1725062349/arrow_fcgub4.png",
	},
	{
		id: 4,
		title: "Step 3",
		description: (
			<p className="text-active flex items-center justify-start gap-5">
				<span>
					<Image
						src={Bullet}
						alt="bullet"
						width={16}
						height={16}
						className="hidden md:flex"
					/>
				</span>
				<span className="font-medium">
					Smooth Onboarding for the Tenant begins
				</span>
			</p>
		),
		image: "https://res.cloudinary.com/da1x0nwv3/image/upload/v1725031973/step-3_cgbzyn.png",
		arrowImage:
			"https://res.cloudinary.com/da1x0nwv3/image/upload/v1725062349/arrow_fcgub4.png",
	},
	{
		id: 5,
		title: "Step 4",
		description: (
			<div>
				<p className="text-active flex items-center justify-start gap-5">
					<span>
						<Image
							src={Bullet}
							alt="bullet"
							width={16}
							height={16}
							className="hidden md:flex"
						/>
					</span>
					<span className="font-medium">
						Tenant gets approved to move-in:
					</span>
				</p>
				<ul className="list-disc list-inside leading-7 ml-7">
					<li>Get Zero-security deposit approval</li>
					<li>Zero cost EMI = Monthly Rent</li>
				</ul>
			</div>
		),
		image: "https://res.cloudinary.com/da1x0nwv3/image/upload/v1725031973/step-4_aeul90.png",
		arrowImage:
			"https://res.cloudinary.com/da1x0nwv3/image/upload/v1725062349/arrow_fcgub4.png",
	},
];

export default function Home() {
	const container = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["end end", "start start"],
	});

	const translateY = useTransform(scrollYProgress, [0, 1], [500, -100]);

	const gradient = {
		hidden: {
			scale: 0,
			opacity: 0,
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 1,
				delay: 1.5,
				type: "spring",
			},
		},
	};

	return (
		<main ref={container} className="">
			<motion.div className="sticky top-0 right-0">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={gradient}
					style={{ y: translateY }}
					transition={{
						repeat: Infinity,
						repeatType: "mirror",
						ease: "easeInOut",
						duration: 0.5,
					}}
					className={cn(
						"top-[-190px] left-[-400px] w-[1103px] h-[1017px]",
						"hidden md:flex absolute bg-[radial-gradient(35.19%_35.19%_at_50%_50%,rgba(59,149,255,0.17)_0%,rgba(28,106,197,0)_100%)] overflow-clip"
					)}
				></motion.div>
			</motion.div>
			<div className="hidden md:flex">
				<Slider />
			</div>
			<div className="flex md:hidden">
				<HorizontalSlider />
			</div>

			<div className="">
				{steps.map((step) => (
					<motion.div className="" key={step.id}>
						<Tutorial
							title={step.title}
							description={step.description}
							image={step.image}
						/>
					</motion.div>
				))}
			</div>
		</main>
	);
}
