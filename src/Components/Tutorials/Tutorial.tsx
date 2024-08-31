"use client";

import Image from "next/image";
import { ReactNode, useRef } from "react";
import { cn } from "@/libs/utils";
import { motion, easeIn } from "framer-motion";

interface Props {
	title: string;
	description: ReactNode;
	image: string;
}

export default function Tutorial(props: Props) {
	const ref = useRef<HTMLDivElement>(null);
	const titleWords = props.title.split(" ");
	const lastWord = titleWords.pop();

	// Animations

	const heading = {
		hidden: {
			opacity: 0,
			y: 100,
			easeIn,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	const leading = {
		hidden: {
			scaleX: 0,
		},
		visible: {
			scaleX: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	

	const desc = {
		hidden: {
			opacity: 0,
			y: 100,
			easeIn,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.7,
				duration: 0.5,
			},
		},
	};
	const img = {
		hidden: {
			opacity: 0,
			y: 100,
			easeIn,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.9,
				duration: 0.5,
			},
		},
	};

	return (
		<div
			ref={ref}
			className={cn(
				"min-h-screen flex justify-center bg-background",
				"relative"
			)}
		>
			<div
				className={cn(
					"top-[-190px] left-[-400px] w-[1103px] h-[1017px]",
					"absolute bg-[radial-gradient(35.19%_35.19%_at_50%_50%,rgba(59,149,255,0.17)_0%,rgba(28,106,197,0)_100%)] overflow-clip"
				)}
			></div>

			<div className="absolute w-[513px] bg-[rgba(0,0,0,0.2)] h-full z-[-1] right-0 hidden md:flex"></div>
			<div className="flex items-center justify-center w-full">
				<div
					className={cn(
						"grid md:grid-cols-2 grid-cols-1 content-center items-center justify-between gap-32 w-full mx-16 md:mx-32"
					)}
				>
					<div className="flex flex-col justify-start gap-5">
						<motion.h1
							initial="hidden"
							whileInView="visible"
							variants={heading}
							className={cn("h1")}
						>
							{titleWords.join(" ")}{" "}
							<span className={cn("h1", "last-word")}>
								{lastWord}
							</span>
						</motion.h1>
						<motion.div
							initial="hidden"
							whileInView="visible"
							variants={leading}
							className=""
						>
							<div className="w-20 h-[0.15rem] bg-primary"></div>
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							variants={desc}
							className="font-normal"
						>
							{props.description}
						</motion.div>
					</div>

					<motion.div
						initial="hidden"
						whileInView="visible"
						variants={img}
					>
						<Image
							className="flex items-center justify-center ml-0 md:ml-12 lg:ml-32 z-[1]"
							src={props.image}
							alt={props.title}
							width={400}
							height={1079}
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
