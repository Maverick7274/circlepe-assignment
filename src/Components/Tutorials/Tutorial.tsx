import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/libs/utils";
import Bounded from "@/libs/Bounded";

interface Props {
	title: string;
	description: ReactNode;
	image: string;
}

export default function Tutorial(props: Props) {
	const titleWords = props.title.split(" ");
	const lastWord = titleWords.pop();

	return (
		<div className={cn("min-h-screen flex justify-center", "relative")}>
			<div className="absolute top-[-69px] left-[-400px] w-[1103px] h-[1017px] bg-[radial-gradient(35.19%_35.19%_at_50%_50%,rgba(59,149,255,0.17)_0%,rgba(28,106,197,0)_100%)] overflow-clip"></div>
			<div className="absolute w-[513px] bg-[rgba(0,0,0,0.2)] h-full z-[-1] right-0 hidden md:flex"></div>
			<div className="flex items-center justify-center w-full">
				<div
					className={cn(
						"grid md:grid-cols-2 grid-cols-1 content-center items-center justify-between gap-32 w-full px-0 md:px-32",
					)}
				>
					<div className="flex flex-col justify-start gap-5">
						<h1 className={cn("h1")}>
							{titleWords.join(" ")}{" "}
							<span className={cn("h1", "last-word")}>
								{lastWord}
							</span>
						</h1>
						<div className="">
							<div className="w-20 h-[0.15rem] bg-primary"></div>
						</div>
						<div className="font-normal">{props.description}</div>
					</div>

					<Image
						className="flex items-center justify-center"
						src={props.image}
						alt={props.title}
						width={450}
						height={1079}
					/>
				</div>
			</div>
		</div>
	);
}
