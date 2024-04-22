import laravel from "../assets/laravel.jpg";
import graphql from "../assets/graphql.jpg";
import django from "../assets/django.jpg";
import codeigniter from "../assets/codeigniter.jpg";
import nodejs from "../assets/nodejs.jpg";
import react from "../assets/react.jpg";
import jquery from "../assets/jquery.jpg";
import bd from "../assets/bd.jpg";

import { useTranslationHook } from "../hooks/translation";

function SLIDES() {
    const { t } = useTranslationHook(); 
    return [
		{
			titulo: "Laravel",
			text: t("laravel"),
			image: laravel,
		},
		{
			titulo: "GraphQL",
			text: t("graphQL"),
			image: graphql,
		},
		{
			titulo: "Django",
			text: t("django"),
			image: django,
		},
		{
			titulo: "CodeIgniter",
			text: t("codeIgniter"),
			image: codeigniter,
		},
		{
			titulo: "Nodejs",
			text: t("nodejs"),
			image: nodejs,
		},
		{
			titulo: "React",
			text: t("react"),
			image: react,
		},
		{
			titulo: "jQuery",
			text: t("jquery"),
			image: jquery,
		},
		{
			titulo: t("basesDeDatos"),
			text: t("bd"),
			image: bd,
		},
	];
}
export { SLIDES };
