import { motion } from 'framer-motion';

export default function App() {
	return (
		<h1 className="text-3xl font-bold font-inter">
			<div className=" pb-20">
				<p className="text-center py-10 border-b border-purple-500">
					Framer Motion Example Practice
				</p>
			</div>
			<motion.div
				className=" w-[100px] h-[100px] rounded-full bg-purple-500"
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			/>
		</h1>
	);
}
