import laravel from "../assets/laravel.jpg";
// import graphql from "../assets/graphql.jpg";
import django from "../assets/django.jpg";
// import codeigniter from "../assets/codeigniter.jpg";
// import nodejs from "../assets/nodejs.jpg";
import react from "../assets/react.jpg";
// import jquery from "../assets/jquery.jpg";
import bd from "../assets/bd.jpg";
import linux from "../assets/linux.png"
import aws from "../assets/aws.jpg"
import java from "../assets/springboot.png"

import { useTranslationHook } from "../hooks/translation";

function SLIDES() {
    const { t } = useTranslationHook(); 
    return [
		{
			titulo: "PHP",
			text: t("laravel"),
			image: laravel,
		},
		{
			titulo: "React",
			text: t("js"),
			image: react,
		},
		{
			titulo: "Java", 
			text: t("java"),
			image: java
		},
		{
			titulo: "Python",
			text: t("python"),
			image: django,
		},
		{
			titulo: t("basesDeDatos"),
			text: t("bd"),
			image: bd,
		},
		{
			titulo: t("server"),
			text: t("linux"),
			image: linux
		},
		{
			titulo: t("cloudservices"),
			text: t("cloud"),
			image: aws
		}
	];
}
export { SLIDES };
