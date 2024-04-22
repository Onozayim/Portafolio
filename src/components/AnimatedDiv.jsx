import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function AnimatedDiv({ children, variant }) {
	const control = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) control.start("visible");
		else control.start("hidden");
	}, [control, inView]);
	return (
		<motion.div ref={ref} variants={variant}  initial="hidden" animate={control}>
			{children}
		</motion.div>
	);
}
export { AnimatedDiv };
