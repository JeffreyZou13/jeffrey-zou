export default function Projects() {
  return (
		<div className="content-container">
			<h1>Projects</h1>
			<div className="grid-images">
				<div className="project-item">
					<img src="/stackoverflow.PNG" className="project-item-image" />
					<div className="project-item-description">
						<a href="https://github.com/JeffreyZou13/StackOverflow-Clone" target="_blank">
							<h3>StackOverflow</h3>
						</a>
						<p className="tech-badge react">React</p>
						<p className="tech-badge node">Node</p>
						<p className="tech-badge mongo">MongoDB</p>
						<p className="tech-badge cassandra">Cassandra</p>
						<p className="tech-badge rabbit">RabbitMQ</p>
						<p>A StackOverflow clone deployed using Vultr that is able to support hundreds of transactions/second 
							and hundreds of 100,000s of concurrent users. Built with React, Node.js, Express.js, MongoDB, Apache Cassandra, 
							RabbitMQ, ElasticSearch, PostFix, and Nginx.</p>
					</div>
				</div>
				<div className="project-item">
					<img src="/comictoon.PNG" className="project-item-image" />
					<div className="project-item-description">
						<a href="https://github.com/Fanngdai/ComicToon" target="_blank">
							<h3>ComicToon</h3>
						</a>
						<p className="tech-badge react">React</p>
						<p className="tech-badge java">Java</p>
						<p className="tech-badge mongo">MongoDB</p>
						<p>A website that allows users to create their own comics. Users can also create a series of comics, 
							read other people's comics, and subscribe to comic series.</p>
					</div>
				</div>
				<div className="project-item">
					<img src="/inlinked.png" className="project-item-image" />
					<div className="project-item-description">
						<a href="https://github.com/swuleung/InLinked" target="_blank">
							<h3>InLinked</h3>
						</a>
						<p className="tech-badge angular">Angular</p>
						<p className="tech-badge node">Node</p>
						<p className="tech-badge mysql">MySQL</p>
						<p>An attractive LinkedIn clone created with React and Bootstrap. 
							Connects to a back-end using RESTful API calls secured with JWT.</p>
					</div>
				</div>
				<div className="project-item">
				<img src="https://raw.githubusercontent.com/Fanngdai/Jotto.cloud/8c6f9683e206cfac2de0fceb6b684e4258a09ca6/front-end/src/assets/Logo.png" className="project-item-image" />
					<div className="project-item-description">
						<a href="https://github.com/Fanngdai/Jotto.cloud" target="_blank">
							<h3>Jotto</h3>
						</a>
						<p className="tech-badge angular">Angular</p>
						<p className="tech-badge java">Java</p>
						<p className="tech-badge mongo">MongoDB</p>
						<p>A word game where the user tries to a 5 letter word against the computer. After the user guesses, they are shown 
							how many letters they got guessing. Users have their own accounts can they can see previous games.</p>
					</div>
				</div>
				<div className="project-item">
				<img src="https://raw.githubusercontent.com/swuleung/ac.js/ab4a17301afb549fc9e4d2e1e1241f899e35026e/Malex/images/malex-icon.png" className="project-item-image" />
					<div className="project-item-description">
						<a href="https://github.com/swuleung/ac.js" target="_blank">
							<h3>Malex</h3>
						</a>
						<p className="tech-badge javascript">JavaScript</p>
						<p className="tech-badge python">Python</p>
						<p className="tech-badge chrome">Chrome</p>
						<p>A malicious chrome extension that extracts user data like browser history and passwords as part of the Computer Security Fundamentals course</p>
					</div>
				</div>
			</div>
		</div>
	)
}