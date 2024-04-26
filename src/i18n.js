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
					"I've been working as a web developer for more than two years, focusing on the back-end area.",
				tecnologias: "FAVORITE TECHNOLOGIES",
				laravel:
					"The technology that I have used the most, creating projects and maintaining several others. I find its ecosystem very complete and I think it is the best framework for creating applications with the MVC model.",
				graphQL:
					"I haven't used it much, but it will always have a special place in my heart, because it is what I used to create the back-end of my degree project as a technologist. I especially like pairing it with Apollo.",
				django:
					"I have used it to create personal projects, like Laravel I really like everything it has to offer to create applications, combining it with the fact that is written with Python, it becomes a very efficient tool for me.",
				codeIgniter:
					"It is the first technology I used in my work trip, and I have maintained several applications with it,although I like it, I don't think is as complete as Laravel.",
				nodejs:
					"Another JS framework for the backend just like GraphQL, and I think it is one of the best options for creating REST APIS.",
				react:
					"My favorite framework to work on the front-end, like GraphQL, will always have a place in my heart because I used it to create the front-end of my degree project as a technologist.",
				jquery:
					"Several of the applications I have maintained have jQuery, so I gained experience in it, and over time I ended up liking it a lot",
				bd: "I have worked with SQL and noSQL databases, but I have more experience with SQL databases.",
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
					My first job, which I started thanks to a school internship. It was about 6 months in which I learned a lot, from how to run a project with a team of developers, to the basics of using PHP frameworks, creating a survey application for a school. I would have liked to stay with them longer, but around that time was when I started college, and I couldn't continue going in person, so it was time to look for a virtual job.
				`,
				tepache: `
					With almost 2 years of working with them, providing service to the Mexican company called Adventa, I really learned many things, from optimization, to the maintenance process of different applications made in PHP, which were used to maintain and provide the inventory of several stores and companies. Currently I am not providing support service, only developing new improvements to their applications.
				`,
				enero: "JANUARY",
				junio: "JUNE",
				hoy: "TODAY",
			},
		},
		es: {
			translation: {
				experiencia: "EXPERIENCIA",
				estudios: "ESTUDIOS",
				idioma: "Español",
				saludo: "Hola! Me llamo Camilo Montes de Oca Mora.",
				intro:
					"Llevo trabajando como desarrollador web por más de dos años, enfocándome en el área del back-end",
				tecnologias: "TECNOLOGÍAS FAVORITAS",
				laravel:
					"La tecnología que mas eh usado, creando proyectos y dandole mantenimiento a varios otros. Se me hace realmente comodo su ecosistema y creo que es el mejor framework para crear aplicaciones con el modelo MVC.",
				graphQL:
					"No lo eh usado mucho, pero siempre tendrá un lugar especial en mi corazón, porque es lo que use para crear el back-end mi proyecto de titulación como tecnólogo. Me gusta especialmente combinarlo con Apollo.",
				django:
					"Lo eh usado para crear proyectos personales, al igual que laravel me gusta mucho todo lo que tiene para ofrecer para crear aplicaciones, combinándolo con el hecho de que se usa Python, se convierte en una herramienta muy eficiente para mi.",
				codeIgniter:
					"Es la primera tecnología que use en el ámbito laboral, con la cual eh dado mantenimiento a unos sitios, aunque me guste, no se me hace tan completo como Laravel.",
				nodejs:
					"Otro framework de JS para el backend como GraphQL, y creo que es una de las mejores opciones para crear REST API.",
				react:
					"Mi framework favorito para trabajar en el front-end, al igual que GraphQL, siempre tendrá un lugar en mi corazón porque lo use para crear el front-end de mi proyecto de titulación como tecnólogo.",
				jquery:
					"Varias de las aplicaciones a las que le he dado mantenimiento tienen jQuery, por lo que conseguí experiencia en el, y con el tiempo me fue gustando mucho.",
				bd: "Eh trabajado con bases de datos SQL y no-SQL, pero tengo mas experiencia con las bases de datos SQL.",
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
					Mi primer trabajo, que inicio gracias a una pasantía de la escuela. Fueron unos 6 meses en los que aprendí mucho, desde el como llevar un proyecto con un equipo, hasta las bases del uso de frameworks de PHP creando una aplicación de llenado de encuestas para una escuela. Me hubiera gustado quedarme más tiempo con ellos, pero por esa época fue cuando empecé la universidad, y no podía seguir yendo de manera presencial, entonces fue momento de buscar un trabajo virtual.
				`,
				tepache: `
					Con casi 2 años de estar trabajando con ellos, dándole servicio a la empresa mexicana llamada Adventa, realmente aprendí muchas cosas, desde la optimización, hasta el proceso de mantenimiento a diferentes aplicaciones hechas en PHP, las cuales servían para mantener y proveer el inventario de varias tiendas. Actualmente no les estoy brindando el servicio de soporte, solamente el de desarrollar nuevas mejoras a sus distintas aplicaciones. 
				`,
				enero: "ENERO",
				junio: "JUNIO",
				hoy: "HOY"
			},
		},
	},
});

export default i18n;
