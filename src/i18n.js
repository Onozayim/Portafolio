import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
	lng: "en",
	fallbackLng: "en",
	interpolation: {
		escapeValue: false,
	},
	resources: {
		en: {
			translation: {
				experiencia: "EXPERIENCE",
				estudios: "STUDIES",
				idioma: "English",
				saludo: "Hi! My name is Camilo Montes de Oca Mora.",
				intro:
					"I've been working as a software developer for about 4 years, focusing on the back-end area.",
				tecnologias: "FAVORITE TECHNOLOGIES",
				laravel:
					"The technology that I've used the most, I know a lot of people doesn't like PHP, but personally I love it. Especially Laravel, I think it's the fullest web framework out there, it's really easy to work and more important, to maintain. That said, I am aware of its flaws, for example, the performance not being the best, but every proyect requires different requirements.",
				graphQL:
					"I haven't used it much, but it will always have a special place in my heart, because it is what I used to create the back-end of my degree project as a technologist. I especially like pairing it with Apollo.",
				python:
					"I'm not an expert using Python, mainly because I haven't worked in the area of data analysis. That said, the times I've used it for the back-end or to create microservices, I've had a good experience as a developer.",
				codeIgniter:
					"It is the first technology I used in my work trip, and I have maintained several applications with it,although I like it, I don't think is as complete as Laravel.",
				nodejs:
					"Another JS framework for the backend just like GraphQL, and I think it is one of the best options for creating REST APIS.",
				js:
					"JavaScript es el lenguaje ideal para trabajar en el front-end. No me he especializado en desarrollo front-end, pero es innegable el impacto que JavaScript ha tenido en la industria. No me entusiasma incluir JavaScript en todas las áreas del proyecto, pero creo que es perfecto para crear una buena experiencia de usuario. And I think projects built with Node.js and Express are quite understandable.",
				java: "It isn't a very pleasant experience as a developer, but... I like it? It's clearly a very good technology, but I don't know, it's a love-hate relationship.",
				jquery:
					"Several of the applications I have maintained have jQuery, so I gained experience in it, and over time I ended up liking it a lot",
				bd: "I've worked with both SQL and NoSQL databases, and I have more experience with SQL-based databases. However, for NoSQL databases, I've only used MongoDB.",
				basesDeDatos: "Data bases",
				ceti: `
					The place where I started studying programming at the age of 15. It was a quite complicated journey, but it was exciting as complicated.
					<br />
					Here I learned several things, from the basics of programming with C++, to more advanced things like web programming and databases.
					<br />
					I also learned several things outside of academics, things like patience and perseverance to achieve everything I set my mind to, as well as being self-taught to learn new technologies depending on the needs of the jobs. And after 4 years of hard work, I was able to get a software development technologist degree carrying out one last project: <a href=’ https://wirhir.netlify.app/login’> Wirhir (currently down). </a>
					<br />
					A social network where anyone can go and post their problems, so others can advise them. As well as having a call with a random person so they can talk about their problems.
				`,
				cucei: `
					I am currently studying computer engineering at CUCEI university, the study plan is very similar to that of CETI, but it is helping me a lot to review everything I have seen and to further reinforce what I already know.
					<br />
					But not only that, since I am also learning new things, my favorite being server administration. Which is being very useful to me to upload and manage my personal projects.
					<br />
					I also have to say that I am having a good time, the university experience is being fun, and it is very useful to listen to the stories that the teachers tell us.
				`,
				creativeSoft: `
					My first job, which I started thanks to a school internship. It was about 3 months in which I learned a lot, from how to run a project with a team of developers, to the basics of using PHP frameworks, creating a survey application for a school. I would have liked to stay with them longer, but around that time was when I started college, and I couldn't continue going in person, so it was time to look for a virtual job.
				`,
				tepache: `
					With almost 3 years working with them, providing service to the Mexican company called Adventa, I really learned many things, such as the development, optimization and maintenance of projects written in PHP, which were used to maintain and supply the inventory of various stores and companies. It was a great experience and I am very grateful for it.
				`,
				itm: "In the final stages of my studies, I was looking for a job that would allow me to finish college. Unfortunately, my limited availability made it very difficult to find work, but I was lucky enough to find ITMatters. They gave me the opportunity to work for them despite my limited availability. With them, I learned many non-technical skills, such as communicating with clients, analyzing and proposing business ideas, and leading teams. Unfortunately, I wasn't able to grow much in the technical area, as the work mainly involved ServiceNow or very simple JavaScript and Python code.", 
				enero: "JANUARY",
				marzo: "MARCH",
				junio: "JUNE",
				oct: "OCTOBER",
				hoy: "TODAY",
				dic: "DECEMBER",
				server: "Server Administration",
				linux: "I don't consider myself a sysadmin or anything like that; I've only managed my own servers using Debian with different services like HTTP, SMTP, IMAP, POP3, FTP, SSH, etc. But I think I have the basic knowledge to avoid giving 777 permissions to the /etc folder.",
				cloudservices: "Cloud services",
				cloud: "NO, I'm not an expert, and I'm far from it. I only have knowledge of the basic AWS and Azure services.NO, I'm not an expert, and I'm far away of being one"
			},
		},
		es: {
			translation: {
				experiencia: "EXPERIENCIA",
				estudios: "ESTUDIOS",
				idioma: "Español",
				saludo: "Hola! Me llamo Camilo Montes de Oca Mora.",
				intro:
					"Llevo trabajando como desarrollador de software por alrededor de 4 años, enfocándome en el área del back-end",
				tecnologias: "TECNOLOGÍAS FAVORITAS",
				laravel:
					"La tecnología que más he usado. Sé que a mucha gente no le gusta PHP, pero personalmente me encanta. Especialmente Laravel. Creo que es el framework web más completo que existe; es muy fácil de usar y, lo que es más importante, de mantener. Dicho esto, soy consciente de sus defectos; por ejemplo, que su rendimiento no es el mejor, pero cada proyecto tiene requisitos diferentes.",
				graphQL:
					"No lo eh usado mucho, pero siempre tendrá un lugar especial en mi corazón, porque es lo que use para crear el back-end mi proyecto de titulación como tecnólogo. Me gusta especialmente combinarlo con Apollo.",
				python:
					"No soy un experto usando python, principalmente porque no he trabajado en el area de analisis de datos, dicho eso, las veces que lo he usado para el back-end o para crear microservicios tuve una buena experiencia como desarrollador",
				codeIgniter:
					"Es la primera tecnología que use en el ámbito laboral, con la cual eh dado mantenimiento a unos sitios, aunque me guste, no se me hace tan completo como Laravel.",
				nodejs:
					"Otro framework de JS para el backend como GraphQL, y creo que es una de las mejores opciones para crear REST API.",
				react:
					"JavaScript es EL lenguaje ideal para trabajar en el front-end. No me he especializado en desarrollo front-end, pero es innegable el impacto que JavaScript ha tenido en la industria. No me entusiasma incluir JavaScript en todas las áreas del proyecto, pero creo que es perfecto para crear una buena experiencia de usuario. Y creo que los proyectos creados en node - express son bastantes entendibles",
				jquery:
					"Varias de las aplicaciones a las que le he dado mantenimiento tienen jQuery, por lo que conseguí experiencia en el, y con el tiempo me fue gustando mucho.",
				java: "Una experiencia como desarrollador no muy placentera, pero... me gusta? Es evidente que es una muy buena tecnología, but I don't know, it's a love-hate relationship",
				bd: "He trabajado con bases de datos SQL y noSQL, tengo más experiencia con bases de datos basados ​​en SQL. Pero para base de datos no SQL solo he usado MongoDB.",
				basesDeDatos: "Bases de datos",
				ceti: `
					El lugar donde empecé a estudiar programación a los 15 años, fue un viaje bastante complicado, pero lo que lo tuvo de complicado lo tuvo de emocionante.
					<br />
					Aquí aprendí varias cosas, desde las bases de la programación con c++, hasta cosas mas avanzadas como programación web y bases de datos.
					<br />
					También aprendí varias cosas fuera de lo académico, cosas como la paciencia y la perseverancia para lograr todo lo que me proponga, así como el ser autodidacta para ir aprendiendo nuevas tecnologías dependiendo de las necesidades de los trabajos.
					Y Después de 4 años de trabajo duro, me pude titular como tecnólogo en desarrollo de software realizando un último proyecto final: <a href=’ https://wirhir.netlify.app/login’> Wirhir (actualmente dado de baja).</a>
					<br />
					Una red social donde alguien puede ir a publicar sus problemas para que los demás lo puedan aconsejar. Así como tener una llamada con una persona aleatoria para que ambas puedan desahogarse.  
				`,
				cucei: `
					Actualmente estoy cursando la carrera de ingeniería en informática en el CUCEI, el plan de estudios es muy parecido al del CETI, pero me está sirviendo mucho para repasar todo lo que eh visto y para reforzar aún más lo ya sabido.
					<br />
					Pero no solo eso, ya que también estoy aprendiendo cosas nuevas, mi favorita siendo la administración de servidores. Que me está siendo muy útil para subir y administrar mis proyectos personales.
					<br />
					También tengo que decir que me la estoy pasando bien, le experiencia universitaria está siendo divertida, y es muy útil escuchar las historias que nos cuentan los profesores.
				`,
				creativeSoft: `
					Mi primer trabajo, que inicio gracias a una pasantía de la escuela. Fueron unos 3 meses en los que aprendí mucho, desde el como llevar un proyecto con un equipo, hasta las bases del uso de frameworks de PHP creando una aplicación de llenado de encuestas para una escuela. Me hubiera gustado quedarme más tiempo con ellos, pero por esa época fue cuando empecé la universidad, y no podía seguir yendo de manera presencial, entonces fue momento de buscar un trabajo virtual.
				`,
				tepache: `
					Con casi 3 años trabajando con ellos, brindando servicio a la empresa mexicana llamada Adventa, realmente aprendí muchas cosas, como el desarrollo, optimización y mantenimiento de proyectos escritos en PHP, las cuales se utilizaban para mantener y proveer el inventario de varias tiendas y empresas. Fue una gran experiencia y estoy muy agradecido por ello.
				`,
				itm: `
					En los ultimos momentos de la carrera, estaba a la busca de un empleo que me dejara terminar con la universidad, lamentablemente el no tener toda la disponibilidad horario hace muy dificíl la contratación, pero tuve la surte de encontrar a la empresa ITMatters, me dieron la oportunidad de trabajar para ellos aún con la poca disponibilidad horaria, con ellos aprendí muchas habilidades no técnicas, como el hablar con clientes, hacer analysis y propuestas del negocio, liderar equipos, etc. Aunque lamentablemente no pude crecer mucho en la area técnica, ya que los trabajos eran principalmente con ServiceNow, o codigos muy simples de JS y Python.
				`,
				enero: "ENERO",
				junio: "JUNIO",
				hoy: "HOY",
				dic: "DICIEMBRE",
				oct: "OCTUBRE",
				marzo: "MARZO",
				server: "Administración de servidores",
				linux: "No me considero un sysadmin ni nada parecido, solo he administrado mis propios servidores usando Debian con diferentes servicios como http, smtp, imap, pop3, ftp, ssh etc. Pero creo que tengo los conocimientos básicos para no darle permisos 777 a la carpeta de /etc",
				cloudservices: "Servicios de la nube",
				cloud: "NO, no soy un experto y estoy muy lejos de serlo. Solo tengo el conocimiento de los servicios basicos de AWS y Azure"
			},
		},
	},
});

export default i18n;
