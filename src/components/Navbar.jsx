import { Container, Navbar, Nav, Image } from "react-bootstrap";
import { motion } from "framer-motion";

import { LANGUAGES } from "../constants/languages";
import { useTranslationHook } from "../hooks/translation";

import logo from "../assets/logo.png"

function NavbarComponent({ children }) {
	const { i18n, t, language } = useTranslationHook();
	const location = "/" + window.location.href.split("/").slice(-1)[0];

	const onChangeLang = (e) => {
		i18n.changeLanguage(e.target.value);
		localStorage.setItem("language", i18n.language);
	};

	return (
		<motion.div
			animate={{y:0}}
			initial={{y:-100}}
		>
			<Navbar
				className="bg-white mb-5"
				expand="sm"
				fixed="top"
				bg="light"
				data-bs-theme="light"
			>
				<Container className="py-2 custom-border">
					<Navbar.Brand href="/"><Image src={logo} className="logo-image" /> </Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Nav variant="underline" defaultActiveKey={location}>
							<Nav.Link href="/experiencia" className="font-bold text-color">{t("experiencia")}</Nav.Link>
							<Nav.Link href="/estudios" className="font-bold text-color">{t("estudios")}</Nav.Link>
							<select
								defaultValue={language}
								className="form-select font-bold text-color"
								onChange={onChangeLang}
							>
								{LANGUAGES.map(({ code, label }) => (
									<option className="font-bold text-color" key={code} value={code}>
										{label}
									</option>
								))}
							</select>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<br />
			<br />
			{children}
		</motion.div>
	);
}

export { NavbarComponent };
