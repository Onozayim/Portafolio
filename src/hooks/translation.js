import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function useTranslationHook() {
	const { i18n, t } = useTranslation();

	const language = localStorage.getItem("language") ?? "en";

	useEffect(() => {
		i18n.changeLanguage(language);
	}, []);

	return { t, i18n, language };
}

export { useTranslationHook };
