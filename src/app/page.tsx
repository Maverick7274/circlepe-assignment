import Tutorial from "@/Components/Tutorials/Tutorial";
import Bullet from "@/Assets/bulletpoint.png";
import Image from "next/image";
import Slider from "@/Components/Slider";

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
			<ul>
				<li>Tenant selects the property</li>
				<li>
					Tenant selects flexible rent tenure & corresponding amount
				</li>
			</ul>
		),
		image: "https://res.cloudinary.com/da1x0nwv3/image/upload/v1725034702/step-1_fwslws.png",
	},
	{
		id: 2,
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
	},
	{
		id: 3,
		title: "Step 3",
		description: (
			<ul>
				<li>Smooth Onboarding for the Tenant begins</li>
			</ul>
		),
		image: "https://res.cloudinary.com/da1x0nwv3/image/upload/v1725031973/step-3_cgbzyn.png",
	},
	{
		id: 4,
		title: "Step 4",
		description: (
			<ul>
				<li>
					Tenant gets approved to move-in:
					<ul>
						<li>Gets Zero-security deposit approval</li>
						<li>Zero cost EMI = Monthly Rent</li>
					</ul>
				</li>
			</ul>
		),
		image: "https://res.cloudinary.com/da1x0nwv3/image/upload/v1725031973/step-4_aeul90.png",
	},
];

export default function Home() {
	return (
		<main className="">
			<div className="fixed">
				<Slider />
			</div>
			<div className="">
				{steps.map((step) => (
					<Tutorial
						key={step.id}
						title={step.title}
						description={step.description}
						image={step.image}
					/>
				))}
			</div>
		</main>
	);
}
