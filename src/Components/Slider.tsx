"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Slider() {
	const { scrollYProgress } = useScroll();

    const background = useTransform(scrollYProgress, [0, 1], ["#5AA5FD", "#84F15E"]);
	return (
		<div className="h-full flex items-center justify-center">
			<div className="fixed right-[150px] top-[160px] h-1/2 w-2 bg-[#424242] rounded transform origin-top-left z-[5]"></div>
			<div className="flex items-center justify-center">
				<motion.div
					style={{
						scaleY: scrollYProgress,
                        background,
						x: 0,
					}}
					className="fixed right-[150px] top-[160px] h-1/2 w-2 bg-primary rounded transform origin-top-left z-20"
				></motion.div>
			</div>
		</div>
	);
}
