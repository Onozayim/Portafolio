import { Container, Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import {
	Navigation,
	Scrollbar,
	Pagination,
	A11y,
	EffectCoverflow,
} from "swiper/modules";
import CardComponent from "./components/Card";
import { SLIDES } from "./constants/slides";
import { useTranslationHook } from "./hooks/translation";
import { motion } from "framer-motion";

import yo from "./assets/gintoki.jpg";
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
	const slides = SLIDES();

	const { t } = useTranslationHook();

	return (
		<Container>
			<div className="row mt-5 mb-5">
				<div className="col-md-5 align-self-center">
					<motion.p
						whileInView={{ scale: 1, opacity: 1 }}
						initial={{ scale: 0, opacity: 0 }}
						transition={{ delay: 0.3, duration: 0.4 }}
						className="font-monospace text-center"
					>
						{t("saludo")}
					</motion.p>
					<motion.h1
						whileInView={{ scale: 1, x: 0, opacity: 1 }}
						initial={{ scale: 0, x: -100, opacity: 0 }}
						transition={{ delay: 0.3, duration: 0.3 }}
						className="text-center font"
					>
						{t("intro")}
					</motion.h1>
				</div>
				<motion.div
					className="col-md-7"
					whileInView={{ scale: 1, opacity: 1 }}
					initial={{ scale: 0, opacity: 0 }}
					transition={{ duration: 0.3 }}
					dura
				>
					<Image
						src={yo}
						rounded
						className="imageContainer"
						alt="Camilo Montes de Oca Mora"
					/>
				</motion.div>
			</div>

			<motion.h1
				initial={{ scale: 0, opacity: 0 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.3 }}
				className="mb-5 font"
			>
				{t("tecnologias")}
			</motion.h1>

			<motion.div
				initial={{ scale: 0, opacity: 0 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.4 }}
			>
				<Swiper
					spaceBetween={0}
					grabCursor={true}
					centeredSlides={true}
					loop={true}
					effect="coverflow"
					modules={[Navigation, Scrollbar, Pagination, A11y, EffectCoverflow]}
					pagination={{ clickable: true }}
					className="pb-5"
					slidesPerView={2}
					coverflowEffect={{
						rotate: 0,
						stretch: 50,
						depth: 100,
						modifier: 2.5,
					}}
				>
					{slides?.map(({ image, text, titulo }, index) => {
						return (
							<SwiperSlide virtualIndex={index} key={index}>
								<CardComponent image={image} text={text} titulo={titulo} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</motion.div>
			<br />
			<br />
			<br />
		</Container>
	);
}

export { App };
