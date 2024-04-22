import { Container, Navbar, Nav } from "react-bootstrap";
import { motion } from "framer-motion";

import { LANGUAGES } from "../constants/languages";
import { useTranslationHook } from "../hooks/translation";

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
				<Container className="border-bottom py-2">
					<Navbar.Brand href="/">MONTES</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Nav variant="underline" defaultActiveKey={location}>
							<Nav.Link href="/experiencia">{t("experiencia")}</Nav.Link>
							<Nav.Link href="/estudios">{t("estudios")}</Nav.Link>
							<select
								defaultValue={language}
								className="form-select"
								onChange={onChangeLang}
							>
								{LANGUAGES.map(({ code, label }) => (
									<option key={code} value={code}>
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
