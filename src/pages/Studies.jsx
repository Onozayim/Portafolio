import { Container, Image } from "react-bootstrap";
import { useTranslationHook } from "../hooks/translation";
import { motion } from "framer-motion";

import ceti from "../assets/ceti.png";
import cucei from "../assets/cucei.png";
import "../App.css";

function Studies() {
	const { t } = useTranslationHook();

	return (
		<Container>
			<motion.div
				whileInView={{ scale: 1, opacity: 1 }}
				initial={{ scale: 0, opacity: 0 }}
				transition={{ duration: 0.3 }}
				className="mb-3 mt-5"
			>
				<h2 className="text-center text-warning font-bold">2018 - 2022</h2>
				<h1 className="text-center mb-3 font-bold">CETI COLOMOS</h1>
				<hr className="border border-warning border-2 opacity-50 w-50 m-auto" />
			</motion.div>
			<div className="row mt-2 mb-5">
				<motion.div
					whileInView={{ scale: 1, opacity: 1 }}
					initial={{ scale: 0, opacity: 0 }}
					transition={{ duration: 0.3, delay: 0.3 }}
					className="col-md-4 align-self-center text-center"
				>
					<Image
						src={ceti}
						className="imageContainer"
						alt="Camilo Montes de Oca Mora CETI COLOMOS"
					/>
				</motion.div>
				<motion.div
					whileInView={{ scale: 1, opacity: 1 }}
					initial={{ scale: 0, opacity: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="col-md-8 align-self-center"
				>
					<p
						dangerouslySetInnerHTML={{ __html: t("ceti") }}
						className="fw-medium card-font"
					></p>
				</motion.div>
			</div>

			<motion.div
				whileInView={{ scale: 1, opacity: 1 }}
				initial={{ scale: 0, opacity: 0 }}
				transition={{ duration: 0.3 }}
				className="mb-3"
			>
				<h2 className="text-center text-primary font-bold">2022 - HOY</h2>
				<h1 className="text-center mb-3 font-bold">CUCEI</h1>
				<hr className="border border-primary border-2 opacity-50 w-50 m-auto" />
			</motion.div>
			<div className="row mt-2 mb-6">
				<motion.div
					whileInView={{ scale: 1, opacity: 1 }}
					initial={{ scale: 0, opacity: 0 }}
					transition={{ duration: 0.3, delay: 0.3 }}
					className="col-md-4 order-md-2 align-self-center"
				>
					<Image
						src={cucei}
						className="imageContainer"
						alt="Camilo Montes de Oca Mora CUCEI UDG Universidad de Guadalajara"
					/>
				</motion.div>
				<motion.div
					whileInView={{ scale: 1, opacity: 1 }}
					initial={{ scale: 0, opacity: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="col-md-8 order-md-1 align-self-center"
				>
					<p
						dangerouslySetInnerHTML={{ __html: t("cucei") }}
						className="fw-medium card-font"
					></p>
				</motion.div>
			</div>
		</Container>
	);
}

export { Studies };
