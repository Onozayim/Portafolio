import { Container, Image } from "react-bootstrap";
import { useTranslationHook } from "../hooks/translation";
import { motion } from "framer-motion";

import creative from "../assets/creative.png";
import tepache from "../assets/tepache.jpg";
import "../App.css";

function Experience() {
	const { t } = useTranslationHook();
	return (
		<Container>
			<motion.div
				whileInView={{ scale: 1, opacity: 1 }}
				initial={{ scale: 0, opacity: 0 }}
				transition={{ duration: 0.3 }}
				className="mb-3 mt-5"
			>
				<h2 className="text-center text-warning">Enero 2022 - Junio 2022</h2>
				<h1 className="text-center mb-3">CREATIVE SOFT</h1>
				<hr className="border border-warning border-2 opacity-50 w-50 m-auto" />
			</motion.div>
			<div className="row mt-5 mb-5">
				<motion.div
					whileInView={{ scale: 1, opacity: 1 }}
					initial={{ scale: 0, opacity: 0 }}
					transition={{ duration: 0.3, delay: 0.3 }}
					className="col-md-4 align-self-center justify-self-center text-center"
				>
					<Image
						src={creative}
						className="imageContainer rounded-circle"
						alt="Camilo Montes de Oca Mora creative soft"
					/>
				</motion.div>
				<motion.div
					whileInView={{ scale: 1, opacity: 1 }}
					initial={{ scale: 0, opacity: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="col-md-8 align-self-center"
				>
					<p
						dangerouslySetInnerHTML={{ __html: t("creativeSoft") }}
						className="fw-medium"
					></p>
				</motion.div>
			</div>

			<motion.div
				whileInView={{ scale: 1, opacity: 1 }}
				initial={{ scale: 0, opacity: 0 }}
				transition={{ duration: 0.3 }}
				className="mb-3"
			>
				<h2 className="text-center text-primary">2022 - HOY</h2>
				<h1 className="text-center mb-3">TEPACHE SOFT</h1>
				<hr className="border border-primary border-2 opacity-50 w-50 m-auto" />
			</motion.div>
			<div className="row mt-5 mb-6">
				<motion.div
					whileInView={{ scale: 1, opacity: 1 }}
					initial={{ scale: 0, opacity: 0 }}
					transition={{ duration: 0.3, delay: 0.3 }}
					className="col-md-4 order-md-2 align-self-center text-center"
				>
					<Image
						src={tepache}
						className="imageContainer rounded-circle"
						alt="Camilo Montes de Oca Mora Tepache soft"
					/>
				</motion.div>
				<motion.div
					whileInView={{ scale: 1, opacity: 1 }}
					initial={{ scale: 0, opacity: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="col-md-8 order-md-1 align-self-center"
				>
					<p
						dangerouslySetInnerHTML={{ __html: t("tepache") }}
						className="fw-medium"
					></p>
				</motion.div>
			</div>
		</Container>
	);
}

export { Experience };
