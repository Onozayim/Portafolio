import { Container, Image } from "react-bootstrap";
import { useTranslationHook } from "../hooks/translation";
import { motion } from "framer-motion";

import creative from "../assets/creative.png";
import tepache from "../assets/tepache2.png";
import itmatters from "../assets/itmatters.png"
import "../App.css";

function Experience() {
	const { t } = useTranslationHook();
	return (
		<Container>
			<br />
			<motion.div
				whileInView={{ scale: 1, opacity: 1 }}
				initial={{ scale: 0, opacity: 0 }}
				transition={{ duration: 0.3 }}
				className="mb-3 mt-5"
			>
				<h2 className="text-center mb-3 font-bold text-dark-color">IT Matters ({t("dic")} 2024 - {t("hoy")})</h2>
				<hr className="text-dark-color border-3 opacity-75 w-50 m-auto" />
			</motion.div>
			<div className="row mt-5 mb-5">
				<motion.div
					whileInView={{ scale: 1, opacity: 1 }}
					initial={{ scale: 0, opacity: 0 }}
					transition={{ duration: 0.3, delay: 0.3 }}
					className="col-md-4 align-self-center justify-self-center text-center mt-3"
				>
					<Image
						src={itmatters}
						className="imageContainer rounded-circle"
						alt="Camilo Montes de Oca Mora creative soft"
					/>
				</motion.div>
				<motion.div
					whileInView={{ scale: 1, opacity: 1 }}
					initial={{ scale: 0, opacity: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}z
					className="col-md-8 align-self-center mt-3"
				>
					<p
						dangerouslySetInnerHTML={{ __html: t("creativeSoft") }}
						className="fw-medium card-font"
					></p>
				</motion.div>
				
			<motion.div
				whileInView={{ scale: 1, opacity: 1 }}
				initial={{ scale: 0, opacity: 0 }}
				transition={{ duration: 0.3 }}
				className="mb-3 mt-5"
			>
				<h2 className="text-center mb-3 font-bold text-color">TEPACHE SOFT ({t("junio")} 2022 - {t("dic")} 2024)</h2>
				<hr className="text-color border-3 opacity-75 w-50 m-auto" />
			</motion.div>
			<div className="row mt-5 mb-6">
				<motion.div
					whileInView={{ scale: 1, opacity: 1 }}
					initial={{ scale: 0, opacity: 0 }}
					transition={{ duration: 0.3, delay: 0.3 }}
					className="col-md-4 order-md-2 align-self-center text-center mt-3"
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
					className="col-md-8 order-md-1 align-self-center mt-3"
				>
					<p
						dangerouslySetInnerHTML={{ __html: t("tepache") }}
						className="fw-medium card-font"
					></p>
				</motion.div>
			</div>

			<motion.div
				whileInView={{ scale: 1, opacity: 1 }}
				initial={{ scale: 0, opacity: 0 }}
				transition={{ duration: 0.3 }}
				className="mb-3 mt-5"
			>
				<h2 className="text-center mb-3 font-bold text-dark-color">CREATIVE SOFT ({t("enero")} 2022 - {t("junio")} 2022)</h2>
				<hr className="text-dark-color border-3 opacity-75 w-50 m-auto" />
			</motion.div>
			<div className="row mt-5 mb-5">
				<motion.div
					whileInView={{ scale: 1, opacity: 1 }}
					initial={{ scale: 0, opacity: 0 }}
					transition={{ duration: 0.3, delay: 0.3 }}
					className="col-md-4 align-self-center justify-self-center text-center mt-3"
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
					transition={{ duration: 0.5, delay: 0.3 }}z
					className="col-md-8 align-self-center mt-3"
				>
					<p
						dangerouslySetInnerHTML={{ __html: t("creativeSoft") }}
						className="fw-medium card-font"
					></p>
				</motion.div>
			</div>

			
			</div>

			
		</Container>
	);
}

export { Experience };
